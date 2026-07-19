// Backward-compatible API alias. New clients should use POST /api/prompts.
import { POST as createPrompt } from "@/app/api/prompts/route";

export const runtime = "nodejs";
export { createPrompt as POST };
