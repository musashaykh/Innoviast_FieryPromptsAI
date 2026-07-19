import { BrainCircuit, Database, Github, Sparkles } from "lucide-react";

import { PageIntro } from "@/components/ui/PageIntro";
import { Card } from "@/components/ui/Card";

const technologies = [{ icon: Sparkles, name: "Next.js, React & TypeScript", detail: "A fast, type-safe App Router foundation." }, { icon: BrainCircuit, name: "Groq AI", detail: "Prompt improvement powered by Llama 3.3 70B Versatile." }, { icon: Database, name: "Firebase Firestore", detail: "Cloud storage for reusable prompts and data." }];

export default function AboutPage() {
  return <><PageIntro eyebrow="About" title="FieryPrompts AI">An AI-powered prompt engineering platform for creating structured, reusable, professional prompts.</PageIntro><section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"><div><h2 className="text-2xl font-bold text-slate-950 dark:text-white">Designed for intentional AI work</h2><p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">FieryPrompts AI helps developers, students, creators, researchers, educators, and business professionals turn an idea into a structured prompt with clear context, constraints, and expected output.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{technologies.map(({ icon: Icon, ...technology }) => <Card key={technology.name}><Icon aria-hidden="true" className="text-violet-600" size={24} /><h2 className="mt-4 font-semibold text-slate-900 dark:text-white">{technology.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{technology.detail}</p></Card>)}</div><a className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700" href="https://github.com/musashaykh" rel="noreferrer" target="_blank"><Github aria-hidden="true" size={19} /> View the developer on GitHub</a></section></>;
}
