import { BarChart3, BrainCircuit, CheckCircle2, FileText, Layers3, WandSparkles } from "lucide-react";
import Link from "next/link";

import { FeatureCard } from "@/components/landing/FeatureCard";
import { Hero } from "@/components/landing/Hero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const features = [
  { icon: WandSparkles, title: "Structured prompts", description: "Turn a clear brief into a complete, reusable prompt with guided inputs." },
  { icon: BrainCircuit, title: "AI optimization", description: "Refine clarity, context, and instructions with fast AI-assisted improvement." },
  { icon: Layers3, title: "Reusable templates", description: "Start from practical templates for development, writing, research, and more." },
  { icon: BarChart3, title: "Prompt quality", description: "Understand what makes a prompt stronger through useful quality insights." },
];

const categories = ["Software Development", "Artificial Intelligence", "Content Writing", "Marketing", "Business", "Education"];

export default function HomePage() {
  return <>
    <Hero />
    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Everything you need</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">A better workflow for better AI output.</h2></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => <FeatureCard {...feature} key={feature.title} />)}</div></div></section>
    <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900/40 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-wider text-violet-600">How it works</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">From idea to a reliable prompt in minutes.</h2><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Give your task a role, context, constraints, and the response format you need. FieryPrompts keeps the structure organized so you can focus on the outcome.</p></div><ol className="space-y-4">{["Describe your goal", "Choose the right context and output", "Review and refine your prompt"].map((step, index) => <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900" key={step}><span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span><span className="pt-1 font-semibold text-slate-900 dark:text-white">{step}</span></li>)}</ol></div></section>
    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Prompt categories</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Built for the work you already do.</h2></div><Link className="font-semibold text-blue-600 hover:text-blue-700" href="/templates">Browse all templates →</Link></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <Card className="flex items-center justify-between p-5" key={category}><span className="font-semibold text-slate-900 dark:text-white">{category}</span><FileText aria-hidden="true" className="text-violet-600" size={19} /></Card>)}</div></div></section>
    <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-blue-600 to-violet-700 px-6 py-12 text-center text-white sm:px-12"><CheckCircle2 aria-hidden="true" className="mx-auto" size={30} /><h2 className="mt-4 text-3xl font-bold">Ready to create your next great prompt?</h2><p className="mx-auto mt-3 max-w-xl text-blue-100">Start with a structured foundation and make every AI interaction more intentional.</p><Link className="mt-7 inline-flex" href="/builder"><Button className="bg-white text-blue-700 hover:bg-blue-50">Start Building</Button></Link></div></section>
  </>;
}
