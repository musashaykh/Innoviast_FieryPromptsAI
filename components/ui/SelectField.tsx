import type { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> { error?: string; helperText?: string; label: string; options: readonly string[]; required?: boolean; }

export function SelectField({ error, helperText, id, label, options, required, value, ...props }: SelectFieldProps) {
  const fieldId = id ?? label.toLowerCase().replaceAll(" ", "-");
  return <label className="block" htmlFor={fieldId}><span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}{required && <span aria-hidden="true" className="ml-1 text-red-500">*</span>}</span><select aria-describedby={`${fieldId}-meta`} aria-invalid={Boolean(error)} className={`mt-2 w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-950 shadow-sm outline-none transition-all hover:border-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:bg-slate-950 dark:text-white dark:hover:border-slate-600 ${error ? "border-amber-400 focus:border-amber-500 focus:ring-amber-500/10" : "border-slate-200 dark:border-slate-700"}`} id={fieldId} value={value} {...props}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select><p className={`mt-1.5 min-h-5 text-xs ${error ? "inline-flex items-center gap-1 font-medium text-amber-700 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"}`} id={`${fieldId}-meta`}>{error && <span aria-hidden="true">⚠</span>}{error || helperText}</p></label>;
}
