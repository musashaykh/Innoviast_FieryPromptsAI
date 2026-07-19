import { PageIntro } from "@/components/ui/PageIntro";
import { PromptBuilderWorkspace } from "@/features/builder/components/PromptBuilderWorkspace";
import { Suspense } from "react";

export default function BuilderPage() { return <><PageIntro eyebrow="Prompt Builder" title="Build an exceptional prompt.">Give the AI a clear role, goal, and context. Fields marked with an asterisk are required.</PageIntro><section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><Suspense fallback={<div className="min-h-96 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900" />}><PromptBuilderWorkspace /></Suspense></section></>; }
