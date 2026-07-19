import { NextResponse } from "next/server";

export type ApiErrorCode =
  | "VALIDATION_ERROR"
  | "NOT_FOUND"
  | "SERVICE_UNAVAILABLE"
  | "INTERNAL_ERROR";

export function success<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, ...data }, { status });
}

export function failure(code: ApiErrorCode, message: string, status: number) {
  return NextResponse.json({ success: false, error: { code, message } }, { status });
}

export function logApiError(endpoint: string, error: unknown) {
  // Keep server diagnostics useful without logging request bodies or secrets.
  console.error(`[api] ${endpoint} failed`, error instanceof Error ? error.message : "Unknown error");
}
