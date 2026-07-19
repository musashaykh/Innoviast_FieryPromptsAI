import { failure, logApiError, success } from "@/lib/api";
import { parseNonEmptyString } from "@/lib/apiValidation";
import { isGroqConfigured } from "@/lib/groq";
import { GroqServiceError, improvePromptWithAi } from "@/services/groq.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = parseNonEmptyString(body?.prompt);
    if (!prompt) return failure("VALIDATION_ERROR", "Please provide a prompt to improve.", 400);
    if (!isGroqConfigured()) return failure("SERVICE_UNAVAILABLE", "AI service is not configured yet. Please add the Groq API key.", 503);
    return success({
      improvedPrompt: await improvePromptWithAi(prompt),
      changes: ["Improved clarity and structure", "Refined instructions and constraints", "Preserved the original intent"],
    });
  } catch (error) {
    logApiError("POST /api/improve", error);
    if (error instanceof GroqServiceError) return failure("SERVICE_UNAVAILABLE", "AI service is temporarily unavailable. Please try again later.", 503);
    return failure("INTERNAL_ERROR", "Something went wrong. Please try again later.", 500);
  }
}
