# Deployment Guide

## Project

**FieryPrompts AI**

---

# Purpose

This document explains how to deploy FieryPrompts AI to a production environment using **Vercel** and **Firebase**.

It also includes environment variable configuration, production settings, deployment verification, and troubleshooting guidelines.

---

# Deployment Architecture

```text
                User
                  │
                  ▼
             Vercel Hosting
                  │
                  ▼
        Next.js 15 Application
                  │
         ┌────────┴────────┐
         ▼                 ▼
   Groq API          Firebase Firestore
```

---

# Production Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

Backend

- Next.js API Routes

Database

- Firebase Firestore

AI

- Groq API

Hosting

- Vercel

---

# Prerequisites

Before deployment ensure:

- GitHub repository created
- Firebase project created
- Firestore database enabled
- Groq API key generated
- Vercel account available

---

# Step 1 — Create Firebase Project

Go to:

```
https://console.firebase.google.com
```

Create a new Firebase project.

Enable:

- Firestore Database

Authentication and Storage can remain disabled for the current version.

---

# Step 2 — Create Firestore

Inside Firebase:

```
Firestore Database

↓

Create Database

↓

Production Mode
```

Choose the nearest server region.

---

# Step 3 — Register Web App

Inside Firebase:

```
Project Settings

↓

Add Web App
```

Copy the Firebase configuration values.

---

# Step 4 — Create Environment Variables

Create a local file:

```text
.env.local
```

Add the following values:

```env
# Groq

GROQ_API_KEY=your_groq_api_key

GROQ_MODEL=llama-3.3-70b-versatile

# Firebase

NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=
```

Do **not** commit this file to GitHub.

---

# Step 5 — Test Locally

Install dependencies.

```bash
npm install
```

Run development server.

```bash
npm run dev
```

Verify:

- Home Page
- Prompt Builder
- AI Generation
- Firebase Save
- Export
- Dark Mode

---

# Step 6 — Push to GitHub

Initialize Git (if needed).

```bash
git init
```

Add files.

```bash
git add .
```

Commit changes.

```bash
git commit -m "Initial production version"
```

Push to GitHub.

```bash
git push origin main
```

---

# Step 7 — Import Project into Vercel

Login to Vercel.

```
https://vercel.com
```

Click:

```
Add New Project
```

Import the GitHub repository.

---

# Step 8 — Configure Environment Variables

In the Vercel dashboard:

```
Project Settings

↓

Environment Variables
```

Add all values from `.env.local`.

Required:

```env
GROQ_API_KEY

GROQ_MODEL

NEXT_PUBLIC_FIREBASE_API_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID

NEXT_PUBLIC_FIREBASE_APP_ID
```

Save changes.

---

# Step 9 — Deploy

Click:

```
Deploy
```

Vercel will automatically:

- Install dependencies
- Build the application
- Deploy API routes
- Generate production URL

---

# Production URL

Example:

```
https://fieryprompts-ai.vercel.app
```

---

# Deployment Checklist

Verify:

- Homepage loads
- Navbar works
- Prompt Builder loads
- Generate Prompt works
- Improve Prompt works
- Save Prompt works
- Firebase stores data
- Export works
- Theme toggle works
- Mobile layout works
- API routes respond correctly

---

# Health Check

Open:

```
https://your-domain.vercel.app/api/health
```

Expected response:

```json
{
  "status": "healthy",
  "firebase": true,
  "groq": true
}
```

---

# Firestore Verification

Open Firebase Console.

Verify that:

```
prompts
```

collection is created automatically after saving a prompt.

---

# Common Deployment Issues

## Missing Environment Variables

Symptoms

- AI not responding
- Firebase initialization error

Solution

Verify all environment variables are configured in Vercel.

---

## Firebase Permission Denied

Symptoms

```
Missing or insufficient permissions
```

Solution

Review Firestore Security Rules.

---

## Invalid Groq API Key

Symptoms

```
401 Unauthorized
```

Solution

Generate a new API key and update the environment variables.

---

## Build Failed

Symptoms

```
Build Error
```

Possible causes:

- TypeScript errors
- Missing dependencies
- Incorrect imports

Run locally:

```bash
npm run build
```

Fix any errors before redeploying.

---

## API Route Failure

Verify:

- API file location
- Route implementation
- Environment variables
- Server logs

---

# Performance Recommendations

Enable:

- Image optimization
- Code splitting
- Lazy loading
- Dynamic imports
- Static generation where appropriate

Avoid unnecessary API calls.

---

# Security Checklist

Ensure:

- API keys remain server-side.
- `.env.local` is ignored by Git.
- Firestore rules are configured appropriately.
- User input is validated and sanitized.
- Error responses do not expose internal details.

---

# Monitoring

Recommended tools:

- Vercel Analytics
- Firebase Console
- Browser Developer Tools

Future integrations:

- Sentry
- LogRocket
- Google Analytics

---

# Production Maintenance

Regularly:

- Update dependencies.
- Review Firebase usage.
- Rotate API keys if required.
- Monitor deployment logs.
- Test application after updates.

---

# Future Deployment Options

The application can later be deployed to:

- Firebase Hosting
- Netlify
- Railway
- Render
- AWS
- Azure
- Google Cloud Platform

Minimal configuration changes should be required.

---

# Summary

FieryPrompts AI is designed for seamless deployment using Vercel and Firebase. By following this guide, developers can configure environment variables, deploy the application, verify functionality, and maintain a secure and production-ready environment with minimal effort.