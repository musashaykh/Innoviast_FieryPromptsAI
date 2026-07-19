# README Structure

## Project

**FieryPrompts AI**

An AI-powered prompt engineering platform that helps users create, optimize, organize, and manage high-quality prompts for Large Language Models (LLMs).

---

# Project Overview

FieryPrompts AI is a modern web application that enables developers, students, content creators, marketers, educators, and businesses to generate well-structured AI prompts using predefined templates, customizable tones, target audiences, and output formats.

The platform combines prompt engineering best practices with Groq AI to generate production-ready prompts through an intuitive and responsive interface.

---

# Features

- AI Prompt Generation
- AI Prompt Improvement
- Prompt Templates
- Tone Selection
- Audience Selection
- Output Format Selection
- Prompt Quality Scoring
- Firebase Cloud Storage
- Copy to Clipboard
- Export Prompt
- Responsive Design
- Light & Dark Mode
- Modern UI
- Error Handling
- Form Validation

---

# Screenshots

Add screenshots after implementation.

Example:

```text
docs/screenshots/home.png

docs/screenshots/builder.png

docs/screenshots/dashboard.png
```

---

# Tech Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Backend

- Next.js API Routes
- Node.js

## Database

- Firebase Firestore

## AI

- Groq API

## Deployment

- Vercel

---

# Project Structure

```text
app/
components/
features/
hooks/
services/
firebase/
constants/
types/
utils/
docs/
public/
```

Refer to:

```
docs/13_FOLDER_STRUCTURE.md
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/your-username/FieryPrompts-AI.git
```

Move into the project directory.

```bash
cd FieryPrompts-AI
```

Install dependencies.

```bash
npm install
```

---

# Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
GROQ_API_KEY=your_groq_api_key

NEXT_PUBLIC_FIREBASE_API_KEY=your_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Never commit environment variables to GitHub.

---

# Running the Project

Start the development server.

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Build for Production

```bash
npm run build
```

Run production server.

```bash
npm start
```

---

# API Endpoints

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/generate` | POST | Generate Prompt |
| `/api/improve` | POST | Improve Existing Prompt |
| `/api/save` | POST | Save Prompt |
| `/api/prompts` | GET | Retrieve Saved Prompts |
| `/api/export` | POST | Export Prompt |
| `/api/health` | GET | Health Check |

For complete details:

```
docs/11_API_SPECIFICATION.md
```

---

# Firebase

Firebase is used for:

- Prompt Storage
- Templates
- Settings
- Analytics

Database documentation:

```
docs/12_FIREBASE_STRUCTURE.md
```

---

# Folder Documentation

The project documentation is organized as follows:

| Document | Purpose |
|----------|----------|
| 01_SRS.md | Software Requirements Specification |
| 02_SYSTEM_PROMPT.md | AI Behavior |
| 03_PROMPT_BUILDER_SPEC.md | Prompt Builder Logic |
| 04_TEMPLATE_LIBRARY.md | Prompt Templates |
| 05_TONE_LIBRARY.md | Tone Definitions |
| 06_AUDIENCE_LIBRARY.md | Audience Rules |
| 07_OUTPUT_FORMAT_RULES.md | Output Formats |
| 08_VALIDATION_RULES.md | Validation |
| 09_ERROR_HANDLING.md | Error Handling |
| 10_UI_SPECIFICATION.md | UI/UX |
| 11_API_SPECIFICATION.md | APIs |
| 12_FIREBASE_STRUCTURE.md | Firestore |
| 13_FOLDER_STRUCTURE.md | Architecture |
| 14_DEVELOPMENT_GUIDELINES.md | Coding Standards |

---

# Deployment

Recommended platform:

- Vercel

Deployment guide:

```
docs/17_DEPLOYMENT_GUIDE.md
```

---

# Testing Checklist

Verify:

- Prompt Generation
- Prompt Improvement
- Firebase Storage
- Copy Functionality
- Export Functionality
- Responsive UI
- Dark Mode
- Validation
- Error Handling
- API Connectivity

---

# Future Roadmap

Planned enhancements:

- User Authentication
- Team Collaboration
- Prompt History
- Version Control
- Prompt Marketplace
- AI Analytics Dashboard
- Premium Features
- Multi-language Support
- Voice Prompt Builder
- AI Prompt Suggestions

---

# Contributing

Contributions are welcome.

Before submitting changes:

- Follow coding standards.
- Use meaningful commit messages.
- Test all new features.
- Update documentation when necessary.

---

# License

Specify the project license before public release.

Recommended:

```
MIT License
```

---

# Author

**Developer**

Muhammad Musa Jamil

---

# Acknowledgements

This project was developed as part of the **Innoviast AI Solutions Engineering Internship** to demonstrate prompt engineering, AI integration, modern web development, and scalable software architecture using Groq AI and Firebase.

---

# Contact

GitHub

```
https://github.com/musashaykh
```

LinkedIn

```
(Add your LinkedIn profile)
```

---

# Summary

FieryPrompts AI is a scalable AI prompt engineering platform built with Next.js, Firebase, and Groq AI. It provides a professional environment for generating, optimizing, organizing, and exporting high-quality prompts through a modern and responsive interface. This README serves as the primary entry point for developers, contributors, and users by documenting installation, architecture, usage, deployment, and project resources.