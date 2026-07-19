import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";

interface FeatureCardProps { description: string; icon: LucideIcon; title: string; }

export function FeatureCard({ description, icon: Icon, title }: FeatureCardProps) {
  return <Card><div className="mb-5 grid size-11 place-items-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300"><Icon aria-hidden="true" size={22} /></div><h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{description}</p></Card>;
}
