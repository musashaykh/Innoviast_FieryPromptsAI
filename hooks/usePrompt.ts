"use client";

import { useState } from "react";

import { INITIAL_PROMPT_VALUES } from "@/constants/promptBuilder";
import { buildPrompt } from "@/lib/promptBuilder";
import { scorePrompt } from "@/lib/promptScoring";
import type { PromptField, PromptFormErrors, PromptFormValues } from "@/types/prompt";
import { validatePromptForm } from "@/utils/validation";

export function usePrompt() {
  const [values, setValues] = useState<PromptFormValues>(INITIAL_PROMPT_VALUES);
  const [errors, setErrors] = useState<PromptFormErrors>({});
  const [isValidated, setIsValidated] = useState(false);
  const [aiGeneratedPrompt, setAiGeneratedPrompt] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [generationError, setGenerationError] = useState("");

  function updateField(field: PromptField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    setIsValidated(false);
    setAiGeneratedPrompt("");
    setImprovedPrompt("");
    setGenerationError("");
  }

  function validate() {
    const nextErrors = validatePromptForm(values);
    setErrors(nextErrors);
    const isValid = Object.keys(nextErrors).length === 0;
    setIsValidated(isValid);
    return isValid;
  }

  function reset() {
    setValues(INITIAL_PROMPT_VALUES);
    setErrors({});
    setIsValidated(false);
    setAiGeneratedPrompt("");
    setImprovedPrompt("");
    setGenerationError("");
  }

  function applyTemplate(template: Partial<PromptFormValues>) {
    setValues((current) => ({ ...current, ...template }));
    setErrors({}); setIsValidated(false); setAiGeneratedPrompt(""); setImprovedPrompt(""); setGenerationError("");
  }

  async function generate() {
    if (!validate()) return false;

    setIsGenerating(true);
    setGenerationError("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await response.json() as { generatedPrompt?: unknown; error?: { message?: unknown } };
      const generatedPrompt = typeof body.generatedPrompt === "string" ? body.generatedPrompt.trim() : "";
      if (!response.ok || !generatedPrompt) {
        throw new Error(typeof body.error?.message === "string" ? body.error.message : "Unable to generate your prompt. Please try again.");
      }
      setAiGeneratedPrompt(generatedPrompt);
      setImprovedPrompt("");
      return true;
    } catch (error) {
      setGenerationError(error instanceof Error ? error.message : "Unable to generate your prompt. Please try again.");
      return false;
    } finally {
      setIsGenerating(false);
    }
  }

  async function improve() {
    if (!aiGeneratedPrompt) { setGenerationError("Generate a prompt before improving it with AI."); return false; }
    setIsImproving(true); setGenerationError("");
    try {
      const response = await fetch("/api/improve", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: improvedPrompt || aiGeneratedPrompt }) });
      const body = await response.json() as { improvedPrompt?: unknown; error?: { message?: unknown } };
      if (!response.ok || typeof body.improvedPrompt !== "string") throw new Error(typeof body.error?.message === "string" ? body.error.message : "Unable to improve your prompt. Please try again.");
      setImprovedPrompt(body.improvedPrompt);
      return true;
    } catch (error) { setGenerationError(error instanceof Error ? error.message : "Unable to improve your prompt. Please try again."); return false; }
    finally { setIsImproving(false); }
  }

  async function save() {
    if (!aiGeneratedPrompt) { setGenerationError("Generate a prompt before saving it."); return false; }
    setIsSaving(true); setGenerationError("");
    try {
      const response = await fetch("/api/prompts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, generatedPrompt: aiGeneratedPrompt, improvedPrompt: improvedPrompt || undefined, qualityScore: scorePrompt(values).score }) });
      const body = await response.json() as { success?: boolean; error?: { message?: unknown } };
      if (!response.ok || !body.success) throw new Error(typeof body.error?.message === "string" ? body.error.message : "Unable to save your prompt. Please try again.");
      return true;
    } catch (error) { setGenerationError(error instanceof Error ? error.message : "Unable to save your prompt. Please try again."); return false; }
    finally { setIsSaving(false); }
  }

  async function exportPrompt(format: "markdown" | "txt" | "pdf") {
    const prompt = improvedPrompt || aiGeneratedPrompt;
    if (!prompt) { setGenerationError("Generate a prompt before exporting it."); return false; }
    setGenerationError("");
    try {
      const response = await fetch("/api/export", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ format, prompt }) });
      if (!response.ok) throw new Error("Unable to export your prompt. Please try again.");
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url; link.download = `fiery-prompt.${format === "markdown" ? "md" : format}`; link.click(); URL.revokeObjectURL(url);
      return true;
    } catch (error) { setGenerationError(error instanceof Error ? error.message : "Unable to export your prompt. Please try again."); return false; }
  }

  const livePrompt = buildPrompt(values);
  return { aiGeneratedPrompt, applyTemplate, errors, exportPrompt, generatedPrompt: improvedPrompt || aiGeneratedPrompt || livePrompt, generationError, generate, improve, improvedPrompt, isGenerating, isImproving, isSaving, isValidated, livePrompt, reset, save, updateField, validate, values };
}

export type PromptBuilderController = ReturnType<typeof usePrompt>;
