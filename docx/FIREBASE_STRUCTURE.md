# Firebase Structure

## Project

FieryPrompts AI

---

# Purpose

This document defines the Firebase architecture for FieryPrompts AI.

Firebase will be used as the cloud backend to store user-generated prompts, template data, application settings, and analytics while providing a scalable and secure NoSQL database.

Current Firebase Services

- Firestore Database
- Firebase Storage (Future)
- Firebase Authentication (Future)
- Firebase Analytics (Future)
- Firebase Hosting (Optional)

---

# Firebase Architecture

```text
                 User

                   │

                   ▼

          Next.js Frontend

                   │

                   ▼

         Next.js API Routes

                   │

                   ▼

            Firebase SDK

                   │

       ┌───────────┴───────────┐

       ▼                       ▼

   Firestore              Storage

       ▼                       ▼

 Prompt Data          Exported Files
```

---

# Firestore Database

Database Name

```
(default)
```

Database Type

```
Cloud Firestore
```

Mode

```
Production
```

---

# Collections

The application will use the following collections.

```
prompts

templates

settings

analytics
```

---

# Collection: prompts

Purpose

Stores every generated prompt.

Example

```
prompts
     │
     ├── prompt_001
     ├── prompt_002
     └── prompt_003
```

---

# Document Structure

```json
{
  "title": "React Landing Page",

  "role": "Senior Frontend Developer",

  "task": "Create landing page",

  "context": "SaaS Startup",

  "constraints": [
    "Responsive",
    "SEO Optimized"
  ],

  "examples": [],

  "tone": "Professional",

  "audience": "Developers",

  "outputFormat": "Markdown",

  "generatedPrompt": "...",

  "improvedPrompt": "...",

  "qualityScore": 94,

  "isFavorite": false,

  "createdAt": Timestamp,

  "updatedAt": Timestamp
}
```

---

# Collection: templates

Purpose

Stores predefined templates.

Document Example

```json
{
  "name":"Software Development",

  "category":"Development",

  "description":"Prompt template for software projects.",

  "icon":"Code",

  "difficulty":"Beginner",

  "isFeatured":true,

  "createdAt":Timestamp
}
```

---

# Collection: settings

Purpose

Stores application configuration.

Document Example

```json
{
  "theme":"dark",

  "defaultTone":"Professional",

  "defaultAudience":"General Audience",

  "defaultOutput":"Markdown"
}
```

---

# Collection: analytics

Purpose

Stores usage statistics.

Document Example

```json
{
  "totalPrompts":125,

  "savedPrompts":91,

  "favoritePrompts":18,

  "averageQuality":93
}
```

---

# Firestore Indexes

Recommended Indexes

Prompts

```
createdAt DESC

qualityScore DESC

title ASC

tone ASC

audience ASC
```

Templates

```
category ASC

difficulty ASC
```

---

# Query Examples

Latest Prompts

```typescript
orderBy("createdAt", "desc")
```

Highest Quality

```typescript
orderBy("qualityScore", "desc")
```

Favorites

```typescript
where("isFavorite", "==", true)
```

---

# Firestore Security Rules

Current Version

```javascript
rules_version = '2';

service cloud.firestore {

match /databases/{database}/documents {

match /{document=**} {

allow read, write: if true;

}

}

}
```

⚠️ This is acceptable for development only.

---

# Production Rules (Future)

Only authenticated users should be able to access their own prompts.

Example

```javascript
allow read, write: if request.auth != null;
```

---

# Firebase Storage (Future)

Purpose

Store

- PDF exports
- Images
- Shared prompt files
- Attachments

Suggested Structure

```
exports/

images/

shared/

avatars/
```

---

# Firebase Authentication (Future)

Supported Providers

- Google
- GitHub
- Email & Password

Future User Document

```
users

    uid

        profile

        preferences

        savedPrompts
```

---

# Naming Conventions

Collections

camelCase

Documents

Auto Generated IDs

Fields

camelCase

Example

```
generatedPrompt

qualityScore

createdAt

updatedAt
```

---

# Backup Strategy

Recommended

Daily Firestore Export

Monthly Archive

Versioned Backups

---

# Performance Recommendations

Use

- Pagination
- Query Limits
- Lazy Loading
- Indexed Queries

Avoid

- Fetching every document
- Nested collections without reason
- Large document sizes

---

# Offline Support

Future versions may enable

Firestore Offline Persistence

to allow users to continue working without internet.

---

# Scalability

The database structure should support future features such as:

- User Accounts
- Teams
- Shared Prompts
- Prompt History
- Prompt Versions
- AI Analytics
- Prompt Marketplace
- Community Templates
- Premium Features

without changing the existing schema.

---

# Environment Variables

```env
NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=
```

Never commit these values to public repositories.

---

# Summary

Firebase serves as the cloud backend for FieryPrompts AI, providing secure and scalable storage for prompts, templates, settings, and analytics. The architecture is modular, optimized for Firestore best practices, and designed to support future expansion such as authentication, collaboration, storage, and analytics without requiring major structural changes.