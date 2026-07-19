import Groq from "groq-sdk";

export const PRIMARY_GROQ_MODEL = "llama-3.3-70b-versatile";
export const FALLBACK_GROQ_MODEL = "llama-3.1-8b-instant";

export function isGroqConfigured() {
  return Boolean(process.env.GROQ_API_KEY);
}

export function groqClient() {
  if (!process.env.GROQ_API_KEY) throw new Error("GROQ_NOT_CONFIGURED");
  return new Groq({ apiKey: process.env.GROQ_API_KEY, timeout: 15_000, maxRetries: 0 });
}

export function groqModels() {
  const primary = process.env.GROQ_MODEL || PRIMARY_GROQ_MODEL;
  const fallback = process.env.GROQ_FALLBACK_MODEL || FALLBACK_GROQ_MODEL;
  return primary === fallback ? [primary] : [primary, fallback];
}
