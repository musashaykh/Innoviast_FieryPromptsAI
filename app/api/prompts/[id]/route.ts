import { isFirebaseAdminConfigured } from "@/firebase/admin";
import { failure, logApiError, success } from "@/lib/api";
import { parseSavedPromptUpdate } from "@/lib/apiValidation";
import { editPrompt, getPrompt, removePrompt } from "@/services/prompt.service";

type Context = { params: Promise<{ id: string }> };

export const runtime = "nodejs";

function isValidDocumentId(id: string) {
  return id.length > 0 && id.length <= 1500 && !id.includes("/");
}

function unavailable() {
  return failure("SERVICE_UNAVAILABLE", "Prompt storage is not configured yet. Add Firebase Admin credentials to the server environment.", 503);
}

export async function GET(_: Request, { params }: Context) {
  try {
    if (!isFirebaseAdminConfigured()) return unavailable();
    const id = (await params).id;
    if (!isValidDocumentId(id)) return failure("VALIDATION_ERROR", "Invalid prompt identifier.", 400);
    const prompt = await getPrompt(id);
    return prompt ? success({ prompt }) : failure("NOT_FOUND", "Requested prompt was not found.", 404);
  } catch (error) { logApiError("GET /api/prompts/:id", error); return failure("SERVICE_UNAVAILABLE", "Unable to retrieve this prompt. Please try again.", 503); }
}

export async function PUT(request: Request, { params }: Context) {
  try {
    const input = parseSavedPromptUpdate(await request.json());
    if (!input) return failure("VALIDATION_ERROR", "Please provide valid prompt updates.", 400);
    if (!isFirebaseAdminConfigured()) return unavailable();
    const id = (await params).id;
    if (!isValidDocumentId(id)) return failure("VALIDATION_ERROR", "Invalid prompt identifier.", 400);
    if (!await getPrompt(id)) return failure("NOT_FOUND", "Requested prompt was not found.", 404);
    await editPrompt(id, input);
    return success({});
  } catch (error) { if (error instanceof SyntaxError) return failure("VALIDATION_ERROR", "Request body must be valid JSON.", 400); logApiError("PUT /api/prompts/:id", error); return failure("SERVICE_UNAVAILABLE", "Unable to update this prompt. Please try again.", 503); }
}

export async function DELETE(_: Request, { params }: Context) {
  try {
    if (!isFirebaseAdminConfigured()) return unavailable();
    const id = (await params).id;
    if (!isValidDocumentId(id)) return failure("VALIDATION_ERROR", "Invalid prompt identifier.", 400);
    if (!await getPrompt(id)) return failure("NOT_FOUND", "Requested prompt was not found.", 404);
    await removePrompt(id);
    return success({});
  } catch (error) { logApiError("DELETE /api/prompts/:id", error); return failure("SERVICE_UNAVAILABLE", "Unable to delete this prompt. Please try again.", 503); }
}
