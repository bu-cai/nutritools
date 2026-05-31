import OpenAI from "openai";

// Kimi (Moonshot AI) — OpenAI-compatible API
export const anthropic = new OpenAI({
  apiKey: process.env.KIMI_API_KEY,
  baseURL: "https://api.moonshot.cn/v1",
});

// moonshot-v1-8k  / moonshot-v1-32k / moonshot-v1-128k
export const MODEL = "moonshot-v1-8k";
