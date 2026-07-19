"use client";

import { BarChart3, Bookmark, FolderOpen, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/Card";
import type { SavedPrompt } from "@/types/prompt";

export function DashboardWorkspace() {
  const [prompts, setPrompts] = useState<SavedPrompt[]>([]);
  const [error, setError] = useState("");
  useEffect(() => { fetch("/api/prompts", { cache: "no-store" }).then(async (response) => { const body = await response.json() as { prompts?: SavedPrompt[]; error?: { message?: string } }; if (!response.ok || !body.prompts) throw new Error(body.error?.message); setPrompts(body.prompts); }).catch((exception: unknown) => setError(exception instanceof Error ? exception.message : "Dashboard data is unavailable.")); }, []);
  const average = prompts.length ? Math.round(prompts.reduce((sum, prompt) => sum + prompt.qualityScore, 0) / prompts.length) : 0;
  const metrics = [{ label: "Saved prompts", value: prompts.length, icon: FolderOpen }, { label: "Average quality", value: `${average}%`, icon: BarChart3 }, { label: "Favorites", value: prompts.filter((prompt) => prompt.isFavorite).length, icon: Bookmark }, { label: "AI-ready library", value: prompts.length ? "Active" : "Start", icon: Sparkles }];
  return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{error && <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">{error}</div>}<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{metrics.map(({ icon: Icon, label, value }) => <Card key={label}><Icon className="text-violet-600" size={22} /><p className="mt-5 text-3xl font-bold text-slate-950 dark:text-white">{value}</p><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</p></Card>)}</div><Card className="mt-8"><h2 className="text-lg font-semibold text-slate-950 dark:text-white">Recent activity</h2>{prompts.length ? <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">{prompts.slice(0, 5).map((prompt) => <li className="flex items-center justify-between gap-4 py-4" key={prompt.id}><div><p className="font-medium text-slate-900 dark:text-white">{prompt.title}</p><p className="text-sm text-slate-500">{prompt.tone} · {prompt.audience}</p></div><span className="font-semibold text-blue-600">{prompt.qualityScore}/100</span></li>)}</ul> : <p className="mt-3 text-sm text-slate-500">Saved prompts will appear here once your Firebase configuration is connected.</p>}</Card></section>;
}
