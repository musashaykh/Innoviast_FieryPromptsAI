"use client";

import { Code2, PenLine, Presentation, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEMPLATES } from "@/constants/templates";

const icons = [Code2, PenLine, Presentation];

export function TemplateLibrary() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const templates = useMemo(() => TEMPLATES.filter((template) => `${template.name} ${template.category} ${template.description} ${template.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><label className="mb-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-500 dark:border-slate-800 dark:bg-slate-900"><Search size={18} /><span className="sr-only">Search templates</span><input className="w-full bg-transparent text-sm outline-none" onChange={(event) => setQuery(event.target.value)} placeholder="Search templates by name, category, or tag" value={query} /></label><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{templates.map((template, index) => { const Icon = icons[index % icons.length]; return <Card key={template.id}><Icon className="text-violet-600" size={25} /><p className="mt-5 text-sm font-medium text-blue-600">{template.category}</p><h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{template.name}</h2><p className="mt-2 min-h-14 text-sm leading-6 text-slate-600 dark:text-slate-300">{template.description}</p><div className="mt-4 flex flex-wrap gap-2">{template.tags.map((tag) => <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300" key={tag}>{tag}</span>)}</div><Button className="mt-5 w-full" onClick={() => router.push(`/builder?template=${template.id}`)} variant="secondary">Use Template</Button></Card>; })}</div>{!templates.length && <p className="py-12 text-center text-slate-500">No templates match your search.</p>}</section>;
}
