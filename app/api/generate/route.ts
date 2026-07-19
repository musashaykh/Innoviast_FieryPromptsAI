import { failure, logApiError, success } from "@/lib/api";
import { parsePromptValues, promptValidationMessage } from "@/lib/apiValidation";
import { isGroqConfigured } from "@/lib/groq";
import { scorePrompt } from "@/lib/promptScoring";
import { generatePromptWithAi, GroqServiceError } from "@/services/groq.service";

export async function POST(request: Request) {
  try {
    const values = parsePromptValues(await request.json());
    if (!values) return failure("VALIDATION_ERROR", "Please provide valid prompt fields.", 400);
    const validationError = promptValidationMessage(values);
    if (validationError) return failure("VALIDATION_ERROR", validationError, 400);

    if (!isGroqConfigured()) return failure("SERVICE_UNAVAILABLE", "AI service is not configured yet. Please add the Groq API key.", 503);
    const generatedPrompt = await generatePromptWithAi(values);
    return success({ generatedPrompt, qualityScore: scorePrompt(values).score });
  } catch (error) {
    logApiError("POST /api/generate", error);
    if (error instanceof GroqServiceError) return failure("SERVICE_UNAVAILABLE", "AI service is temporarily unavailable. Please try again later.", 503);
    return failure("INTERNAL_ERROR", "Something went wrong. Please try again later.", 500);
  }
}
