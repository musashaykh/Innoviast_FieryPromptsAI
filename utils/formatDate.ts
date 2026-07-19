export function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? "Recently" : new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date);
}
