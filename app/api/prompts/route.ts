import { isFirebaseAdminConfigured } from "@/firebase/admin";
import { failure, logApiError, success } from "@/lib/api";
import { parseSavedPromptInput } from "@/lib/apiValidation";
import { getPrompts, savePrompt } from "@/services/prompt.service";

export const runtime = "nodejs";

function unavailable() {
  return failure("SERVICE_UNAVAILABLE", "Prompt storage is not configured yet. Add Firebase Admin credentials to the server environment.", 503);
}

export async function GET() {
  try {
    if (!isFirebaseAdminConfigured()) return unavailable();
    return success({ prompts: await getPrompts() });
  } catch (error) {
    logApiError("GET /api/prompts", error);
    return failure("SERVICE_UNAVAILABLE", "Unable to retrieve prompts at the moment. Please try again.", 503);
  }
}

export async function POST(request: Request) {
  try {
    const input = parseSavedPromptInput(await request.json());
    if (!input) return failure("VALIDATION_ERROR", "Please provide a complete, valid prompt to save.", 400);
    if (!isFirebaseAdminConfigured()) return unavailable();
    return success({ documentId: await savePrompt(input) }, 201);
  } catch (error) {
    if (error instanceof SyntaxError) return failure("VALIDATION_ERROR", "Request body must be valid JSON.", 400);
    logApiError("POST /api/prompts", error);
    return failure("SERVICE_UNAVAILABLE", "Unable to save your prompt at the moment. Please try again.", 503);
  }
}
