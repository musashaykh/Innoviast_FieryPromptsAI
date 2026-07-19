"use client";

import { Clipboard, Eye, FolderOpen, LoaderCircle, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { SavedPrompt } from "@/types/prompt";
import { formatDate } from "@/utils/formatDate";

export function SavedPromptsWorkspace() {
  const [prompts, setPrompts] = useState<SavedPrompt[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<SavedPrompt | null>(null);

  async function load() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/prompts", { cache: "no-store" });
      const body = await response.json() as { prompts?: SavedPrompt[]; error?: { message?: string } };
      if (!response.ok || !body.prompts) throw new Error(body.error?.message || "Unable to load your saved prompts.");
      setPrompts(body.prompts);
    } catch (exception) { setError(exception instanceof Error ? exception.message : "Unable to load your saved prompts."); }
    finally { setLoading(false); }
  }

  useEffect(() => { void load(); }, []);
  const filtered = useMemo(() => prompts.filter((prompt) => `${prompt.title} ${prompt.role} ${prompt.task} ${prompt.tone}`.toLowerCase().includes(query.toLowerCase())), [prompts, query]);

  async function remove(id: string) {
    if (!window.confirm("Delete this saved prompt?")) return;
    const response = await fetch(`/api/prompts/${id}`, { method: "DELETE" });
    if (response.ok) { setPrompts((items) => items.filter((item) => item.id !== id)); if (selected?.id === id) setSelected(null); }
    else setError("Unable to delete this prompt. Please try again.");
  }

  return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div className="mb-7 flex flex-col gap-3 sm:flex-row"><label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"><Search size={18} /><span className="sr-only">Search saved prompts</span><input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, role, task, or tone" value={query} /></label><Button onClick={() => void load()} variant="secondary">Refresh</Button></div>{error && <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200">{error}</div>}{loading ? <div className="grid place-items-center py-16 text-slate-500"><LoaderCircle className="animate-spin" size={28} /></div> : filtered.length === 0 ? <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700"><FolderOpen className="mx-auto text-slate-400" size={36} /><h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{query ? "No prompts match your search" : "No saved prompts yet"}</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Generate a prompt in the builder, then save it here for later.</p></div> : <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]"><div className="grid gap-4">{filtered.map((prompt) => <Card className="p-5" key={prompt.id}><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-blue-600">{prompt.tone} · {prompt.outputFormat}</p><h2 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{prompt.title}</h2><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{prompt.role} · {formatDate(prompt.createdAt)}</p></div><p className="text-lg font-bold text-violet-600">{prompt.qualityScore}<span className="text-xs text-slate-400">/100</span></p></div><div className="mt-4 flex flex-wrap gap-2"><Button onClick={() => setSelected(prompt)} variant="secondary"><Eye size={16} /> View</Button><Button onClick={() => void navigator.clipboard.writeText(prompt.improvedPrompt || prompt.generatedPrompt)} variant="ghost"><Clipboard size={16} /> Copy</Button><Button onClick={() => void remove(prompt.id)} variant="ghost"><Trash2 className="text-red-500" size={16} /> Delete</Button></div></Card>)}</div>{selected && <Card className="h-fit lg:sticky lg:top-24"><p className="text-sm font-semibold uppercase tracking-wider text-violet-600">Saved prompt</p><h2 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{selected.title}</h2><pre className="mt-5 max-h-[34rem] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-200">{selected.improvedPrompt || selected.generatedPrompt}</pre></Card>}</div>}</section>;
}
