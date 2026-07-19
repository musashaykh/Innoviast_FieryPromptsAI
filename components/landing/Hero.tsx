import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.26),transparent_55%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300"><Sparkles aria-hidden="true" size={15} /> Prompt engineering, made clear</p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">Build prompts that make AI do its best work.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">FieryPrompts AI helps you structure, refine, and manage high-quality prompts for every important task.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/builder"><Button>Start Building <ArrowRight aria-hidden="true" size={17} /></Button></Link><Link href="/templates"><Button variant="secondary">Explore Templates</Button></Link></div>
      </div>
    </section>
  );
}
