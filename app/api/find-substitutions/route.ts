import { getAIClient, MODEL } from "@/lib/anthropic";
import { FOOD_SUBSTITUTION_PROMPT } from "@/lib/prompts";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { ingredient, context, reason, lang } = await request.json();

    if (!ingredient || typeof ingredient !== "string" || ingredient.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Ingredient is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = await getAIClient().chat.completions.create({
      model: MODEL,
      max_tokens: 1500,
      stream: true,
      messages: [
        {
          role: "user",
          content: FOOD_SUBSTITUTION_PROMPT(
            ingredient,
            context ?? "general cooking",
            reason ?? "dietary preference",
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
    console.error("Substitution error:", error);
    return new Response(JSON.stringify({ error: "Failed to find substitutions" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
