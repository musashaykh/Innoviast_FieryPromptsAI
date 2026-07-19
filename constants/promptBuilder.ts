import type { PromptFormValues } from "@/types/prompt";

export const PROMPT_FIELD_LIMITS = {
  title: 100,
  role: 100,
  task: 300,
  context: 500,
  constraints: 500,
  examples: 1000,
  successCriteria: 500,
  negativeInstructions: 500,
} as const;

export const INITIAL_PROMPT_VALUES: PromptFormValues = {
  title: "",
  role: "",
  task: "",
  context: "",
  constraints: "",
  examples: "",
  tone: "Professional",
  audience: "General Audience",
  outputFormat: "Markdown",
  successCriteria: "",
  negativeInstructions: "",
};
