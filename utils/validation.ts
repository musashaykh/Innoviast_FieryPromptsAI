import { AUDIENCES } from "@/constants/audiences";
import { OUTPUT_FORMATS } from "@/constants/outputFormats";
import { PROMPT_FIELD_LIMITS } from "@/constants/promptBuilder";
import { TONES } from "@/constants/tones";
import type { PromptField, PromptFormErrors, PromptFormValues } from "@/types/prompt";

const requiredFields: Array<{ field: PromptField; label: string; minimum?: number }> = [
  { field: "title", label: "prompt title", minimum: 3 },
  { field: "role", label: "role", minimum: 3 },
  { field: "task", label: "task", minimum: 10 },
  { field: "tone", label: "tone" },
  { field: "audience", label: "target audience" },
  { field: "outputFormat", label: "output format" },
];

function displayName(field: PromptField): string {
  return field.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase());
}

export function validatePromptForm(values: PromptFormValues): PromptFormErrors {
  const errors: PromptFormErrors = {};

  requiredFields.forEach(({ field, label, minimum }) => {
    const value = values[field].trim();
    if (!value) errors[field] = `Please enter a ${label}.`;
    else if (minimum && value.length < minimum) errors[field] = `${displayName(field)} must be at least ${minimum} characters.`;
  });

  (Object.entries(PROMPT_FIELD_LIMITS) as Array<[keyof typeof PROMPT_FIELD_LIMITS, number]>).forEach(([field, limit]) => {
    if (values[field].trim().length > limit) errors[field] = `${displayName(field)} cannot exceed ${limit} characters.`;
  });

  if (values.tone && !TONES.includes(values.tone as (typeof TONES)[number])) errors.tone = "Select a supported tone.";
  if (values.audience && !AUDIENCES.includes(values.audience as (typeof AUDIENCES)[number])) errors.audience = "Select a supported target audience.";
  if (values.outputFormat && !OUTPUT_FORMATS.includes(values.outputFormat as (typeof OUTPUT_FORMATS)[number])) errors.outputFormat = "Select a supported output format.";

  return errors;
}
