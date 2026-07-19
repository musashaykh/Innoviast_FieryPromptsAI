import { TONES } from "@/constants/tones";
import { success } from "@/lib/api";

export function GET() { return success({ tones: TONES }); }
