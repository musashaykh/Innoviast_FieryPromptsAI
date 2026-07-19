import "server-only";

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const requiredCredentialKeys = ["FIREBASE_PROJECT_ID", "FIREBASE_CLIENT_EMAIL", "FIREBASE_PRIVATE_KEY"] as const;

function getServiceAccount() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("FIREBASE_ADMIN_NOT_CONFIGURED");
  }

  return { projectId, clientEmail, privateKey };
}

export function isFirebaseAdminConfigured() {
  return requiredCredentialKeys.every((key) => Boolean(process.env[key]));
}

export function getAdminDb() {
  const app = getApps()[0] ?? initializeApp({ credential: cert(getServiceAccount()) });
  return getFirestore(app);
}
