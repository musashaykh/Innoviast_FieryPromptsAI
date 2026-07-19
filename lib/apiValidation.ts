import type { PromptFormValues } from "@/types/prompt";
import type { SavedPromptInput } from "@/types/prompt";
import { PROMPT_FIELD_LIMITS } from "@/constants/promptBuilder";
import { TONES } from "@/constants/tones";
import { AUDIENCES } from "@/constants/audiences";
import { OUTPUT_FORMATS } from "@/constants/outputFormats";
import { validatePromptForm } from "@/utils/validation";

export function parsePromptValues(payload: unknown): PromptFormValues | null {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;

  const source = payload as Record<string, unknown>;
  const fields: Array<keyof PromptFormValues> = [
    "title", "role", "task", "context", "constraints", "examples", "tone", "audience", "outputFormat", "successCriteria", "negativeInstructions",
  ];

  if (fields.some((field) => typeof source[field] !== "string")) return null;
  const values = {} as PromptFormValues;
  fields.forEach((field) => { values[field] = String(source[field]).trim(); });
  return values;
}

export function promptValidationMessage(values: PromptFormValues) {
  const errors = validatePromptForm(values);
  return Object.values(errors)[0] ?? null;
}

export function parseNonEmptyString(value: unknown, maximum = 10000) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= maximum ? trimmed : null;
}

export function parseSavedPromptInput(payload: unknown): SavedPromptInput | null {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  const source = payload as Record<string, unknown>;
  const values = parsePromptValues(source);
  const generatedPrompt = parseNonEmptyString(source.generatedPrompt);
  const qualityScore = source.qualityScore;

  if (!values || promptValidationMessage(values) || !generatedPrompt || typeof qualityScore !== "number" || !Number.isFinite(qualityScore) || qualityScore < 0 || qualityScore > 100) return null;
  if (typeof source.improvedPrompt !== "undefined" && !parseOptionalString(source.improvedPrompt)) return null;
  if (typeof source.isFavorite !== "undefined" && typeof source.isFavorite !== "boolean") return null;

  return {
    ...(values ?? {}),
    ...(generatedPrompt ? { generatedPrompt } : {}),
    ...(typeof qualityScore === "number" && qualityScore >= 0 && qualityScore <= 100 ? { qualityScore } : {}),
    ...(typeof source.improvedPrompt === "string" ? { improvedPrompt: source.improvedPrompt.trim() } : {}),
    ...(typeof source.isFavorite === "boolean" ? { isFavorite: source.isFavorite } : {}),
  } as SavedPromptInput;
}

function parseOptionalString(value: unknown, maximum = 10000) {
  return typeof value === "string" && value.trim().length <= maximum;
}

function isValidUpdatedField(field: keyof PromptFormValues, value: string) {
  if (field === "title" || field === "role") return value.length >= 3 && value.length <= PROMPT_FIELD_LIMITS[field];
  if (field === "task") return value.length >= 10 && value.length <= PROMPT_FIELD_LIMITS.task;
  if (field in PROMPT_FIELD_LIMITS) return value.length <= PROMPT_FIELD_LIMITS[field as keyof typeof PROMPT_FIELD_LIMITS];
  if (field === "tone") return TONES.includes(value as (typeof TONES)[number]);
  if (field === "audience") return AUDIENCES.includes(value as (typeof AUDIENCES)[number]);
  return OUTPUT_FORMATS.includes(value as (typeof OUTPUT_FORMATS)[number]);
}

export function parseSavedPromptUpdate(payload: unknown): Partial<SavedPromptInput> | null {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  const source = payload as Record<string, unknown>;
  const fields: Array<keyof PromptFormValues> = ["title", "role", "task", "context", "constraints", "examples", "tone", "audience", "outputFormat", "successCriteria", "negativeInstructions"];
  const allowed = new Set([...fields, "generatedPrompt", "qualityScore", "improvedPrompt", "isFavorite"]);
  const keys = Object.keys(source);
  if (keys.length === 0 || keys.some((key) => !allowed.has(key))) return null;

  const update: Partial<SavedPromptInput> = {};
  for (const field of fields) {
    if (typeof source[field] === "undefined") continue;
    if (typeof source[field] !== "string") return null;
    const value = source[field].trim();
    if (!isValidUpdatedField(field, value)) return null;
    update[field] = value;
  }

  if (typeof source.generatedPrompt !== "undefined") {
    const generatedPrompt = parseNonEmptyString(source.generatedPrompt);
    if (!generatedPrompt) return null;
    update.generatedPrompt = generatedPrompt;
  }
  if (typeof source.qualityScore !== "undefined") {
    if (typeof source.qualityScore !== "number" || !Number.isFinite(source.qualityScore) || source.qualityScore < 0 || source.qualityScore > 100) return null;
    update.qualityScore = source.qualityScore;
  }
  if (typeof source.improvedPrompt !== "undefined") {
    if (!parseOptionalString(source.improvedPrompt)) return null;
    update.improvedPrompt = (source.improvedPrompt as string).trim();
  }
  if (typeof source.isFavorite !== "undefined") {
    if (typeof source.isFavorite !== "boolean") return null;
    update.isFavorite = source.isFavorite;
  }

  return Object.keys(update).length ? update : null;
}
