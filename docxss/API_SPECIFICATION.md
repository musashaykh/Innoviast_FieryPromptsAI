# API Specification

## Project

FieryPrompts AI

---

# Purpose

This document defines the complete API architecture used by FieryPrompts AI.

The API layer acts as the communication bridge between the frontend, Firebase, and Groq AI.

It is responsible for:

- Prompt Generation
- Prompt Improvement
- Prompt Storage
- Prompt Retrieval
- Prompt Export
- Health Monitoring

The API should follow RESTful design principles.

---

# API Architecture

```text
                User

                  │

                  ▼

        Next.js Frontend

                  │

                  ▼

          API Route Layer

        /api/.....

          │           │

          ▼           ▼

   Firebase      Groq API

          │           │

          ▼           ▼

     Response Builder

                  │

                  ▼

             Frontend UI
```

---

# Base URL

Development

```
http://localhost:3000/api
```

Production

```
https://your-domain.vercel.app/api
```

---

# Content Type

Every request must use

```
application/json
```

---

# Authentication

Current Version

No Authentication

Future

Firebase Authentication

JWT Tokens

Google Login

GitHub Login

---

# Endpoints

---

# 1 POST /api/generate

Purpose

Generate a prompt.

Request

```json
{
  "title": "React Landing Page",
  "role": "Senior Frontend Developer",
  "task": "Build a landing page",
  "context": "Startup website",
  "constraints": [
    "Responsive",
    "SEO Friendly"
  ],
  "examples": [],
  "tone": "Professional",
  "audience": "Developers",
  "outputFormat": "Markdown",
  "successCriteria": "Reusable components",
  "negativeInstructions": "No Bootstrap"
}
```

Response

```json
{
  "success": true,
  "generatedPrompt": "...",
  "qualityScore": 95
}
```

---

Possible Errors

400

Validation Failed

500

Server Error

503

Groq Unavailable

---

# 2 POST /api/improve

Purpose

Improve an existing prompt.

Request

```json
{
  "prompt": "Original Prompt..."
}
```

Response

```json
{
  "success": true,
  "improvedPrompt": "...",
  "changes": [
    "Improved clarity",
    "Better constraints",
    "Enhanced structure"
  ]
}
```

---

# 3 POST /api/save

Purpose

Save prompt to Firebase.

Request

```json
{
  "title": "...",
  "generatedPrompt": "...",
  "qualityScore": 91
}
```

Response

```json
{
  "success": true,
  "documentId": "firebase_document_id"
}
```

---

# 4 GET /api/prompts

Purpose

Retrieve all saved prompts.

Response

```json
{
  "success": true,
  "prompts": []
}
```

---

# 5 GET /api/prompts/:id

Purpose

Retrieve one prompt.

Response

```json
{
  "success": true,
  "prompt": {}
}
```

---

# 6 PUT /api/prompts/:id

Purpose

Update saved prompt.

Response

```json
{
  "success": true
}
```

---

# 7 DELETE /api/prompts/:id

Purpose

Delete prompt.

Response

```json
{
  "success": true
}
```

---

# 8 POST /api/export

Purpose

Export generated prompt.

Supported Formats

- Markdown
- TXT
- PDF

Request

```json
{
  "format":"pdf",
  "prompt":"..."
}
```

Response

Generated File

---

# 9 GET /api/templates

Purpose

Return template library.

Response

```json
{
  "templates":[]
}
```

---

# 10 GET /api/tones

Purpose

Return supported tones.

---

# 11 GET /api/audiences

Purpose

Return supported audiences.

---

# 12 GET /api/output-formats

Purpose

Return supported output formats.

---

# 13 GET /api/health

Purpose

Health check endpoint.

Response

```json
{
  "status":"healthy",
  "firebase":true,
  "groq":true,
  "serverTime":"2026-07-17T00:00:00Z"
}
```

---

# Validation

Every endpoint should validate

Required Fields

Correct Data Types

Maximum Length

Allowed Values

---

# Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Role is required."
  }
}
```

---

# Success Response Format

```json
{
  "success": true,
  "data": {}
}
```

---

# Rate Limiting

Recommended

100 requests/hour/IP

Future

Firebase App Check

---

# Security

Never expose

- API Keys
- Firebase Secrets
- Environment Variables

All Groq requests must be server-side only.

---

# Logging

Log

- Endpoint
- Status
- Execution Time
- Timestamp

Never log

- API Keys
- User Secrets
- Private Prompts (unless explicitly enabled)

---

# Performance Goals

Average API Response

< 2 seconds

Health Check

< 500ms

Firebase Queries

< 1 second

---

# Future Endpoints

POST /api/favorite

POST /api/share

GET /api/history

POST /api/duplicate

POST /api/analyze

POST /api/rewrite

POST /api/translate

POST /api/version

POST /api/team

---

# Summary

The API layer should provide a secure, scalable, and modular interface between the frontend, Firebase, and Groq AI. Every endpoint must follow consistent request and response structures, perform strict validation, handle errors gracefully, and be designed for future expansion.