# Prompt Builder Specification

## Project

FieryPrompts AI

---

# Purpose

This document defines the complete Prompt Builder workflow, field specifications, validation rules, prompt assembly logic, and user interaction for FieryPrompts AI.

The Prompt Builder is the core feature of the application. It allows users to construct high-quality AI prompts using structured inputs rather than writing everything manually.

---

# Objectives

The Prompt Builder shall:

- Simplify prompt creation.
- Guide users through structured input fields.
- Generate professional AI prompts.
- Improve prompt quality.
- Reduce ambiguity.
- Support multiple use cases.
- Provide a live preview while typing.

---

# Prompt Generation Flow

```text
Role
    ↓
Task
    ↓
Context
    ↓
Constraints
    ↓
Examples
    ↓
Tone
    ↓
Target Audience
    ↓
Output Format
    ↓
Success Criteria
    ↓
Negative Instructions
    ↓
Prompt Builder Engine
    ↓
Generated Prompt
```

---

# Builder Fields

## 1. Prompt Title

Purpose

A short name used to identify the prompt.

Example

```
React Landing Page
```

Required

Yes

Maximum Length

100 characters

---

## 2. Role

Purpose

Defines who the AI should act as.

Examples

- Senior React Developer
- Marketing Expert
- AI Engineer
- UX Designer
- Technical Writer
- Business Consultant

Required

Yes

Maximum Length

100 characters

---

## 3. Task

Purpose

Defines the primary objective.

Examples

- Build a landing page
- Write an email
- Explain recursion
- Create an API
- Generate interview questions

Required

Yes

Maximum Length

300 characters

---

## 4. Context

Purpose

Provides background information.

Examples

- SaaS Startup
- University Assignment
- Medical Website
- Banking Application

Required

No

Maximum Length

500 characters

---

## 5. Constraints

Purpose

Specify limitations and requirements.

Examples

- Responsive
- SEO Optimized
- Accessible
- Use TypeScript
- No Bootstrap

Required

No

Maximum Length

500 characters

---

## 6. Examples

Purpose

Provide sample outputs or references.

Examples

- Airbnb Homepage
- Stripe Dashboard
- Apple Landing Page

Required

No

Maximum Length

1000 characters

---

## 7. Tone

Purpose

Controls writing style.

Supported Values

- Professional
- Friendly
- Formal
- Casual
- Technical
- Creative
- Persuasive
- Inspirational
- Confident
- Minimal

Required

Yes

---

## 8. Target Audience

Purpose

Define who the output is intended for.

Supported Values

- Developers
- Students
- Teachers
- Businesses
- Customers
- Recruiters
- HR
- Researchers
- Entrepreneurs
- General Audience

Required

Yes

---

## 9. Output Format

Purpose

Specify the expected response structure.

Supported Formats

- Markdown
- Plain Text
- JSON
- HTML
- Bullet Points
- Table
- Code

Required

Yes

---

## 10. Success Criteria

Purpose

Explain what makes the generated output successful.

Examples

- Reusable code
- Beginner friendly
- Production ready
- SEO optimized
- ATS compatible

Required

No

Maximum Length

500 characters

---

## 11. Negative Instructions

Purpose

Specify what the AI must avoid.

Examples

- Do not use Bootstrap
- Avoid unnecessary explanations
- Do not use deprecated APIs
- Avoid emojis

Required

No

Maximum Length

500 characters

---

# Prompt Assembly Logic

The Prompt Builder Engine shall combine all user inputs into one structured prompt using the following order:

1. Role
2. Objective
3. Context
4. Constraints
5. Examples
6. Tone
7. Audience
8. Output Format
9. Success Criteria
10. Negative Instructions

Fields left empty should be omitted automatically from the final prompt.

---

# Live Preview

The application shall display a real-time preview of the generated prompt.

The preview must:

- Update instantly.
- Preserve formatting.
- Reflect every field change.
- Highlight empty required fields.

---

# Validation Rules

Before generating a prompt:

The system shall verify:

- Prompt Title exists.
- Role exists.
- Task exists.
- Tone selected.
- Audience selected.
- Output format selected.

Generation must be blocked if required fields are missing.

---

# Reset Functionality

The builder shall provide a Reset button.

Reset will:

- Clear all fields.
- Reset dropdowns.
- Remove preview.
- Remove validation messages.

---

# Save Functionality

Users can save prompts after generation.

Saved information includes:

- All builder fields
- Generated Prompt
- Improved Prompt
- Quality Score
- Created Date
- Updated Date

Data will be stored in Firebase Firestore.

---

# AI Enhancement

After generation, users may click:

"Improve with AI"

The system shall:

- Send the generated prompt to Groq API.
- Receive an optimized version.
- Preserve original meaning.
- Improve clarity.
- Improve structure.
- Improve wording.

---

# Prompt Quality Score

The application should analyze prompts and assign a score between 0 and 100.

Suggested Rating Scale

- 90–100 → Excellent
- 75–89 → Good
- 60–74 → Average
- Below 60 → Needs Improvement

The analysis should also provide suggestions for improvement.

---

# User Experience Requirements

The Prompt Builder should:

- Be intuitive.
- Require minimal learning.
- Work on desktop, tablet, and mobile.
- Support keyboard navigation.
- Display loading indicators during AI processing.
- Show friendly validation messages.
- Provide instant visual feedback.

---

# Future Enhancements

The Prompt Builder architecture should support future features such as:

- Drag-and-drop sections
- Voice input
- AI auto-complete
- Prompt templates
- Prompt history
- Prompt versioning
- Team collaboration
- Multi-language support
- Prompt variables
- Custom prompt blocks

---

# Summary

The Prompt Builder is the central feature of FieryPrompts AI. It transforms structured user input into optimized prompts using a guided workflow, ensuring clarity, consistency, and high-quality AI interactions while remaining scalable for future enhancements.