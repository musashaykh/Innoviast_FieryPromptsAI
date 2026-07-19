"use client";

import { Check, Clipboard, Download, FileDown, LoaderCircle, Save, WandSparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import type { PromptBuilderController } from "@/hooks/usePrompt";

export function PromptActions({ prompt }: { prompt: PromptBuilderController }) {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const disabled = !prompt.aiGeneratedPrompt || prompt.isGenerating || prompt.isImproving || prompt.isSaving;

  async function run(action: () => Promise<boolean>, successMessage: string) {
    const didSucceed = await action();
    setMessage(didSucceed ? successMessage : "");
  }

  async function copy() {
    if (!prompt.generatedPrompt) return;
    try { await navigator.clipboard.writeText(prompt.generatedPrompt); setCopied(true); setMessage("Copied to clipboard."); }
    catch { setMessage("Unable to copy the prompt."); }
  }

  return <section className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><p className="text-sm font-bold text-slate-950 dark:text-white">Ready to use</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Save, refine, or export your generated prompt.</p><div className="mt-4 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-1"><Button disabled={disabled} onClick={() => void copy()} variant="secondary">{copied ? <><Check className="text-emerald-600" size={17} /> Copied</> : <><Clipboard size={17} /> Copy prompt</>}</Button><Button disabled={disabled} onClick={() => run(prompt.improve, "AI improvement completed.")} variant="secondary">{prompt.isImproving ? <><LoaderCircle className="animate-spin" size={17} /> Improving...</> : <><WandSparkles size={17} /> Improve with AI</>}</Button><Button disabled={disabled} onClick={() => run(prompt.save, "Prompt saved successfully.")} variant="success">{prompt.isSaving ? <><LoaderCircle className="animate-spin" size={17} /> Saving...</> : <><Save size={17} /> Save prompt</>}</Button><div className="grid grid-cols-2 gap-2.5"><Button disabled={disabled} onClick={() => run(() => prompt.exportPrompt("markdown"), "Markdown download started.")} variant="secondary"><Download size={17} /> Markdown</Button><Button disabled={disabled} onClick={() => run(() => prompt.exportPrompt("pdf"), "PDF download started.")} variant="secondary"><FileDown size={17} /> PDF</Button></div></div>{message && <p aria-live="polite" className={`mt-3 rounded-lg px-3 py-2 text-xs font-medium ${message.startsWith("Unable") ? "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300"}`}>{message}</p>}</section>;
}
