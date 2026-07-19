# Folder Structure

## Project

FieryPrompts AI

---

# Purpose

This document defines the complete folder architecture for FieryPrompts AI.

The project follows **Next.js 15 App Router** architecture with a modular, scalable, and maintainable folder structure.

The structure is designed to support future expansion without major refactoring.

---

# Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Firebase
- Groq API
- Framer Motion
- Lucide React

---

# Root Directory

```text
FieryPrompts-AI/

│

├── app/

├── components/

├── features/

├── hooks/

├── lib/

├── services/

├── firebase/

├── utils/

├── constants/

├── types/

├── docs/

├── public/

├── styles/

├── middleware/

├── .env.local

├── next.config.ts

├── package.json

├── tsconfig.json

└── README.md
```

---

# app/

Contains all App Router pages.

```text
app/

│

├── layout.tsx

├── page.tsx

├── loading.tsx

├── not-found.tsx

├── globals.css

│

├── builder/

│      page.tsx

│

├── templates/

│      page.tsx

│

├── dashboard/

│      page.tsx

│

├── saved/

│      page.tsx

│

├── about/

│      page.tsx

│

└── api/

        generate/

        improve/

        save/

        prompts/

        export/

        health/
```

---

# components/

Reusable UI components.

```text
components/

Navbar/

Footer/

Hero/

PromptBuilder/

PromptPreview/

PromptCard/

TemplateCard/

DashboardCard/

Button/

Input/

Textarea/

Select/

Badge/

Dropdown/

Modal/

Dialog/

Drawer/

Tooltip/

Toast/

LoadingSpinner/

Skeleton/

ThemeToggle/

SearchBar/

Pagination/

EmptyState/

ErrorState/
```

Every component should be reusable.

---

# features/

Contains business logic grouped by feature.

```text
features/

builder/

templates/

dashboard/

saved-prompts/

analytics/

export/

settings/
```

Each feature should contain:

```text
components/

hooks/

services/

types/

utils/
```

---

# hooks/

Custom React hooks.

```text
hooks/

usePrompt.ts

useTemplates.ts

useFirebase.ts

useTheme.ts

useDebounce.ts

useLocalStorage.ts

useClipboard.ts

useToast.ts
```

---

# lib/

Application libraries.

```text
lib/

groq.ts

firebase.ts

promptBuilder.ts

promptScoring.ts

validators.ts

exporter.ts
```

---

# services/

External service logic.

```text
services/

groq.service.ts

firebase.service.ts

prompt.service.ts

template.service.ts

analytics.service.ts

export.service.ts
```

---

# firebase/

Firebase configuration.

```text
firebase/

config.ts

firestore.ts

collections.ts

security.ts
```

---

# utils/

Helper functions.

```text
utils/

formatDate.ts

copyToClipboard.ts

downloadFile.ts

sanitizeInput.ts

generateId.ts

truncateText.ts

validation.ts
```

---

# constants/

Application constants.

```text
constants/

templates.ts

tones.ts

audiences.ts

outputFormats.ts

colors.ts

routes.ts
```

---

# types/

TypeScript interfaces.

```text
types/

prompt.ts

template.ts

user.ts

api.ts

firebase.ts

analytics.ts

common.ts
```

---

# docs/

Project documentation.

```text
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

18_MASTER_CODEX_PROMPT.md
```

---

# public/

Static assets.

```text
public/

logo/

icons/

images/

illustrations/

fonts/

favicon.ico
```

---

# styles/

Custom styles.

```text
styles/

animations.css

utilities.css

theme.css
```

Tailwind CSS remains the primary styling solution.

---

# middleware/

Application middleware.

```text
middleware/

auth.ts

logging.ts

rateLimit.ts
```

Reserved for future authentication and request handling.

---

# API Route Structure

```text
app/api/

generate/

route.ts

improve/

route.ts

save/

route.ts

prompts/

route.ts

export/

route.ts

health/

route.ts
```

Each API route should contain only request handling logic.

Business logic must remain inside the **services** folder.

---

# Import Rules

Preferred import order:

1. React
2. Next.js
3. Third-party packages
4. Components
5. Hooks
6. Services
7. Utils
8. Types
9. Constants

---

# Naming Conventions

Folders

```text
kebab-case
```

Example

```text
saved-prompts
```

Files

```text
camelCase.ts
```

Components

```text
PascalCase.tsx
```

Examples

```text
PromptCard.tsx

ThemeToggle.tsx

Navbar.tsx
```

Hooks

```text
usePrompt.ts

useTheme.ts
```

Types

```text
prompt.ts

template.ts
```

---

# Component Rules

Each component should:

- Be reusable
- Accept typed props
- Avoid duplicated logic
- Support responsive layouts
- Follow accessibility guidelines

---

# Code Organization

Separate:

- UI
- Business Logic
- API
- Database
- Utilities

Never mix responsibilities.

---

# Scalability

The architecture should support future features such as:

- Authentication
- Team Collaboration
- Prompt Marketplace
- AI Analytics
- Premium Features
- Version History
- Multi-language Support
- Plugin System

without requiring major structural changes.

---

# Summary

The folder structure follows modern Next.js best practices by separating presentation, business logic, API routes, Firebase integration, utilities, and documentation into dedicated modules. This architecture promotes clean code, maintainability, reusability, and long-term scalability for FieryPrompts AI.