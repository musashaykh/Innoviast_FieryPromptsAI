import { failure, logApiError } from "@/lib/api";
import { parseNonEmptyString } from "@/lib/apiValidation";

const formats = new Set(["markdown", "txt", "pdf"]);

function createPdf(text: string) {
  const lines = text.replace(/[^\x20-\x7E\n]/g, "?").match(/.{1,82}(?:\s|$)|\S+?(?:\s|$)/g) ?? [""];
  const content = lines.slice(0, 55).map((line, index) => `BT /F1 10 Tf 48 ${790 - index * 13} Td (${line.trim().replace(/[()\\]/g, "\\$&")}) Tj ET`).join("\n");
  const objects = ["<< /Type /Catalog /Pages 2 0 R >>", "<< /Type /Pages /Kids [3 0 R] /Count 1 >>", "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>", `<< /Length ${content.length} >>\nstream\n${content}\nendstream`];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => { offsets.push(pdf.length); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = parseNonEmptyString(body?.prompt);
    const format = typeof body?.format === "string" ? body.format.toLowerCase() : "";
    if (!prompt || !formats.has(format)) return failure("VALIDATION_ERROR", "Choose Markdown, TXT, or PDF and provide a prompt to export.", 400);

    const isMarkdown = format === "markdown";
    const isPdf = format === "pdf";
    return new Response(isPdf ? createPdf(prompt) : prompt, {
      headers: {
        "Content-Type": isPdf ? "application/pdf" : isMarkdown ? "text/markdown; charset=utf-8" : "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="fiery-prompt.${isPdf ? "pdf" : isMarkdown ? "md" : "txt"}"`,
      },
    });
  } catch (error) {
    logApiError("POST /api/export", error);
    return failure("INTERNAL_ERROR", "Unable to export your prompt. Please try again.", 500);
  }
}
