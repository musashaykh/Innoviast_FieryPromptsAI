import type { ReactNode } from "react";

interface PageIntroProps { eyebrow?: string; title: string; children: ReactNode; }

export function PageIntro({ children, eyebrow, title }: PageIntroProps) {
  return <section className="relative overflow-hidden border-b border-slate-200/80 bg-white px-4 py-14 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8"><div aria-hidden="true" className="absolute inset-x-0 top-0 -z-0 h-full bg-[radial-gradient(circle_at_18%_0%,rgba(139,92,246,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.18),transparent_38%)]" /><div className="relative mx-auto max-w-7xl">{eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">{eyebrow}</p>}<h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">{title}</h1><div className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{children}</div></div></section>;
}
