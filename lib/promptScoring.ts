import type { PromptFormValues } from "@/types/prompt";

export interface PromptScore {
  score: number;
  suggestions: string[];
}

const weightedFields: Array<{ field: keyof PromptFormValues; points: number }> = [
  { field: "title", points: 10 }, { field: "role", points: 15 }, { field: "task", points: 20 }, { field: "tone", points: 10 }, { field: "audience", points: 10 }, { field: "outputFormat", points: 10 }, { field: "context", points: 8 }, { field: "constraints", points: 6 }, { field: "examples", points: 4 }, { field: "successCriteria", points: 4 }, { field: "negativeInstructions", points: 3 },
];

export function scorePrompt(values: PromptFormValues): PromptScore {
  const score = weightedFields.reduce((total, { field, points }) => total + (values[field].trim() ? points : 0), 0);
  const suggestions: string[] = [];
  if (!values.context.trim()) suggestions.push("Add context so the AI understands the scenario.");
  if (!values.constraints.trim()) suggestions.push("Add constraints to make the result more precise.");
  if (!values.examples.trim()) suggestions.push("Add an example or reference to guide the response.");
  if (!values.successCriteria.trim()) suggestions.push("Define what a successful result should achieve.");
  if (!values.negativeInstructions.trim()) suggestions.push("State what the AI should avoid for clearer boundaries.");
  return { score, suggestions: suggestions.length ? suggestions : ["Excellent coverage. Your prompt includes every quality signal."] };
}

export function scoreLabel(score: number): string {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Needs Improvement";
  return "Poor";
}
