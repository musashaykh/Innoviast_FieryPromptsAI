"use client";

import { FileText, LoaderCircle, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { scoreLabel, scorePrompt } from "@/lib/promptScoring";
import type { PromptFormValues } from "@/types/prompt";

interface PromptPreviewProps {
  actionToolbar?: ReactNode;
  generatedPrompt: string;
  generationError: string;
  isGenerating: boolean;
  isLivePreview: boolean;
  values: PromptFormValues;
}

const requiredFields: Array<{ field: keyof PromptFormValues; label: string }> = [
  { field: "title", label: "Prompt title" }, { field: "role", label: "Role" }, { field: "task", label: "Task" }, { field: "tone", label: "Tone" }, { field: "audience", label: "Target audience" }, { field: "outputFormat", label: "Output format" },
];

function MarkdownDocument({ content }: { content: string }) {
  return <div className="space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{content.split("\n").map((line, index) => {
    const text = line.replace(/^#{1,3}\s*/, "").replace(/^[-*]\s+/, "");
    if (!line.trim()) return <div className="h-1" key={index} />;
    if (/^#{1,3}\s/.test(line)) return <h3 className="pt-2 text-base font-bold tracking-tight text-slate-950 dark:text-white" key={index}>{text}</h3>;
    if (/^[-*]\s+/.test(line)) return <p className="flex gap-2" key={index}><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet-500" />{text}</p>;
    return <p key={index}>{line}</p>;
  })}</div>;
}

export function PromptPreview({ actionToolbar, generatedPrompt, generationError, isGenerating, isLivePreview, values }: PromptPreviewProps) {
  const { score } = scorePrompt(values);
  const missingFields = requiredFields.filter(({ field }) => !values[field].trim()).map(({ label }) => label);
  const scoreColor = score >= 90 ? "text-emerald-600" : score >= 75 ? "text-blue-600" : score >= 60 ? "text-amber-600" : "text-rose-600";
  const scoreFill = score >= 90 ? "from-emerald-500 to-teal-500" : score >= 75 ? "from-blue-500 to-violet-500" : score >= 60 ? "from-amber-400 to-orange-500" : "from-rose-500 to-orange-500";

  return <aside className="space-y-5 xl:sticky xl:top-24">
    <section className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="flex items-center border-b border-slate-100 px-5 py-4 dark:border-slate-800"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300"><FileText size={17} /></span><div><p className="text-sm font-bold text-slate-950 dark:text-white">{isLivePreview ? "Live document" : "AI-generated prompt"}</p><p className="text-xs text-slate-500 dark:text-slate-400">{isGenerating ? "Creating your prompt..." : isLivePreview ? "Updates as you type" : "Ready to use"}</p></div></div></div>
      <div className="min-h-72 p-5 sm:p-6">{isGenerating ? <div className="flex min-h-60 flex-col items-center justify-center text-center"><LoaderCircle aria-hidden="true" className="animate-spin text-violet-500" size={30} /><p className="mt-4 font-semibold text-slate-900 dark:text-white">Generating your prompt</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">FieryPrompts AI is structuring your instructions.</p></div> : generatedPrompt ? <MarkdownDocument content={generatedPrompt} /> : <div className="flex min-h-60 flex-col items-center justify-center text-center"><span className="grid size-14 place-items-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/60"><Sparkles aria-hidden="true" size={26} /></span><p className="mt-4 font-semibold text-slate-900 dark:text-white">Your generated prompt will appear here.</p><p className="mt-1 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">Complete the required fields to create a clear, structured brief.</p></div>}</div>
      {generationError && <div className="border-t border-red-200 bg-red-50 px-5 py-3 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-200">{generationError}</div>}
      {missingFields.length > 0 && <div className="border-t border-amber-200 bg-amber-50 px-5 py-3 text-xs font-medium text-amber-900 dark:border-amber-900/70 dark:bg-amber-950/30 dark:text-amber-200">Complete: {missingFields.join(", ")}.</div>}
    </section>
    {actionToolbar}
    <section className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center justify-between"><div><p className="text-sm font-bold text-slate-950 dark:text-white">Prompt score</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Structure and completeness</p></div><div className="text-right"><p className={`text-3xl font-bold tabular-nums transition-colors duration-500 ${scoreColor}`}>{score}<span className="text-sm font-medium text-slate-400">/100</span></p><span className={`mt-1 inline-flex rounded-full bg-current/10 px-2 py-0.5 text-xs font-bold ${scoreColor}`}>{scoreLabel(score)}</span></div></div><div aria-hidden="true" className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className={`h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out ${scoreFill}`} style={{ width: `${score}%` }} /></div></section>
  </aside>;
}
