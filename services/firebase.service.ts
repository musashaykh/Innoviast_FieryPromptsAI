import "server-only";

import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { FIRESTORE_COLLECTIONS } from "@/firebase/collections";
import { getAdminDb } from "@/firebase/admin";
import type { SavedPrompt, SavedPromptInput } from "@/types/prompt";

type FirestorePrompt = Omit<SavedPrompt, "id" | "createdAt" | "updatedAt"> & {
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};

function serializePrompt(id: string, data: FirestorePrompt): SavedPrompt {
  return {
    ...data,
    id,
    createdAt: data.createdAt?.toDate().toISOString() ?? new Date(0).toISOString(),
    updatedAt: data.updatedAt?.toDate().toISOString() ?? new Date(0).toISOString(),
  };
}

function promptCollection() {
  return getAdminDb().collection(FIRESTORE_COLLECTIONS.prompts);
}

export async function createPrompt(input: SavedPromptInput) {
  const document = await promptCollection().add({
    ...input,
    isFavorite: input.isFavorite ?? false,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  return document.id;
}

export async function getPrompts() {
  const snapshot = await promptCollection().orderBy("createdAt", "desc").limit(50).get();
  return snapshot.docs.map((item) => serializePrompt(item.id, item.data() as FirestorePrompt));
}

export async function getPrompt(id: string) {
  const snapshot = await promptCollection().doc(id).get();
  return snapshot.exists ? serializePrompt(snapshot.id, snapshot.data() as FirestorePrompt) : null;
}

export async function updatePrompt(id: string, input: Partial<SavedPromptInput>) {
  await promptCollection().doc(id).update({ ...input, updatedAt: FieldValue.serverTimestamp() });
}

export async function removePrompt(id: string) {
  await promptCollection().doc(id).delete();
}
