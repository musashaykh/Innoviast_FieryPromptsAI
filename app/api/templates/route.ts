import { TEMPLATES } from "@/constants/templates";
import { success } from "@/lib/api";

export function GET() { return success({ templates: TEMPLATES }); }
