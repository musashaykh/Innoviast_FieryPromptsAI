"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/builder", label: "Prompt Builder" },
  { href: "/templates", label: "Templates" },
  { href: "/saved", label: "Saved Prompts" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) => `rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 ${pathname === href ? "bg-violet-50 text-violet-700 shadow-sm dark:bg-violet-950/60 dark:text-violet-300" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-950/[0.02] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="inline-flex items-center gap-2 rounded-lg font-bold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-white" href="/">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white"><Sparkles aria-hidden="true" size={18} /></span>
          FieryPrompts <span className="text-violet-600 dark:text-violet-400">AI</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => <Link className={linkClass(item.href)} href={item.href} key={item.href}>{item.label}</Link>)}
          <ThemeToggle />
        </div>
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <button aria-controls="mobile-navigation" aria-expanded={isOpen} aria-label="Toggle navigation menu" className="inline-flex size-10 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-800" onClick={() => setIsOpen((open) => !open)} type="button">
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>
      {isOpen && <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-800 lg:hidden" id="mobile-navigation">{navigation.map((item) => <Link className={`block ${linkClass(item.href)}`} href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}</div>}
    </header>
  );
}
