import { AUDIENCES } from "@/constants/audiences";
import { success } from "@/lib/api";

export function GET() { return success({ audiences: AUDIENCES }); }
