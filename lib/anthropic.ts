import OpenAI from "openai";

// Lazy factory — client is created at request time, not at module load time.
// This prevents "Missing credentials" errors during next build.
export function getAIClient(): OpenAI {
  return new OpenAI({
    apiKey: process.env.KIMI_API_KEY,
    baseURL: "https://api.moonshot.cn/v1",
  });
}

// moonshot-v1-8k / moonshot-v1-32k / moonshot-v1-128k
export const MODEL = "moonshot-v1-8k";
