import type { PromptFormValues } from "@/types/prompt";

const sections: Array<{ field: keyof PromptFormValues; label: string }> = [
  { field: "role", label: "Role" },
  { field: "task", label: "Objective" },
  { field: "context", label: "Context" },
  { field: "constraints", label: "Constraints" },
  { field: "examples", label: "Examples" },
  { field: "tone", label: "Tone" },
  { field: "audience", label: "Target Audience" },
  { field: "outputFormat", label: "Output Format" },
  { field: "successCriteria", label: "Success Criteria" },
  { field: "negativeInstructions", label: "Negative Instructions" },
];

export function buildPrompt(values: PromptFormValues): string {
  return sections
    .map(({ field, label }) => {
      const value = values[field].trim();
      return value ? `## ${label}\n${value}` : "";
    })
    .filter(Boolean)
    .join("\n\n");
}
