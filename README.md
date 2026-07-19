# FieryPrompts AI

FieryPrompts AI is a production-ready prompt engineering platform built with Next.js, TypeScript, Firebase Firestore, and Groq.

## Features

- Structured prompt builder with live preview and quality score
- Groq-powered prompt generation and improvement
- Template library covering development, writing, research, business, and more
- Firestore-backed saved prompts with search, copy, view, and delete actions
- Markdown, TXT, and PDF export
- Responsive light and dark interface
- Health endpoint and user-safe error handling

## Getting started

```bash
npm install
copy .env.example .env.local
npm run dev
```

Set `GROQ_API_KEY` plus the Firebase Admin service-account values in `.env.local`. The Firebase client SDK is intentionally not used: prompt CRUD is handled only by the server-side API routes. For local development, create a service-account key in Firebase/Google Cloud and copy its `project_id`, `client_email`, and `private_key` to `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, and `FIREBASE_PRIVATE_KEY`. In Vercel, add the same three variables to the target environment; use literal `\n` sequences in the private key.

Deploy [firestore.rules](firestore.rules) to Firebase before release with `firebase deploy --only firestore:rules`. It denies all direct client reads and writes; the Admin SDK bypasses those rules only on the server.

## Verification

```bash
npm run typecheck
npm run build
```

## API

- `POST /api/generate`
- `POST /api/improve`
- `GET`, `POST /api/prompts`
- `GET`, `PUT`, `DELETE /api/prompts/:id`
- `POST /api/export`
- `GET /api/templates`, `/api/tones`, `/api/audiences`, `/api/output-formats`, `/api/health`

## Deployment

Deploy on Vercel after adding the `.env.local` values as project environment variables. Verify `/api/health` returns configured `firebase` and `groq` values before releasing.
