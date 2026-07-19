import { success } from "@/lib/api";
import { isFirebaseAdminConfigured } from "@/firebase/admin";
import { isGroqConfigured } from "@/lib/groq";

export function GET() {
  return success({
    status: "healthy",
    firebase: isFirebaseAdminConfigured(),
    groq: isGroqConfigured(),
    serverTime: new Date().toISOString(),
  });
}
