export interface PromptFormValues {
  title: string;
  role: string;
  task: string;
  context: string;
  constraints: string;
  examples: string;
  tone: string;
  audience: string;
  outputFormat: string;
  successCriteria: string;
  negativeInstructions: string;
}

export type PromptField = keyof PromptFormValues;
export type PromptFormErrors = Partial<Record<PromptField, string>>;

export interface SavedPrompt extends PromptFormValues {
  id: string;
  generatedPrompt: string;
  improvedPrompt?: string;
  qualityScore: number;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export type SavedPromptInput = PromptFormValues & Pick<SavedPrompt, "generatedPrompt" | "qualityScore"> & {
  improvedPrompt?: string;
  isFavorite?: boolean;
};
