"use client";

import { PromptBuilderForm } from "@/features/builder/components/PromptBuilderForm";
import { PromptActions } from "@/features/builder/components/PromptActions";
import { PromptPreview } from "@/features/builder/components/PromptPreview";
import { usePrompt } from "@/hooks/usePrompt";
import { TEMPLATES } from "@/constants/templates";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PromptBuilderWorkspace() {
  const prompt = usePrompt();
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  useEffect(() => {
    const template = TEMPLATES.find((item) => item.id === templateId);
    if (!template) return;
    prompt.applyTemplate({ title: template.name, role: template.role, context: template.description, tone: template.tone, audience: template.audience, outputFormat: template.outputFormat });
  // Template selection is intentionally applied only when the query changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateId]);
  const hasGeneratedPrompt = prompt.aiGeneratedPrompt.trim().length > 0;

  return <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1.1fr)_minmax(23rem,0.9fr)]"><div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none sm:p-8"><div className="mb-8 flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-100 text-lg font-bold text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">01</span><div><h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">Create your brief</h2><p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">Give the AI enough direction to produce a focused, reusable result.</p></div></div><PromptBuilderForm prompt={prompt} /></div><div className="space-y-5"><PromptPreview actionToolbar={hasGeneratedPrompt ? <PromptActions prompt={prompt} /> : null} generatedPrompt={prompt.generatedPrompt} generationError={prompt.generationError} isGenerating={prompt.isGenerating} isLivePreview={!hasGeneratedPrompt} values={prompt.values} /></div></div>;
}
