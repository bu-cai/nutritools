import { anthropic, MODEL } from "@/lib/anthropic";
import { NUTRITION_ANALYZER_PROMPT } from "@/lib/prompts";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { ingredients, lang } = await request.json();

    if (!ingredients || typeof ingredients !== "string" || ingredients.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Ingredients are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = await anthropic.chat.completions.create({
      model: MODEL,
      max_tokens: 1000,
      stream: true,
      messages: [
        {
          role: "user",
          content: NUTRITION_ANALYZER_PROMPT(ingredients, lang === "zh" ? "zh" : "en"),
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
    console.error("Nutrition analysis error:", error);
    return new Response(JSON.stringify({ error: "Failed to analyze nutrition" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
