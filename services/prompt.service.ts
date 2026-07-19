import { createPrompt, getPrompt, getPrompts, removePrompt, updatePrompt } from "@/services/firebase.service";
import type { SavedPromptInput } from "@/types/prompt";

export { getPrompt, getPrompts, removePrompt };

export async function savePrompt(input: SavedPromptInput) {
  return createPrompt(input);
}

export async function editPrompt(id: string, input: Partial<SavedPromptInput>) {
  return updatePrompt(id, input);
}
