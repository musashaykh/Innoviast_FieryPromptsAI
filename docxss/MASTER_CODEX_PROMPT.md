# Master Codex Prompt

## Project

**FieryPrompts AI**

---

# Objective

You are an expert Senior Software Engineer specializing in Next.js, React, TypeScript, Firebase, Prompt Engineering, UI/UX, and AI integration.

Your task is to build the complete **FieryPrompts AI** application from scratch by strictly following every documentation file inside the **docs/** directory.

This project should be developed as a **production-ready**, **industry-standard**, and **scalable** SaaS application.

Never make assumptions that contradict the provided documentation.

---

# Project Vision

FieryPrompts AI is an AI-powered Prompt Engineering Platform that helps users create, optimize, organize, and manage professional prompts for Large Language Models (LLMs).

The application should focus on:

- Prompt Generation
- Prompt Improvement
- Prompt Templates
- Prompt Organization
- Prompt Export
- Prompt Quality
- Modern User Experience

It is **not** a chatbot.

---

# Documentation Priority

Read and follow these documents in the exact order.

```
docs/

01_SRS.md

02_SYSTEM_PROMPT.md

03_PROMPT_BUILDER_SPEC.md

04_TEMPLATE_LIBRARY.md

05_TONE_LIBRARY.md

06_AUDIENCE_LIBRARY.md

07_OUTPUT_FORMAT_RULES.md

08_VALIDATION_RULES.md

09_ERROR_HANDLING.md

10_UI_SPECIFICATION.md

11_API_SPECIFICATION.md

12_FIREBASE_STRUCTURE.md

13_FOLDER_STRUCTURE.md

14_DEVELOPMENT_GUIDELINES.md

15_README_STRUCTURE.md

16_AI_USAGE.md

17_DEPLOYMENT_GUIDE.md
```

If two documents conflict, follow the document with the lower number unless explicitly stated otherwise.

---

# Technology Stack

Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Backend

- Next.js API Routes

Database

- Firebase Firestore

AI

- Groq API

Deployment

- Vercel

---

# Architecture Rules

Follow the folder structure exactly.

Keep:

- UI
- Business Logic
- API
- Firebase
- Utilities

fully separated.

Do not mix responsibilities.

---

# Coding Standards

Always write:

- Clean code
- Modular code
- Reusable components
- Strong TypeScript typing
- Small focused functions

Avoid:

- Duplicate code
- Hardcoded values
- Inline business logic
- Monolithic components
- Unused imports

---

# UI Requirements

Build a premium modern SaaS interface.

Requirements

- Responsive
- Dark Mode
- Light Mode
- Smooth Animations
- Accessibility
- Keyboard Navigation

Follow the design system defined in

```
docs/10_UI_SPECIFICATION.md
```

---

# Prompt Builder

Implement every field.

- Title
- Role
- Task
- Context
- Constraints
- Examples
- Tone
- Audience
- Output Format
- Success Criteria
- Negative Instructions

Generate a structured prompt using these inputs.

---

# AI Integration

Use Groq API.

Preferred model

```
llama-3.3-70b-versatile
```

Fallback

```
llama-3.1-8b-instant
```

The API key must remain server-side.

Never expose secrets.

---

# Firebase

Use Firestore exactly as defined in

```
docs/12_FIREBASE_STRUCTURE.md
```

Implement

- Save Prompt
- Update Prompt
- Delete Prompt
- Retrieve Prompts

---

# API Development

Implement every endpoint defined in

```
docs/11_API_SPECIFICATION.md
```

Every endpoint should

- Validate input
- Return consistent JSON
- Handle errors
- Use proper HTTP status codes

---

# Error Handling

Use friendly error messages.

Never expose

- Stack traces
- Secrets
- Internal server errors

Follow

```
docs/09_ERROR_HANDLING.md
```

---

# Validation

Validate

- Required fields
- Maximum lengths
- Allowed values
- Invalid requests

Perform validation on both client and server.

---

# Performance

Optimize

- Bundle size
- Images
- Fonts
- API calls
- Lazy loading
- Dynamic imports

Target response time

```
<2 seconds
```

---

# Accessibility

Support

- ARIA Labels
- Focus States
- Keyboard Navigation
- Semantic HTML
- WCAG best practices

---

# Security

Never expose

- Environment Variables
- API Keys
- Firebase Secrets

Sanitize all user input before processing.

---

# Code Quality

Use

- Functional Components
- React Hooks
- TypeScript Interfaces
- Async/Await
- Modular Services

Avoid

- any
- Class Components
- Nested business logic
- Duplicate functions

---

# Expected Pages

Create

- Landing Page
- Prompt Builder
- Templates
- Saved Prompts
- Dashboard
- About

Each page should follow the UI specification.

---

# Expected Components

Create reusable components including

- Navbar
- Footer
- Prompt Builder
- Prompt Preview
- Prompt Card
- Template Card
- Dashboard Card
- Buttons
- Inputs
- Selects
- Textareas
- Dialogs
- Toasts
- Loading States
- Error States
- Empty States
- Theme Toggle

---

# Expected Features

Implement

- Generate Prompt
- Improve Prompt
- Save Prompt
- Edit Prompt
- Delete Prompt
- Export Prompt
- Copy Prompt
- Search Prompts
- Filter Prompts
- Responsive Layout
- Dark Mode

---

# Export

Support

- Markdown
- TXT
- PDF

---

# Deployment

The application must be deployable directly on Vercel.

All environment variables should be configurable.

---

# Documentation

Do not ignore any document inside

```
docs/
```

Every implementation decision should be consistent with the documentation.

---

# Development Process

Implement the project incrementally.

Recommended order

1. Project setup
2. Folder structure
3. UI components
4. Layout
5. Pages
6. Prompt Builder
7. API routes
8. Firebase integration
9. Groq integration
10. Prompt generation
11. Prompt improvement
12. Saved prompts
13. Export
14. Dashboard
15. Testing
16. Performance optimization
17. Final polish

---

# Deliverables

Generate

- Complete source code
- Reusable components
- Typed interfaces
- Firebase integration
- Groq integration
- API routes
- Responsive UI
- Documentation
- Environment configuration
- Production-ready project

The final application should compile successfully without TypeScript errors, ESLint errors, or build failures.

---

# Final Instruction

Treat this as a real production SaaS product, not a prototype.

Do not simplify features unless explicitly instructed.

Follow every documentation file strictly, maintain consistency across the codebase, and prioritize clean architecture, scalability, maintainability, security, and user experience throughout the implementation.