import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface SharedProps { error?: string; helperText?: string; label: string; maxLength?: number; required?: boolean; }
type InputFieldProps = SharedProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaFieldProps = SharedProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const controlClass = "mt-2 w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-950 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:bg-slate-950 dark:text-white dark:hover:border-slate-600";

function FieldMeta({ error, helperText, maxLength, value }: Pick<SharedProps, "error" | "helperText" | "maxLength"> & { value?: string | number | readonly string[] }) {
  const length = typeof value === "string" ? value.length : 0;
  return <div className="mt-1.5 flex min-h-5 justify-between gap-3 text-xs"><span className={error ? "inline-flex items-center gap-1 font-medium text-amber-700 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"}>{error && <span aria-hidden="true">⚠</span>}{error || helperText}</span>{maxLength && <span className="shrink-0 tabular-nums text-slate-400">{length}/{maxLength}</span>}</div>;
}

export function InputField({ error, helperText, id, label, maxLength, required, value, ...props }: InputFieldProps) {
  const fieldId = id ?? label.toLowerCase().replaceAll(" ", "-");
  return <label className="block" htmlFor={fieldId}><span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}{required && <span aria-hidden="true" className="ml-1 text-red-500">*</span>}</span><input aria-describedby={`${fieldId}-meta`} aria-invalid={Boolean(error)} className={`${controlClass} ${error ? "border-amber-400 focus:border-amber-500 focus:ring-amber-500/10" : "border-slate-200 dark:border-slate-700"}`} id={fieldId} maxLength={maxLength} value={value} {...props} /><div id={`${fieldId}-meta`}><FieldMeta error={error} helperText={helperText} maxLength={maxLength} value={value} /></div></label>;
}

export function TextareaField({ error, helperText, id, label, maxLength, required, value, ...props }: TextareaFieldProps) {
  const fieldId = id ?? label.toLowerCase().replaceAll(" ", "-");
  return <label className="block" htmlFor={fieldId}><span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}{required && <span aria-hidden="true" className="ml-1 text-red-500">*</span>}</span><textarea aria-describedby={`${fieldId}-meta`} aria-invalid={Boolean(error)} className={`${controlClass} min-h-28 resize-y ${error ? "border-amber-400 focus:border-amber-500 focus:ring-amber-500/10" : "border-slate-200 dark:border-slate-700"}`} id={fieldId} maxLength={maxLength} value={value} {...props} /><div id={`${fieldId}-meta`}><FieldMeta error={error} helperText={helperText} maxLength={maxLength} value={value} /></div></label>;
}
