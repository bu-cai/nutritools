import { anthropic, MODEL } from "@/lib/anthropic";
import { MEAL_PLAN_GENERATOR_PROMPT } from "@/lib/prompts";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { goal, calories, mealsPerDay, restrictions, lang } = await request.json();

    if (!goal || !calories || !mealsPerDay) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = await anthropic.chat.completions.create({
      model: MODEL,
      max_tokens: 4000,
      stream: true,
      messages: [
        {
          role: "user",
          content: MEAL_PLAN_GENERATOR_PROMPT(
            goal,
            Number(calories),
            Number(mealsPerDay),
            restrictions ?? [],
            lang === "zh" ? "zh" : "en"
          ),
        },
      ],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Meal plan error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate meal plan" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
