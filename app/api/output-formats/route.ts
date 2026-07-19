import { OUTPUT_FORMATS } from "@/constants/outputFormats";
import { success } from "@/lib/api";

export function GET() { return success({ outputFormats: OUTPUT_FORMATS }); }
