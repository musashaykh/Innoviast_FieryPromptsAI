# UI Specification

## Project

FieryPrompts AI

---

# Purpose

This document defines the complete User Interface (UI) and User Experience (UX) specifications for FieryPrompts AI.

The goal is to create a clean, modern, responsive, and professional AI SaaS application that provides an intuitive experience for users while maintaining scalability and consistency.

The design should follow current industry standards used by products such as:

- ChatGPT
- Notion AI
- Vercel
- Linear
- Cursor
- GitHub
- Framer

---

# Design Philosophy

The interface should feel:

- Modern
- Minimal
- Professional
- Fast
- Clean
- Elegant
- Interactive

The application should prioritize usability over decoration.

---

# Theme

Support:

- Light Mode
- Dark Mode

User preference should persist using local storage.

---

# Design System

## Primary Color

Blue

```
#2563EB
```

---

## Secondary Color

Purple

```
#7C3AED
```

---

## Success

```
#22C55E
```

---

## Warning

```
#F59E0B
```

---

## Error

```
#EF4444
```

---

## Background

Light

```
#FFFFFF
```

Dark

```
#0F172A
```

---

# Typography

Primary Font

Inter

Fallback

sans-serif

---

# Border Radius

Cards

16px

Buttons

12px

Inputs

12px

Dialogs

20px

---

# Shadows

Cards

Soft Shadow

Buttons

Small Shadow

Dialogs

Large Shadow

Avoid excessive shadows.

---

# Animations

Use Framer Motion.

Animations should be:

- Smooth
- Fast
- Subtle

Avoid distracting animations.

---

# Navigation

Sticky Navbar

Contains:

- Logo
- Home
- Prompt Builder
- Templates
- Saved Prompts
- Dashboard
- About
- Theme Toggle

Desktop Navigation

Horizontal

Mobile Navigation

Hamburger Drawer

---

# Pages

The application shall contain the following pages.

---

## 1. Landing Page

Sections

- Hero
- Features
- Prompt Categories
- Benefits
- Statistics
- CTA
- Footer

Buttons

- Start Building
- Explore Templates

---

## 2. Prompt Builder

Main feature.

Layout

```
-------------------------------------------------
| Input Form | Live Prompt Preview |
-------------------------------------------------
```

Left Panel

Contains

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

Buttons

- Generate
- Improve with AI
- Reset
- Save

Right Panel

Contains

- Live Preview
- Prompt Score
- AI Suggestions
- Copy
- Export

---

## 3. Template Library

Display templates using responsive cards.

Each card includes

- Icon
- Name
- Category
- Description
- Difficulty
- Use Template Button

---

## 4. Saved Prompts

Display saved prompts.

Features

- Search
- Filter
- Sort

Prompt Card

Contains

- Title
- Category
- Created Date
- Quality Score
- Favorite

Actions

- View
- Edit
- Delete
- Copy
- Export

---

## 5. Dashboard

Display analytics.

Cards

- Total Prompts
- Saved Prompts
- Favorites
- Average Score
- Templates Used

Future

Charts

Graphs

Weekly Activity

---

## 6. About

Contains

- Project Overview
- Features
- Tech Stack
- AI Model
- Developer
- GitHub

---

# Components

Reusable components.

- Navbar
- Footer
- Hero
- Card
- Button
- Input
- Textarea
- Select
- Badge
- Modal
- Drawer
- Tooltip
- Dropdown
- Dialog
- Toast
- Loading Spinner
- Skeleton Loader
- Empty State
- Error State
- Search Bar
- Theme Switch
- Prompt Card
- Feature Card

---

# Forms

Every input should contain:

- Label
- Placeholder
- Validation
- Helper Text
- Error Message

---

# Buttons

Primary

Filled Blue

Secondary

Outline

Ghost

Transparent

Danger

Red

Success

Green

Loading Button

Spinner

Disabled

Opacity

---

# Cards

Cards should have

- Rounded Corners
- Hover Effect
- Shadow
- Border
- Smooth Animation

---

# Icons

Use Lucide React Icons.

Examples

- Save
- Delete
- Copy
- Export
- Search
- Moon
- Sun
- AI Sparkles
- Folder
- Settings

---

# Loading States

Display during

- Prompt Generation
- Saving
- Export
- Firebase Requests
- AI Requests

Loading Types

- Spinner
- Skeleton

---

# Empty States

Examples

No Saved Prompts

No Search Results

No Templates Found

Each state should include:

- Illustration
- Message
- CTA Button

---

# Error States

Display

- Friendly Icon
- Short Message
- Retry Button

---

# Toast Notifications

Used for

- Save Success
- Delete Success
- Export Complete
- Copy Success
- AI Ready
- Error

Duration

3–5 seconds

---

# Responsive Design

Support

- Mobile
- Tablet
- Laptop
- Desktop

Use responsive layouts with Tailwind CSS breakpoints.

---

# Accessibility

The application should support:

- Keyboard Navigation
- Screen Readers
- ARIA Labels
- Visible Focus States
- Color Contrast
- Semantic HTML

---

# Performance

Lazy load:

- Dashboard
- Templates
- Saved Prompts

Optimize

- Images
- Fonts
- Icons
- Animations

---

# Future Enhancements

Support

- Drag & Drop Prompt Builder
- Split View
- Multi Window Editing
- AI Assistant Sidebar
- Voice Commands
- Keyboard Shortcuts
- Collaborative Editing

---

# Summary

The UI should provide a premium AI SaaS experience that is modern, responsive, accessible, and highly reusable. Every component should follow a consistent design system and support future scalability without requiring major architectural changes.