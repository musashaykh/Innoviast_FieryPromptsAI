"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="grid min-h-[60vh] place-items-center px-4"><div className="max-w-md text-center"><AlertTriangle className="mx-auto text-amber-500" size={36} /><h1 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">Something went wrong</h1><p className="mt-2 text-slate-600 dark:text-slate-300">Your work has not been cleared. Please try again.</p><Button className="mt-6" onClick={reset}>Try again</Button></div></main>;
}
