Perfect. Is project ki SRS hum industry-standard + Codex-friendly banayenge. Har chapter detailed hoga taake Codex ko implementation me kisi requirement ko guess na karna pade.
________________________________________
SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
FieryPrompts AI
AI Prompt Engineering Utility Platform
Version: 1.0
Prepared For: Innoviast AI Development Internship – Week 3
Prepared By: Muhammad Musa Jamil
________________________________________
Chapter 1 — Introduction
1.1 Purpose
The purpose of this Software Requirements Specification (SRS) is to define the complete functional and non-functional requirements for FieryPrompts AI, an AI-powered Prompt Engineering Utility Platform. This document serves as the primary blueprint for designing, developing, testing, and deploying the application.
FieryPrompts AI is designed to help users create professional, structured, and optimized prompts for modern Large Language Models (LLMs) such as ChatGPT, Claude, Gemini, Grok, GitHub Copilot, Codex, Cursor, and similar AI systems.
Unlike a simple prompt generator, the application aims to provide an intelligent prompt engineering experience by combining structured input, AI-assisted optimization, prompt quality analysis, reusable templates, cloud storage, and modern SaaS-inspired user experience.
This SRS provides complete technical and business requirements so the project can be implemented consistently without ambiguity.
________________________________________
1.2 Project Overview
FieryPrompts AI is a modern web-based application that enables users to generate, optimize, organize, and manage AI prompts through an intuitive visual interface.
Instead of manually writing lengthy prompts, users provide structured information such as role, task, context, constraints, examples, tone, and expected output. The system then constructs a professional AI prompt following prompt engineering best practices.
To further enhance prompt quality, the application integrates the Groq API with the Llama 3.3 70B Versatile model to improve prompts, provide optimization suggestions, and analyze prompt quality.
Generated prompts are securely stored in Firebase Firestore, allowing users to access, edit, organize, and reuse their prompts across sessions.
The application follows modern SaaS design principles, offering responsive layouts, dark/light themes, smooth animations, reusable components, and a clean user experience.
________________________________________
1.3 Objectives
The primary objectives of FieryPrompts AI are:
•	Develop an intelligent Prompt Engineering Utility Platform.
•	Enable users to create structured AI prompts using guided input fields.
•	Improve prompt quality through AI-assisted optimization.
•	Provide live prompt preview while users build prompts.
•	Allow users to save prompts securely using Firebase Firestore.
•	Support editing, deleting, searching, and organizing saved prompts.
•	Maintain a modern, responsive, and user-friendly interface.
•	Demonstrate prompt engineering principles through practical implementation.
•	Showcase AI integration using the Groq API.
•	Produce a scalable project suitable for professional portfolios.
________________________________________
1.4 Scope
The scope of the project includes designing and implementing a complete AI-powered prompt engineering platform with both mandatory assignment requirements and additional productivity features.
The application will allow users to:
•	Generate structured prompts.
•	Optimize prompts using AI.
•	Preview prompts in real time.
•	Store prompts in Firebase.
•	Edit previously saved prompts.
•	Delete unwanted prompts.
•	Search prompt history.
•	Mark prompts as favorites.
•	Export prompts in multiple formats.
•	Copy prompts instantly.
•	Browse predefined prompt templates.
•	Monitor prompt usage statistics.
•	Access the application on desktop, tablet, and mobile devices.
The project focuses exclusively on prompt engineering and prompt management. It does not include user authentication, team collaboration, payment integration, or online prompt sharing in the initial release.
________________________________________
1.5 Target Users
FieryPrompts AI is intended for users who regularly interact with AI language models.
Primary users include:
•	AI Developers
•	Prompt Engineers
•	Software Developers
•	Students
•	Researchers
•	Technical Writers
•	Content Creators
•	Digital Marketers
•	Business Professionals
•	UI/UX Designers
•	Freelancers
•	Educators
The platform is designed for both beginners learning prompt engineering and experienced professionals seeking productivity improvements.
________________________________________
1.6 Problem Statement
Modern AI systems generate significantly better responses when provided with well-structured prompts. However, many users struggle to write effective prompts because they lack knowledge of prompt engineering principles.
Common problems include:
•	Poorly structured prompts
•	Missing context
•	Lack of role definition
•	Weak instructions
•	Unclear expected outputs
•	Inconsistent formatting
•	Difficulty managing previously created prompts
As a result, users often receive inaccurate, incomplete, or low-quality AI responses.
There is a need for an application that simplifies prompt engineering by guiding users through a structured workflow while providing AI-assisted optimization and prompt management capabilities.
________________________________________
1.7 Proposed Solution
FieryPrompts AI addresses these challenges by providing a structured Prompt Engineering Utility Platform.
Users enter structured information through guided input fields instead of writing prompts manually.
The application automatically combines:
•	Role
•	Task
•	Context
•	Constraints
•	Examples
•	Tone
•	Output Format
•	Success Criteria
•	Negative Instructions
into a professionally formatted prompt.
The generated prompt can then be enhanced using AI, evaluated for quality, stored in Firebase, exported, copied, and reused whenever needed.
By combining prompt engineering best practices with AI assistance, FieryPrompts AI enables users to create more accurate, reusable, and effective prompts.
________________________________________
1.8 Expected Outcomes
Upon completion, the system should provide:
•	Professional AI prompt generation.
•	AI-assisted prompt improvement.
•	Prompt quality scoring.
•	Live prompt preview.
•	Cloud-based prompt storage.
•	Prompt history management.
•	Favorite prompt organization.
•	Export functionality.
•	Responsive modern user interface.
•	High usability and maintainability.
•	Portfolio-quality SaaS application.
________________________________________
1.9 Project Vision
The long-term vision of FieryPrompts AI is to become a comprehensive Prompt Engineering Platform that assists users in designing high-quality prompts for a wide range of AI models.
Future versions may include user authentication, collaborative workspaces, prompt versioning, analytics, cloud synchronization, team libraries, prompt sharing, and AI-powered prompt recommendations.
For the Week 3 internship project, the focus is on delivering a stable, scalable, and professional foundation that fully satisfies the assignment requirements while demonstrating modern AI application development practices.
________________________________________
Chapter 2 — Overall Description
________________________________________
2.1 Product Perspective
FieryPrompts AI is a modern AI-powered Prompt Engineering Utility Platform developed to help users create professional, structured, and reusable prompts for Large Language Models (LLMs).
The application follows a Software-as-a-Service (SaaS) architecture where users interact with a responsive web interface to build prompts through guided input fields rather than manually writing lengthy instructions.
The platform combines traditional form-based prompt generation with AI-assisted prompt optimization, cloud storage using Firebase Firestore, and prompt management capabilities.
Unlike generic prompt generators, FieryPrompts AI provides a complete prompt engineering workflow that includes prompt creation, optimization, storage, organization, searching, exporting, and future scalability.
The system is designed to be modular, reusable, and maintainable, allowing future enhancements without major architectural changes.
________________________________________
2.2 Product Features
The application consists of several integrated modules that work together to provide a complete prompt engineering experience.
Core Features
Home Page
•	Modern SaaS landing page
•	Hero section
•	Feature highlights
•	Call-to-action buttons
•	Responsive navigation
•	Dark/Light mode
________________________________________
Prompt Builder
Allows users to generate professional AI prompts using structured fields.
Required fields include:
•	Role
•	Task
•	Context
•	Constraints
•	Examples
•	Output Format
•	Tone
•	Success Criteria
•	Negative Instructions
________________________________________
Live Prompt Preview
As users fill the form, the complete prompt updates automatically without requiring the Generate button.
This enables users to immediately visualize the final prompt.
________________________________________
AI Prompt Optimization
After generating a prompt, users can improve it using Groq AI.
The AI rewrites the prompt by:
•	Improving clarity
•	Adding missing details
•	Increasing prompt quality
•	Optimizing structure
•	Enhancing readability
________________________________________
Prompt Quality Score
The application analyzes generated prompts and assigns a quality score between 0 and 100.
The score is based on:
•	Context completeness
•	Role definition
•	Constraints
•	Examples
•	Output clarity
•	Overall structure
Suggestions for improvement are also displayed.
________________________________________
Smart Suggestions
Based on user input, the application automatically recommends:
•	Better roles
•	Better constraints
•	Better tone
•	Better output format
•	Better success criteria
________________________________________
Prompt Library
The system includes a collection of predefined prompt templates.
Examples include:
•	React Development
•	Next.js Application
•	Python Automation
•	AI Chatbot
•	Resume Review
•	UI Design
•	Database Design
•	API Development
•	Marketing Copy
•	Blog Writing
•	Business Proposal
•	Email Writing
Selecting a template automatically fills the prompt builder.
________________________________________
Saved Prompts
Users can save prompts permanently using Firebase Firestore.
Each saved prompt includes:
•	Title
•	Prompt Content
•	Category
•	Creation Date
•	Last Modified Date
•	Favorite Status
________________________________________
Prompt History
The system maintains previously generated prompts.
Users can:
•	View history
•	Search prompts
•	Edit prompts
•	Delete prompts
•	Reload prompts
________________________________________
Favorites
Frequently used prompts can be marked as favorites for quick access.
________________________________________
Prompt Export
Users can export prompts as:
•	Markdown (.md)
•	Text (.txt)
•	PDF (.pdf)
________________________________________
Copy Prompt
Generated prompts can be copied directly to the clipboard.
________________________________________
Dashboard
A dashboard provides quick statistics such as:
•	Total Prompts Generated
•	Saved Prompts
•	Favorite Prompts
•	Prompt Templates Used
•	Recent Activity
________________________________________
Responsive Design
The application is fully responsive across:
•	Desktop
•	Laptop
•	Tablet
•	Mobile Devices
________________________________________
2.3 User Classes
The platform is intended for users with varying levels of prompt engineering experience.
Beginner Users
Individuals who are new to AI tools and require guided prompt creation.
Examples:
•	Students
•	Beginners
•	First-time AI users
________________________________________
Intermediate Users
Users who regularly use ChatGPT, Gemini, Claude, or similar AI tools but wish to improve prompt quality.
Examples:
•	Developers
•	Content Writers
•	Researchers
________________________________________
Professional Users
Experienced users who require reusable and optimized prompts.
Examples:
•	Prompt Engineers
•	AI Developers
•	Software Engineers
•	Product Managers
•	Technical Writers
________________________________________
2.4 Operating Environment
The application will operate in modern web browsers.
Supported Operating Systems
•	Windows
•	Linux
•	macOS
________________________________________
Supported Browsers
•	Google Chrome
•	Microsoft Edge
•	Mozilla Firefox
•	Safari
________________________________________
Internet Requirement
Internet connection is required for:
•	Groq API communication
•	Firebase Firestore synchronization
Basic interface functionality remains available even if AI services are temporarily unavailable.
________________________________________
2.5 Design Constraints
The application must satisfy the following constraints:
•	Built using Next.js 15
•	Developed with TypeScript
•	Styled using Tailwind CSS
•	Uses Firebase Firestore for cloud storage
•	Uses Groq API for AI functionality
•	Deployed on Vercel
•	Responsive across all screen sizes
•	No hardcoded API keys
•	Environment variables must be used
•	Reusable component architecture
•	Clean folder structure
•	Modular codebase
________________________________________
2.6 Assumptions
The following assumptions are made during development:
•	Users have internet access.
•	Groq API remains available.
•	Firebase services remain operational.
•	Modern browsers support JavaScript.
•	Users provide meaningful prompt information.
•	API keys are correctly configured.
________________________________________
2.7 Dependencies
The project depends on several third-party services and libraries.
External Services
•	Groq API
•	Firebase Firestore
•	Vercel
________________________________________
Development Frameworks
•	Next.js
•	React
•	TypeScript
•	Tailwind CSS
________________________________________
UI Libraries
•	shadcn/ui
•	Lucide React
•	Framer Motion
________________________________________
Utility Libraries
•	React Hook Form
•	Zod
•	Sonner
•	jsPDF
________________________________________
2.8 Product Benefits
FieryPrompts AI offers several advantages over manually writing prompts.
Productivity
Reduces the time required to create professional AI prompts.
________________________________________
Prompt Quality
Encourages structured prompt engineering practices.
________________________________________
AI Optimization
Improves prompts using advanced language models.
________________________________________
Reusability
Previously created prompts can be saved and reused.
________________________________________
Organization
Prompts remain organized through categories, favorites, and search functionality.
________________________________________
Scalability
The architecture supports future enhancements such as authentication, collaboration, analytics, and cloud synchronization.
________________________________________
2.9 Product Limitations
The first release intentionally excludes:
•	Multi-user authentication
•	Team collaboration
•	Prompt sharing marketplace
•	Real-time collaboration
•	Subscription system
•	Offline cloud synchronization
•	AI model selection
•	Prompt version control
These features are considered future enhancements and are outside the scope of the Week 3 internship project.
________________________________________
Chapter 3 — Functional Requirements
This chapter defines the detailed functional requirements of FieryPrompts AI. Each requirement includes its objective, input, process, output, validation rules, and acceptance criteria to provide a complete implementation guide.
________________________________________
FR-1 Home Page
Description
The Home Page serves as the landing page of FieryPrompts AI. It introduces the platform, highlights its features, and provides navigation to the Prompt Builder.
Objective
Provide users with an attractive introduction to the platform and encourage them to start building prompts.
Inputs
•	User visits the application.
Process
The system shall display:
•	Navigation Bar
•	Hero Section
•	Features Section
•	Statistics Section
•	Call-To-Action
•	Footer
Outputs
User can navigate to:
•	Prompt Builder
•	Prompt Library
•	Saved Prompts
•	Dashboard
•	About
Validation
No validation required.
Acceptance Criteria
•	Loads successfully.
•	Fully responsive.
•	Interactive animations.
•	Navigation works correctly.
________________________________________
FR-2 Prompt Builder
Description
Allows users to build professional prompts using structured inputs.
Required Fields
•	Prompt Title
•	AI Role
•	Task
•	Context
•	Constraints
•	Examples
•	Output Format
•	Tone
•	Success Criteria
•	Negative Instructions
Process
The application collects all fields and generates a structured prompt.
Output
Professional AI Prompt.
Validation
Required:
•	Title
•	Role
•	Task
Optional:
•	Context
•	Constraints
•	Examples
•	Tone
•	Output Format
•	Success Criteria
•	Negative Instructions
Acceptance Criteria
•	Form submits successfully.
•	Prompt generated correctly.
•	Required fields validated.
________________________________________
FR-3 Live Prompt Preview
Description
Display the generated prompt while users type.
Objective
Provide immediate visual feedback.
Input
Changes in any prompt field.
Process
Automatically regenerate preview.
Output
Updated preview panel.
Validation
Empty fields should not cause errors.
Acceptance Criteria
•	Updates instantly.
•	No page refresh.
•	Smooth rendering.
________________________________________
FR-4 Generate Prompt
Description
Creates the final structured prompt.
Process
Combine:
•	Role
•	Task
•	Context
•	Constraints
•	Examples
•	Output Format
•	Tone
•	Success Criteria
•	Negative Instructions
into one optimized prompt.
Output
Final prompt.
Acceptance Criteria
Generated prompt follows standard prompt engineering format.
________________________________________
FR-5 AI Prompt Improvement
Description
Improve the generated prompt using Groq AI.
Objective
Transform a good prompt into a professional prompt.
Input
Generated Prompt.
Process
Send prompt to Groq API.
AI enhances:
•	Clarity
•	Structure
•	Precision
•	Context
•	Readability
Output
Improved Prompt.
Validation
Prompt cannot be empty.
Acceptance Criteria
Improved prompt returned successfully.
________________________________________
FR-6 Prompt Quality Score
Description
Analyze generated prompt quality.
Process
Evaluate:
•	Role
•	Context
•	Constraints
•	Examples
•	Output
•	Clarity
Output
Prompt Score
Example
95 / 100
Suggestions
•	Add more examples.
•	Improve context.
•	Add constraints.
Acceptance Criteria
Score displayed with recommendations.
________________________________________
FR-7 Smart Suggestions
Description
Recommend better prompt elements.
Suggestions
Recommended
•	Role
•	Tone
•	Constraints
•	Output Format
•	Success Criteria
Acceptance Criteria
Suggestions update dynamically.
________________________________________
FR-8 Prompt Library
Description
Provide predefined templates.
Templates
•	React Developer
•	Next.js Project
•	Python Automation
•	API Development
•	Resume Review
•	Marketing
•	Blog Writing
•	Business Proposal
•	Database Design
•	UI Design
Process
Selecting a template fills the form.
Acceptance Criteria
Template loads successfully.
________________________________________
FR-9 Save Prompt
Description
Save prompts into Firebase Firestore.
Stored Information
•	Prompt ID
•	Title
•	Prompt
•	Category
•	Favorite
•	Created Date
•	Updated Date
Acceptance Criteria
Prompt successfully saved.
________________________________________
FR-10 View Saved Prompts
Description
Display all saved prompts.
Features
•	Search
•	Sort
•	Filter
•	Open
•	Copy
Acceptance Criteria
Saved prompts retrieved correctly.
________________________________________
FR-11 Edit Prompt
Description
Modify existing prompts.
Process
Retrieve document from Firebase.
Update fields.
Save changes.
Acceptance Criteria
Updated prompt visible immediately.
________________________________________
FR-12 Delete Prompt
Description
Delete saved prompt.
Process
Ask confirmation.
Delete document.
Refresh list.
Acceptance Criteria
Prompt permanently removed.
________________________________________
FR-13 Favorite Prompt
Description
Allow users to mark prompts as favorites.
Process
Click Heart Icon.
Favorite status updates in Firebase.
Acceptance Criteria
Favorite list updates immediately.
________________________________________
FR-14 Search Prompt
Description
Search prompts by:
•	Title
•	Category
•	Content
Acceptance Criteria
Matching prompts displayed instantly.
________________________________________
FR-15 Export Prompt
Description
Export prompts.
Supported formats
•	Markdown (.md)
•	Text (.txt)
•	PDF (.pdf)
Acceptance Criteria
Download starts successfully.
________________________________________
FR-16 Copy Prompt
Description
Copy prompt into clipboard.
Acceptance Criteria
Toast message appears.
Clipboard updated successfully.
________________________________________
FR-17 Dashboard
Description
Display project statistics.
Statistics
•	Total Prompts
•	Saved Prompts
•	Favorites
•	Templates Used
•	Recent Activity
Acceptance Criteria
Statistics update automatically.
________________________________________
FR-18 Theme Management
Description
Support:
•	Light Theme
•	Dark Theme
•	System Theme
Acceptance Criteria
Theme preference persists after refresh.
________________________________________
FR-19 Firebase Synchronization
Description
Synchronize prompt data with Firebase Firestore.
Process
Create
Read
Update
Delete
Acceptance Criteria
All CRUD operations work correctly.
________________________________________
FR-20 Responsive Design
Description
Support multiple screen sizes.
Devices
Desktop
Laptop
Tablet
Mobile
Acceptance Criteria
No layout breaking.
All components remain usable.
________________________________________
FR-21 Error Handling
Description
Handle unexpected situations gracefully.
Errors
•	Empty Input
•	Firebase Failure
•	Groq API Failure
•	Network Error
•	Invalid Export
•	Unexpected Exception
Acceptance Criteria
Display user-friendly messages without exposing technical details.
________________________________________
FR-22 Notifications
Description
Display toast notifications for:
•	Save Successful
•	Delete Successful
•	Export Successful
•	Copy Successful
•	AI Generation Complete
•	Error Messages
Acceptance Criteria
Notifications disappear automatically after a few seconds.
________________________________________
FR-23 Accessibility
Description
Improve usability for all users.
Requirements
•	Keyboard Navigation
•	Proper Labels
•	Focus Indicators
•	Semantic HTML
•	ARIA Attributes (where needed)
•	Sufficient Color Contrast
Acceptance Criteria
Core functionality is accessible without relying solely on a mouse.
________________________________________
Chapter 4 — Non-Functional Requirements
Non-functional requirements define how the system should perform rather than what it should do. These requirements ensure that FieryPrompts AI is reliable, secure, scalable, maintainable, and provides an excellent user experience.
________________________________________
4.1 Performance Requirements
The application shall provide a fast and responsive user experience under normal operating conditions.
Requirements
•	Home page should load within 3 seconds on a standard internet connection.
•	Page transitions should complete within 500 milliseconds.
•	Live Prompt Preview should update instantly as users type.
•	Prompt generation should complete within 2 seconds for local processing.
•	AI-based prompt improvement should return results within 10 seconds, depending on the Groq API response time.
•	Firebase CRUD operations should complete within 2 seconds under normal network conditions.
________________________________________
4.2 Reliability Requirements
The application must consistently perform expected operations without failures.
Requirements
•	The system should continue functioning even if AI services are temporarily unavailable.
•	Temporary network interruptions should not crash the application.
•	Failed Firebase requests should display appropriate retry messages.
•	The application should gracefully recover from unexpected exceptions.
•	No user data should be lost during normal operation.
________________________________________
4.3 Availability Requirements
The application should remain available whenever external services are operational.
Requirements
•	Accessible 24/7 through Vercel deployment.
•	Firebase Firestore should be available whenever Google's services are operational.
•	Groq API availability depends on Groq service status.
•	The application should remain partially usable even when AI features are temporarily unavailable.
________________________________________
4.4 Security Requirements
Security is essential to protect user data and API credentials.
Requirements
•	API keys must never be exposed to the client.
•	Environment variables must store sensitive credentials.
•	Firebase security rules must restrict unauthorized database access.
•	User input must be validated before processing.
•	Prevent Cross-Site Scripting (XSS) attacks.
•	Prevent injection attacks.
•	Sensitive information must never appear in browser logs.
•	HTTPS must be used in production.
________________________________________
4.5 Scalability Requirements
The application should support future growth without major architectural changes.
Requirements
The architecture should support:
•	User authentication
•	Multi-user support
•	Prompt sharing
•	Team workspaces
•	Cloud synchronization
•	Analytics
•	Prompt marketplace
•	Version history
•	AI model selection
without requiring significant code restructuring.
________________________________________
4.6 Maintainability Requirements
The application should be easy to maintain and extend.
Requirements
•	Modular component architecture.
•	Reusable UI components.
•	Consistent folder structure.
•	Proper TypeScript typing.
•	Clean code practices.
•	Minimal code duplication.
•	Meaningful variable and function names.
•	Separation of UI, business logic, and utility functions.
________________________________________
4.7 Usability Requirements
The application should be simple for both beginners and professionals.
Requirements
•	Clean and intuitive interface.
•	Clear labels on all input fields.
•	Minimal learning curve.
•	Helpful placeholder text.
•	Informative validation messages.
•	Consistent navigation.
•	Responsive layout across devices.
•	Smooth animations without affecting usability.
________________________________________
4.8 Accessibility Requirements
The application should be usable by a wide range of users.
Requirements
•	Semantic HTML elements.
•	Keyboard navigation support.
•	Proper focus indicators.
•	Accessible buttons and form controls.
•	Sufficient color contrast.
•	ARIA attributes where appropriate.
•	Screen reader compatibility for essential functionality.
________________________________________
4.9 Compatibility Requirements
The application shall function correctly across supported environments.
Supported Browsers
•	Google Chrome
•	Microsoft Edge
•	Mozilla Firefox
•	Safari
Supported Operating Systems
•	Windows
•	macOS
•	Linux
Supported Devices
•	Desktop
•	Laptop
•	Tablet
•	Mobile
________________________________________
4.10 Responsiveness Requirements
The interface must adapt to different screen sizes without losing functionality.
Breakpoints
•	Mobile
•	Tablet
•	Laptop
•	Desktop
•	Large Desktop
Requirements
•	No horizontal scrolling.
•	Flexible layouts.
•	Responsive navigation.
•	Adaptive cards and forms.
•	Proper spacing on all screen sizes.
________________________________________
4.11 Data Integrity Requirements
The system must maintain accurate and consistent data.
Requirements
•	Every saved prompt must have a unique identifier.
•	Prompt updates should overwrite only the intended document.
•	Deleted prompts should be permanently removed from Firestore.
•	Duplicate document creation should be avoided where possible.
•	Prompt metadata must remain synchronized with its content.
________________________________________
4.12 Error Handling Requirements
Unexpected situations must be handled gracefully.
Errors Covered
•	Empty required fields
•	Invalid form data
•	Firebase connection failure
•	Groq API timeout
•	API rate limits
•	Network interruption
•	Invalid export requests
•	Clipboard permission errors
•	Unexpected application exceptions
Requirements
•	Display friendly error messages.
•	Never expose stack traces or internal implementation details.
•	Allow users to retry failed operations when appropriate.
________________________________________
4.13 Logging Requirements
Logging should assist debugging while protecting sensitive information.
Requirements
•	Log development errors during development only.
•	Avoid logging API keys or confidential information.
•	Production logs should contain only necessary diagnostic details.
•	User prompt content should not be unnecessarily logged.
________________________________________
4.14 Code Quality Requirements
The project must follow modern software engineering practices.
Requirements
•	TypeScript throughout the project.
•	Strict typing enabled.
•	Reusable functions and components.
•	Consistent naming conventions.
•	Proper file organization.
•	No unused code.
•	No duplicated business logic.
•	Linting compliance.
•	Readable code structure.
________________________________________
4.15 Deployment Requirements
The application must support reliable deployment.
Platform
•	Vercel
Requirements
•	Successful production build.
•	Environment variables configured.
•	Firebase connected correctly.
•	Groq API accessible.
•	No build-time errors.
•	Optimized production bundle.
________________________________________
4.16 AI Performance Requirements
AI-generated content should meet quality expectations.
Requirements
•	Responses should remain relevant to user input.
•	Improved prompts should preserve the original intent.
•	Suggestions should enhance prompt quality without introducing unrelated content.
•	AI failures should not prevent access to other application features.
________________________________________
4.17 Future Readiness
The system architecture should allow future enhancements with minimal refactoring.
Potential future enhancements include:
•	User Authentication
•	Team Collaboration
•	Prompt Collections
•	Prompt Marketplace
•	AI Analytics
•	Prompt Version History
•	Multi-Model AI Support
•	Cloud Backup
•	Prompt Sharing via URL
•	Usage Reports
________________________________________
Summary
The non-functional requirements ensure that FieryPrompts AI is not only feature-rich but also performant, secure, maintainable, and scalable. These standards will guide development decisions and help produce a professional, production-ready application suitable for both the internship and a long-term portfolio project.
________________________________________
Chapter 5 — Technology Stack & Development Environment
This chapter defines the complete technology stack, development tools, third-party services, libraries, deployment platform, and overall technical environment required for the development of FieryPrompts AI.
The selected technologies prioritize scalability, maintainability, performance, modern development practices, and compatibility with AI-powered web applications.
________________________________________
5.1 Technology Stack Overview
FieryPrompts AI follows a modern full-stack web architecture built using React-based technologies with AI integration and cloud database services.
Layer	Technology
Frontend	Next.js 15
UI Framework	React 19
Programming Language	TypeScript
Styling	Tailwind CSS
UI Components	shadcn/ui
Icons	Lucide React
Animation	Framer Motion
Backend	Next.js API Routes
AI Service	Groq API
AI Model	Llama 3.3 70B Versatile
Database	Firebase Firestore
Form Validation	React Hook Form + Zod
Notifications	Sonner
Theme Management	next-themes
PDF Export	jsPDF
Version Control	Git & GitHub
Deployment	Vercel
________________________________________
5.2 Frontend Technologies
Next.js 15
Next.js serves as the primary frontend framework.
Responsibilities
•	Application Routing
•	Server Components
•	API Routes
•	Performance Optimization
•	Production Build
•	SEO Support
Benefits
•	Modern App Router
•	Fast Rendering
•	Optimized Performance
•	Excellent Developer Experience
________________________________________
React 19
React provides the component-based architecture.
Responsibilities
•	UI Rendering
•	State Management
•	Event Handling
•	Dynamic Updates
________________________________________
TypeScript
TypeScript improves application reliability.
Benefits
•	Static Typing
•	Better IntelliSense
•	Error Prevention
•	Improved Maintainability
________________________________________
Tailwind CSS
Tailwind CSS is used for styling.
Benefits
•	Utility-first approach
•	Responsive Design
•	Faster UI Development
•	Consistent Styling
________________________________________
5.3 UI Libraries
shadcn/ui
Provides reusable and accessible UI components.
Components include:
•	Button
•	Card
•	Dialog
•	Input
•	Textarea
•	Badge
•	Alert
•	Dropdown Menu
•	Tabs
•	Tooltip
•	Sheet
•	Accordion
________________________________________
Lucide React
Provides lightweight SVG icons.
Examples:
•	Save
•	Delete
•	Search
•	Copy
•	Download
•	Star
•	Moon
•	Sun
•	Settings
•	Sparkles
________________________________________
Framer Motion
Used for animations.
Animations include:
•	Page transitions
•	Card hover effects
•	Button animations
•	Fade-in effects
•	Loading animations
•	Modal transitions
________________________________________
5.4 Backend Technologies
Next.js API Routes
Backend logic is implemented using API Routes.
Responsibilities:
•	AI Request Handling
•	Prompt Optimization
•	Firebase Communication
•	Validation
•	Error Handling
Advantages:
•	No separate backend server required.
•	Easier deployment on Vercel.
•	Simplified project structure.
________________________________________
5.5 AI Integration
Groq API
Groq powers the AI features.
Responsibilities
•	Prompt Improvement
•	Prompt Optimization
•	Smart Suggestions
•	Prompt Quality Analysis
________________________________________
AI Model
Llama 3.3 70B Versatile
This model is selected due to:
•	High response quality
•	Fast inference
•	Strong reasoning capabilities
•	Excellent prompt engineering support
________________________________________
5.6 Database
Firebase Firestore
Firestore serves as the cloud database.
Responsibilities
•	Store Prompts
•	Update Prompts
•	Delete Prompts
•	Retrieve Saved Prompts
•	Favorites
•	Prompt History
Advantages
•	Cloud-based
•	Scalable
•	Real-time synchronization support
•	No server management
________________________________________
5.7 Form Management
React Hook Form
Used for managing forms efficiently.
Responsibilities:
•	Form State
•	Validation
•	Error Handling
________________________________________
Zod
Provides schema validation.
Validates:
•	Required Fields
•	Text Length
•	Invalid Values
•	Empty Inputs
________________________________________
5.8 Theme Management
next-themes
Supports:
•	Light Theme
•	Dark Theme
•	System Theme
User preference is preserved across sessions.
________________________________________
5.9 Notifications
Sonner
Displays toast notifications.
Examples:
•	Prompt Saved
•	Prompt Deleted
•	Prompt Copied
•	Export Successful
•	AI Response Generated
•	Validation Errors
________________________________________
5.10 Export Libraries
jsPDF
Used for PDF generation.
Supported exports:
•	PDF
•	Markdown
•	Plain Text
________________________________________
5.11 Development Tools
The project will be developed using the following tools:
Tool	Purpose
Visual Studio Code	Code Editor
Git	Version Control
GitHub	Repository Hosting
Vercel	Deployment
Firebase Console	Database Management
Groq Console	API Management
Chrome DevTools	Debugging
Postman (Optional)	API Testing
________________________________________
5.12 Folder Structure
The application follows a scalable architecture.
app/
│
├── api/
│
├── builder/
│
├── dashboard/
│
├── library/
│
├── saved/
│
├── about/
│
└── layout.tsx

components/
│
├── ui/
├── builder/
├── dashboard/
├── prompt/
├── library/
├── layout/
└── common/

lib/
│
├── firebase.ts
├── groq.ts
├── prompt.ts
└── utils.ts

hooks/

constants/

types/

public/

styles/

docs/
________________________________________
5.13 Environment Variables
Sensitive credentials are stored using environment variables.
GROQ_API_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=
No API key should be hardcoded in the source code.
________________________________________
5.14 Deployment Environment
Vercel
The production application will be deployed using Vercel.
Responsibilities
•	Hosting
•	Build Pipeline
•	Automatic Deployment
•	Environment Variables
•	HTTPS
________________________________________
5.15 Version Control
Git is used for source control.
Repository hosting:
GitHub
Development follows:
•	Feature-based commits
•	Branch management (if required)
•	Continuous deployment via Vercel
________________________________________
5.16 Browser Support
Supported browsers include:
•	Google Chrome
•	Microsoft Edge
•	Mozilla Firefox
•	Safari
________________________________________
5.17 Development Workflow
The development lifecycle follows these phases:
1.	Planning
2.	SRS Documentation
3.	UI Design
4.	Project Setup
5.	Core Feature Development
6.	AI Integration
7.	Firebase Integration
8.	Testing
9.	Deployment
10.	Documentation
________________________________________
5.18 Architecture Summary
User
   │
   ▼
Next.js Frontend
   │
   ▼
Prompt Builder
   │
   ├──────────────► Live Preview
   │
   ▼
Next.js API Routes
   │
   ├──────────────► Groq API (Prompt Optimization)
   │
   ▼
Generated Prompt
   │
   ├──────────────► Copy
   ├──────────────► Export
   └──────────────► Firebase Firestore
                         │
                         ▼
                 Saved Prompts Dashboard
________________________________________
Chapter Summary
This chapter defines the complete technical foundation of FieryPrompts AI, including its frontend, backend, AI integration, database, deployment platform, development tools, and architecture. The selected stack is modern, scalable, cloud-ready, and aligned with current industry practices for AI-powered SaaS applications.
________________________________________
Chapter 6 — System Architecture & Workflow
This chapter describes the overall architecture of FieryPrompts AI, including system components, data flow, module interactions, request lifecycle, and workflow diagrams. The architecture is designed to be modular, scalable, and easy to maintain.
________________________________________
6.1 System Architecture Overview
FieryPrompts AI follows a three-layer architecture:
1.	Presentation Layer (Frontend)
2.	Application Layer (Business Logic & API)
3.	Data Layer (Firebase Firestore)
The AI processing is handled through the Groq API, while Firebase Firestore stores user-generated prompt data.
________________________________________
High-Level Architecture
                    User
                      │
                      ▼
        ┌─────────────────────────┐
        │     Next.js Frontend    │
        │  (React + Tailwind CSS) │
        └─────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────┐
        │ Prompt Builder Engine   │
        │ Validation Engine       │
        │ Live Preview Engine     │
        └─────────────────────────┘
               │             │
               │             │
               ▼             ▼
      Next.js API Routes   Firebase Firestore
               │
               ▼
           Groq API
      (Llama 3.3 70B)
               │
               ▼
       Optimized Prompt
               │
               ▼
      Copy • Export • Save
________________________________________
6.2 System Modules
The application consists of multiple independent modules.
________________________________________
Module 1 — Landing Page
Responsibilities:
•	Display Hero Section
•	Features
•	Navigation
•	CTA
•	Footer
________________________________________
Module 2 — Prompt Builder
Responsible for collecting user input.
Fields include:
•	Prompt Title
•	Role
•	Task
•	Context
•	Constraints
•	Examples
•	Tone
•	Output Format
•	Success Criteria
•	Negative Instructions
________________________________________
Module 3 — Live Preview Engine
Continuously rebuilds the prompt while the user types.
Responsibilities:
•	Listen for field changes
•	Combine inputs
•	Display formatted preview
•	Update instantly
________________________________________
Module 4 — Validation Engine
Checks:
•	Required fields
•	Empty values
•	Invalid selections
•	Character limits
•	Input consistency
________________________________________
Module 5 — AI Processing Engine
Handles all AI-powered features.
Functions:
•	Improve Prompt
•	Optimize Prompt
•	Prompt Quality Analysis
•	Smart Suggestions
This module communicates with the Groq API through secure server-side API routes.
________________________________________
Module 6 — Firebase Data Manager
Responsible for:
•	Save Prompt
•	Read Prompt
•	Update Prompt
•	Delete Prompt
•	Favorites
•	History
________________________________________
Module 7 — Export Manager
Exports prompts in:
•	Markdown
•	TXT
•	PDF
________________________________________
Module 8 — Dashboard
Displays:
•	Total Prompts
•	Favorites
•	Saved Prompts
•	Recent Activity
•	Templates Used
________________________________________
6.3 Application Workflow
The complete application workflow is illustrated below.
User Opens Application

↓

Home Page

↓

Prompt Builder

↓

Enter Prompt Details

↓

Validation

↓

Live Preview Updates

↓

Generate Prompt

↓

AI Optimization (Optional)

↓

Quality Score

↓

Smart Suggestions

↓

Save Prompt

↓

Firebase Firestore

↓

Dashboard

↓

Copy / Export / Edit
________________________________________
6.4 Prompt Generation Workflow
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

Output Format

↓

Success Criteria

↓

Negative Instructions

↓

Prompt Builder Engine

↓

Professional Prompt
________________________________________
6.5 AI Optimization Workflow
Generated Prompt

↓

Next.js API Route

↓

Groq API

↓

Llama 3.3 70B

↓

Prompt Optimization

↓

Improved Prompt

↓

Display Results
________________________________________
6.6 Firebase Workflow
Save Prompt

↓

Validate Data

↓

Firestore Collection

↓

Document Created

↓

Confirmation Message

↓

Dashboard Updated
________________________________________
6.7 Prompt Retrieval Workflow
User Opens Saved Prompts

↓

Fetch Firestore Documents

↓

Sort

↓

Filter

↓

Display Prompt Cards

↓

Edit / Delete / Copy
________________________________________
6.8 Export Workflow
Generated Prompt

↓

Select Export Format

↓

Markdown
TXT
PDF

↓

Generate File

↓

Download
________________________________________
6.9 Search Workflow
User Types Search

↓

Search Engine

↓

Title

Category

Prompt Content

↓

Matching Results

↓

Display Cards
________________________________________
6.10 Dashboard Workflow
Firebase

↓

Fetch Statistics

↓

Calculate

Total Prompts

Favorites

Templates Used

Recent Activity

↓

Dashboard Cards
________________________________________
6.11 Error Handling Workflow
User Action

↓

Validation

↓

Success?

│

├── Yes

│      Continue

│

└── No

↓

Display Friendly Error

↓

Allow Retry
________________________________________
6.12 AI Request Lifecycle
Generate Prompt

↓

User Clicks Improve

↓

API Route

↓

Authentication

↓

Groq API

↓

AI Response

↓

Parse Response

↓

Display Improved Prompt

↓

Save (Optional)
________________________________________
6.13 CRUD Workflow
Create
Prompt Builder

↓

Firebase

↓

New Document
________________________________________
Read
Dashboard

↓

Firebase

↓

Display Prompt
________________________________________
Update
Open Prompt

↓

Edit

↓

Update Firestore

↓

Refresh UI
________________________________________
Delete
Delete Button

↓

Confirmation Dialog

↓

Firestore Delete

↓

Refresh List
________________________________________
6.14 Component Interaction Diagram
Navbar

│

├── Home

├── Prompt Builder

├── Library

├── Saved

├── Dashboard

└── About


Prompt Builder

│

├── Validation

├── Live Preview

├── AI Engine

├── Firebase

├── Export

└── Copy
________________________________________
6.15 Future Expansion Architecture
The architecture is intentionally modular to support future enhancements.
Future modules may include:
•	User Authentication
•	Team Collaboration
•	Prompt Marketplace
•	AI Chat
•	Prompt Collections
•	Prompt Version History
•	Multi-Model Support
•	Usage Analytics
•	Prompt Sharing
•	Workspace Management
These can be added with minimal changes to the existing architecture.
________________________________________
6.16 Architecture Design Principles
The system follows these software engineering principles:
•	Modular Architecture
•	Component Reusability
•	Separation of Concerns
•	Scalable Design
•	Maintainable Codebase
•	Secure API Communication
•	Cloud-Based Data Storage
•	Responsive UI Design
•	Server-Side AI Integration
•	Extensible Project Structure
________________________________________
Chapter Summary
This chapter explains how the different parts of FieryPrompts AI interact with each other—from user input to AI processing, Firebase storage, and final output. The architecture emphasizes modularity, scalability, and maintainability, providing a clear blueprint for implementation and future expansion.
________________________________________
Chapter 7 — Database Design (Firebase Firestore)
This chapter defines the database architecture for FieryPrompts AI. The application uses Firebase Firestore, a cloud-hosted NoSQL database, to store, retrieve, update, and manage user-generated prompt data.
Firestore was selected due to its scalability, real-time capabilities, cloud synchronization, and seamless integration with Next.js applications.
________________________________________
7.1 Database Overview
The application uses Cloud Firestore as its primary database.
Firestore stores data in:
•	Collections
•	Documents
•	Fields
Unlike traditional SQL databases, Firestore uses a document-based structure.
________________________________________
7.2 Database Architecture
                     Firebase Firestore
                            │
     ┌──────────────┬──────────────┬──────────────┐
     │              │              │
     ▼              ▼              ▼
   prompts      templates      settings
The application mainly interacts with the prompts collection.
Future collections can be added without modifying existing structures.
________________________________________
7.3 Firestore Collections
Collection 1 — prompts
Stores all user-generated prompts.
Document Example
{
  "title": "React Landing Page",
  "role": "Senior React Developer",
  "task": "Create a landing page",
  "context": "Startup SaaS Website",
  "constraints": "Responsive, Clean UI",
  "examples": "Modern Hero Section",
  "tone": "Professional",
  "outputFormat": "Markdown",
  "successCriteria": "Reusable Code",
  "negativeInstructions": "Avoid Bootstrap",
  "generatedPrompt": "...",
  "improvedPrompt": "...",
  "qualityScore": 94,
  "category": "Web Development",
  "favorite": true,
  "createdAt": "Timestamp",
  "updatedAt": "Timestamp"
}
________________________________________
Collection 2 — templates
Stores predefined prompt templates.
Document Example
{
  "name": "React Developer",
  "category": "Development",
  "role": "Senior React Developer",
  "task": "Build reusable React components",
  "tone": "Professional"
}
________________________________________
Collection 3 — settings
Stores application preferences.
Document Example
{
  "theme": "dark",
  "defaultTone": "Professional",
  "defaultOutput": "Markdown"
}
________________________________________
7.4 Prompt Document Schema
Each saved prompt contains the following fields:
Field	Type	Required
id	String	Auto Generated
title	String	Yes
role	String	Yes
task	String	Yes
context	String	No
constraints	String	No
examples	String	No
tone	String	No
outputFormat	String	No
successCriteria	String	No
negativeInstructions	String	No
generatedPrompt	String	Yes
improvedPrompt	String	No
qualityScore	Number	No
category	String	Yes
favorite	Boolean	Yes
createdAt	Timestamp	Yes
updatedAt	Timestamp	Yes
________________________________________
7.5 Firestore Relationships
Since Firestore is a NoSQL database, collections are independent.
Relationship Overview
Templates
     │
     │
     ▼
Prompt Builder
     │
     ▼
Generated Prompt
     │
     ▼
Prompts Collection
No joins are required.
________________________________________
7.6 CRUD Operations
Create Prompt
Purpose
Store a newly generated prompt.
Operation
Prompt Builder

↓

Validate

↓

Firestore

↓

New Document Created
________________________________________
Read Prompt
Purpose
Retrieve saved prompts.
Operation
Saved Prompts Page

↓

Firestore

↓

Display Prompt Cards
________________________________________
Update Prompt
Purpose
Modify an existing prompt.
Operation
Open Prompt

↓

Edit

↓

Update Firestore

↓

Refresh UI
________________________________________
Delete Prompt
Purpose
Remove unnecessary prompts.
Operation
Delete Button

↓

Confirmation

↓

Firestore Delete

↓

Refresh Prompt List
________________________________________
7.7 Search Functionality
Users can search prompts using:
•	Title
•	Category
•	Prompt Content
Search results update dynamically without page refresh.
________________________________________
7.8 Sorting
Supported sorting options include:
•	Newest First
•	Oldest First
•	Alphabetical (A–Z)
•	Alphabetical (Z–A)
•	Highest Quality Score
•	Favorites First
________________________________________
7.9 Filtering
Users can filter prompts by:
•	Category
•	Favorites
•	Recently Created
•	Recently Updated
•	Quality Score
________________________________________
7.10 Data Validation Rules
Before storing any document:
The application shall validate:
•	Required fields
•	Empty strings
•	Maximum length
•	Invalid characters
•	Missing title
•	Missing role
•	Missing task
Invalid documents must not be stored.
________________________________________
7.11 Firestore Security Rules
The following security principles shall be followed:
•	Validate incoming data.
•	Prevent unauthorized write operations.
•	Restrict malformed documents.
•	Deny invalid requests.
•	Protect database integrity.
(Authentication is outside the scope of Version 1.0. Security rules will be expanded when authentication is introduced.)
________________________________________
7.12 Data Consistency
The system shall ensure:
•	Every document has a unique ID.
•	Every prompt stores timestamps.
•	Updates overwrite only the selected document.
•	Deleted prompts are permanently removed.
•	Duplicate documents are avoided where possible.
________________________________________
7.13 Database Performance
To maintain performance:
•	Retrieve only required fields when possible.
•	Paginate large datasets in future versions.
•	Use Firestore indexing for searchable fields.
•	Avoid unnecessary database reads.
•	Cache UI state where appropriate.
________________________________________
7.14 Backup Strategy
Current Version
•	Firestore cloud storage acts as the primary data store.
Future Versions
•	Scheduled database backups.
•	Cloud synchronization across multiple devices.
•	Prompt version history.
•	Restore deleted prompts.
________________________________________
7.15 Future Database Expansion
The database design supports future additions such as:
•	User Accounts
•	Authentication
•	Teams
•	Organizations
•	Shared Prompt Libraries
•	Prompt Marketplace
•	AI Usage Analytics
•	Collections & Folders
•	Prompt Tags
•	Version History
•	Cloud Backup
These additions can be implemented without redesigning the existing schema.
________________________________________
7.16 Database Design Summary
The Firestore database for FieryPrompts AI is designed to be:
•	Cloud-based
•	Scalable
•	Secure
•	Flexible
•	Easy to maintain
•	Suitable for future enhancements
The document-oriented structure enables efficient storage and retrieval of prompts while supporting future features with minimal architectural changes.
________________________________________
Chapter 8 — API Specification
This chapter defines the REST API endpoints used by FieryPrompts AI. These APIs handle AI prompt generation, prompt optimization, Firebase operations, export functionality, and system health monitoring.
The application uses Next.js API Routes, eliminating the need for a separate backend server while keeping API keys secure.
________________________________________
8.1 API Overview
The backend exposes the following endpoints:
Endpoint	Method	Purpose
/api/generate	POST	Generate Prompt
/api/improve	POST	Improve Prompt using Groq
/api/score	POST	Analyze Prompt Quality
/api/suggestions	POST	Generate Smart Suggestions
/api/prompts	GET	Retrieve Saved Prompts
/api/prompts	POST	Save Prompt
/api/prompts/[id]	PUT	Update Prompt
/api/prompts/[id]	DELETE	Delete Prompt
/api/export	POST	Export Prompt
/api/health	GET	System Health Check
________________________________________
8.2 Generate Prompt API
Endpoint
POST /api/generate
Purpose
Generate a structured prompt from user input.
________________________________________
Request Body
{
  "title": "React Landing Page",
  "role": "Senior React Developer",
  "task": "Build a SaaS Landing Page",
  "context": "AI Startup",
  "constraints": "Responsive, Accessible",
  "examples": "Modern Hero Section",
  "tone": "Professional",
  "outputFormat": "Markdown",
  "successCriteria": "Reusable Components",
  "negativeInstructions": "Do not use Bootstrap"
}
________________________________________
Success Response
{
  "success": true,
  "generatedPrompt": "Professional formatted prompt..."
}
________________________________________
Error Response
{
  "success": false,
  "message": "Required fields are missing."
}
________________________________________
8.3 Improve Prompt API
Endpoint
POST /api/improve
Purpose
Send the generated prompt to Groq AI for optimization.
________________________________________
Request
{
  "prompt": "Generated Prompt..."
}
________________________________________
Success Response
{
  "success": true,
  "improvedPrompt": "AI Improved Prompt..."
}
________________________________________
Possible Errors
•	Empty Prompt
•	Groq API Error
•	Timeout
•	Invalid Response
________________________________________
8.4 Prompt Quality Score API
Endpoint
POST /api/score
Purpose
Analyze prompt quality.
________________________________________
Request
{
  "prompt": "Generated Prompt..."
}
________________________________________
Success Response
{
  "score": 94,
  "rating": "Excellent",
  "suggestions": [
    "Provide additional context",
    "Include expected output"
  ]
}
________________________________________
8.5 Smart Suggestions API
Endpoint
POST /api/suggestions
Purpose
Generate AI-powered recommendations while users build prompts.
________________________________________
Request
{
  "role": "Frontend Developer",
  "task": "Build Landing Page"
}
________________________________________
Response
{
  "recommendedTone": "Professional",
  "recommendedOutput": "Markdown",
  "recommendedConstraints": [
    "Reusable Components",
    "Accessibility",
    "SEO Friendly"
  ]
}
________________________________________
8.6 Save Prompt API
Endpoint
POST /api/prompts
Purpose
Save a generated prompt to Firebase Firestore.
________________________________________
Request
{
  "title": "Landing Page",
  "generatedPrompt": "...",
  "category": "Development",
  "favorite": false
}
________________________________________
Response
{
  "success": true,
  "documentId": "firebase-document-id"
}
________________________________________
8.7 Retrieve Saved Prompts API
Endpoint
GET /api/prompts
Purpose
Retrieve all prompts stored in Firebase.
________________________________________
Response
[
  {
    "id": "1",
    "title": "Landing Page",
    "favorite": true,
    "qualityScore": 95
  }
]
________________________________________
8.8 Update Prompt API
Endpoint
PUT /api/prompts/{id}
Purpose
Update an existing prompt.
________________________________________
Request
{
  "title": "Updated Prompt",
  "generatedPrompt": "Updated content"
}
________________________________________
Response
{
  "success": true,
  "message": "Prompt updated successfully."
}
________________________________________
8.9 Delete Prompt API
Endpoint
DELETE /api/prompts/{id}
Purpose
Delete a prompt from Firebase.
________________________________________
Response
{
  "success": true,
  "message": "Prompt deleted successfully."
}
________________________________________
8.10 Export Prompt API
Endpoint
POST /api/export
Purpose
Export prompts into different file formats.
________________________________________
Request
{
  "format": "pdf",
  "prompt": "Generated Prompt..."
}
________________________________________
Supported Formats
•	PDF
•	Markdown
•	TXT
________________________________________
Response
{
  "success": true,
  "download": "Generated File"
}
________________________________________
8.11 Health Check API
Endpoint
GET /api/health
Purpose
Check whether the backend service is running correctly.
________________________________________
Response
{
  "status": "healthy",
  "firebase": "connected",
  "groq": "available",
  "version": "1.0.0"
}
________________________________________
8.12 API Status Codes
Status Code	Meaning
200	Success
201	Resource Created
400	Bad Request
401	Unauthorized (Future)
403	Forbidden (Future)
404	Resource Not Found
429	Rate Limit Exceeded
500	Internal Server Error
503	Service Unavailable
________________________________________
8.13 Authentication
Version 1.0 does not implement user authentication.
Future versions may support:
•	Firebase Authentication
•	Google Sign-In
•	GitHub Login
•	Email & Password Authentication
Current APIs focus on prompt management and AI functionality.
________________________________________
8.14 Input Validation
Before processing requests, the API validates:
•	Required fields
•	Empty values
•	Maximum input length
•	Supported output formats
•	Valid tone values
•	Prompt size limits
Invalid requests return descriptive error messages.
________________________________________
8.15 Error Handling
Common API errors include:
Validation Error
{
  "success": false,
  "message": "Role is required."
}
________________________________________
Firebase Error
{
  "success": false,
  "message": "Unable to save prompt. Please try again."
}
________________________________________
Groq API Error
{
  "success": false,
  "message": "AI service is temporarily unavailable."
}
________________________________________
Network Error
{
  "success": false,
  "message": "Network connection lost."
}
________________________________________
Export Error
{
  "success": false,
  "message": "Unable to generate export file."
}
________________________________________
8.16 API Workflow
User Request
      │
      ▼
Input Validation
      │
      ▼
API Route
      │
      ├────────────► Firebase Firestore
      │
      ├────────────► Groq API
      │
      ▼
Business Logic
      │
      ▼
JSON Response
      │
      ▼
Frontend UI Update
________________________________________
8.17 Security Best Practices
•	Store API keys in environment variables.
•	Never expose Groq API keys to the client.
•	Validate all incoming requests.
•	Sanitize user input before processing.
•	Return user-friendly error messages.
•	Log only necessary server-side errors.
•	Use HTTPS in production.
________________________________________
Chapter Summary
This API specification defines all backend endpoints required for FieryPrompts AI, including AI integration, Firebase CRUD operations, prompt export, validation, health monitoring, and error handling. It provides a clear contract between the frontend and backend, ensuring consistent and maintainable development.
________________________________________
Chapter 9 — User Interface (UI/UX) Specification
This chapter defines the complete user interface design, layout, navigation, components, color system, typography, responsiveness, animations, and overall user experience of FieryPrompts AI.
The application follows a modern AI SaaS Dashboard design inspired by industry-leading platforms while maintaining a clean, intuitive, and responsive interface.
________________________________________
9.1 UI Design Goals
The user interface is designed to achieve the following objectives:
•	Clean and modern appearance
•	Easy navigation
•	Minimal learning curve
•	Fast interaction
•	Responsive across all devices
•	Professional SaaS-inspired design
•	Accessible interface
•	Smooth user experience
________________________________________
9.2 Design Style
The application follows a Modern AI SaaS Dashboard style.
Characteristics
•	Minimalistic layout
•	Rounded cards
•	Soft shadows
•	Glassmorphism (subtle use)
•	Spacious spacing
•	Clean typography
•	Smooth hover effects
•	Interactive buttons
•	Elegant animations
________________________________________
9.3 Color Palette
Primary Color
Blue
#2563EB
Used for:
•	Primary Buttons
•	Active Links
•	Icons
•	Highlights
________________________________________
Secondary Color
Purple
#7C3AED
Used for:
•	AI Features
•	Gradient Effects
•	Badges
________________________________________
Success
Green
#22C55E
Used for:
•	Save Success
•	Success Toasts
•	Quality Score
________________________________________
Warning
Orange
#F59E0B
Used for:
•	Warnings
•	Suggestions
________________________________________
Error
Red
#EF4444
Used for:
•	Validation Errors
•	Failed Requests
________________________________________
Neutral Colors
Background
#FFFFFF
Dark Background
#0F172A
Card
#F8FAFC
Text
#1E293B
Secondary Text
#64748B
________________________________________
9.4 Typography
Recommended Font
Inter
Fallback
•	Sans-serif
________________________________________
Font Sizes
Element	Size
Hero Heading	48px
Page Heading	36px
Section Heading	28px
Card Title	22px
Body Text	16px
Small Text	14px
________________________________________
9.5 Navigation Bar
The top navigation bar includes:
•	Logo
•	Home
•	Prompt Builder
•	Prompt Library
•	Saved Prompts
•	Dashboard
•	About
•	Theme Toggle
Behavior:
•	Sticky Navigation
•	Transparent on top
•	Blur on scroll
•	Mobile Hamburger Menu
________________________________________
9.6 Home Page Layout
Sections:
1.	Hero Section
2.	Features
3.	How It Works
4.	Statistics
5.	Prompt Categories
6.	Testimonials (Placeholder)
7.	Call-To-Action
8.	Footer
________________________________________
Hero Section
Contains:
•	Project Logo
•	Main Heading
•	Short Description
•	"Start Building" Button
•	"View Templates" Button
•	AI-themed Illustration
________________________________________
9.7 Prompt Builder Page
Layout:
---------------------------------------
| Input Form | Live Prompt Preview |
---------------------------------------
Left Panel
Input fields:
•	Title
•	Role
•	Task
•	Context
•	Constraints
•	Examples
•	Tone
•	Output Format
•	Success Criteria
•	Negative Instructions
Buttons:
•	Generate Prompt
•	Improve with AI
•	Save Prompt
•	Reset
________________________________________
Right Panel
Displays:
•	Live Prompt Preview
•	Prompt Quality Score
•	AI Suggestions
•	Copy Button
•	Export Button
________________________________________
9.8 Prompt Library Page
Displays predefined prompt templates as cards.
Each card contains:
•	Icon
•	Template Name
•	Category
•	Description
•	Use Template Button
________________________________________
9.9 Saved Prompts Page
Displays saved prompts.
Top controls:
•	Search Bar
•	Filter Dropdown
•	Sort Dropdown
Prompt Card includes:
•	Title
•	Category
•	Quality Score
•	Favorite Icon
•	Created Date
Actions:
•	Open
•	Edit
•	Delete
•	Copy
•	Export
________________________________________
9.10 Dashboard Page
Dashboard Cards:
•	Total Prompts
•	Favorites
•	Templates Used
•	Average Quality Score
•	Recent Activity
Charts (Future Enhancement)
•	Prompt Generation Trends
•	Category Usage
•	Most Used Templates
________________________________________
9.11 About Page
Contains:
•	Project Overview
•	Features
•	Technology Stack
•	AI Model Information
•	Developer Information
•	GitHub Repository Link
________________________________________
9.12 Buttons
Primary Button
•	Filled Blue
•	White Text
•	Rounded Corners
Secondary Button
•	Outline Style
Danger Button
•	Red
Ghost Button
•	Transparent
Icon Button
•	Copy
•	Delete
•	Favorite
•	Export
________________________________________
9.13 Cards
Cards include:
•	Rounded corners
•	Soft shadow
•	Hover animation
•	Smooth transitions
•	Consistent spacing
Used for:
•	Features
•	Templates
•	Dashboard
•	Saved Prompts
________________________________________
9.14 Forms
Every input includes:
•	Label
•	Placeholder
•	Validation
•	Helper Text (if needed)
•	Error Message
Form fields:
•	Input
•	Textarea
•	Dropdown
•	Toggle
•	Checkbox
________________________________________
9.15 Toast Notifications
Notifications appear in the top-right corner.
Examples:
•	Prompt Saved Successfully
•	Prompt Deleted
•	Prompt Copied
•	Export Completed
•	AI Response Ready
•	Validation Error
________________________________________
9.16 Loading States
Display loading indicators for:
•	AI Processing
•	Saving Prompt
•	Exporting
•	Loading Templates
•	Fetching Saved Prompts
Use:
•	Skeleton Loaders
•	Spinner
•	Animated Progress Indicator
________________________________________
9.17 Empty States
When no data is available, display informative illustrations and messages.
Examples:
•	No Saved Prompts
•	No Search Results
•	No Favorites Yet
Each empty state includes a clear call-to-action button.
________________________________________
9.18 Error States
Display friendly messages for:
•	Network Error
•	Firebase Error
•	Groq API Error
•	Validation Failure
Provide options to retry the failed action.
________________________________________
9.19 Animations
Use Framer Motion for:
•	Page transitions
•	Fade-in sections
•	Card hover effects
•	Button hover effects
•	Modal animations
•	Toast appearance
•	Drawer animations
Animations should remain smooth and subtle.
________________________________________
9.20 Responsive Design
The application supports:
•	Mobile
•	Tablet
•	Laptop
•	Desktop
Responsive behavior includes:
•	Collapsible navigation
•	Stacked layouts on smaller screens
•	Flexible cards
•	Adaptive typography
•	Touch-friendly controls
________________________________________
9.21 Theme Support
Available themes:
•	Light
•	Dark
•	System Default
The selected theme persists across sessions using local storage.
________________________________________
9.22 Accessibility
The interface follows accessibility best practices:
•	Keyboard navigation
•	Visible focus indicators
•	Semantic HTML
•	ARIA labels where applicable
•	Adequate color contrast
•	Screen reader compatibility for essential interactions
________________________________________
9.23 UI Components
The application uses reusable components, including:
•	Navbar
•	Footer
•	Hero Section
•	Feature Card
•	Prompt Form
•	Live Preview Panel
•	Prompt Card
•	Dashboard Card
•	Search Bar
•	Filter Dropdown
•	Theme Toggle
•	Toast Notification
•	Confirmation Dialog
•	Loading Skeleton
•	Empty State
•	Error Message
________________________________________
9.24 User Experience Flow
Landing Page
      │
      ▼
Prompt Builder
      │
      ▼
Live Preview
      │
      ▼
Generate Prompt
      │
      ▼
Improve with AI
      │
      ▼
Save Prompt
      │
      ▼
Dashboard
      │
      ▼
Copy • Export • Edit
________________________________________
9.25 UI Design Principles
The interface is built around the following principles:
•	Simplicity
•	Consistency
•	Clarity
•	Accessibility
•	Responsiveness
•	Visual Hierarchy
•	Reusability
•	Minimal Cognitive Load
•	Fast Feedback
•	Modern SaaS Aesthetics
________________________________________
Chapter Summary
This chapter defines the complete UI/UX specification for FieryPrompts AI, including page layouts, navigation, reusable components, color palette, typography, responsiveness, animations, accessibility, and user interaction patterns. These guidelines ensure a polished, professional, and consistent user experience suitable for a production-ready AI web application.
________________________________________
Chapter 10 — Testing Strategy & Test Cases
This chapter defines the testing methodology, test cases, validation rules, acceptance criteria, and quality assurance processes for FieryPrompts AI. The objective is to ensure that all application features function correctly, securely, and reliably before deployment.
________________________________________
10.1 Testing Objectives
The testing process aims to:
•	Verify that all functional requirements are implemented correctly.
•	Identify and resolve defects before deployment.
•	Validate AI integration and Firebase operations.
•	Ensure responsive behavior across devices.
•	Confirm data integrity and application stability.
•	Provide a smooth user experience.
________________________________________
10.2 Testing Types
The following testing methods will be performed:
Testing Type	Purpose
Unit Testing	Test individual components and functions
Integration Testing	Verify communication between modules
Functional Testing	Validate application features
UI Testing	Ensure interface consistency
Validation Testing	Verify user input
API Testing	Test API endpoints
Database Testing	Verify Firestore CRUD operations
Responsive Testing	Check different screen sizes
Performance Testing	Measure loading speed
User Acceptance Testing	Final verification before deployment
________________________________________
10.3 Functional Test Cases
________________________________________
Test Case 1 — Home Page
Item	Description
Test ID	TC-001
Feature	Home Page
Objective	Verify homepage loads successfully
Input	Open application
Expected Result	Landing page displays correctly
Status	Pass
________________________________________
Test Case 2 — Prompt Builder
Item	Description
Test ID	TC-002
Feature	Prompt Builder
Objective	Verify prompt creation
Input	Enter required fields
Expected Result	Prompt generated successfully
Status	Pass
________________________________________
Test Case 3 — Required Field Validation
Item	Description
Test ID	TC-003
Feature	Validation
Input	Leave Role empty
Expected Result	Validation message displayed
Status	Pass
________________________________________
Test Case 4 — Live Preview
Item	Description
Test ID	TC-004
Feature	Live Preview
Input	Modify prompt fields
Expected Result	Preview updates instantly
Status	Pass
________________________________________
Test Case 5 — AI Prompt Improvement
Item	Description
Test ID	TC-005
Feature	AI Optimization
Input	Click "Improve with AI"
Expected Result	Improved prompt displayed
Status	Pass
________________________________________
Test Case 6 — Save Prompt
Item	Description
Test ID	TC-006
Feature	Save Prompt
Input	Save generated prompt
Expected Result	Prompt stored in Firebase
Status	Pass
________________________________________
Test Case 7 — View Saved Prompts
Item	Description
Test ID	TC-007
Feature	Saved Prompts
Input	Open Saved Prompts page
Expected Result	Stored prompts displayed
Status	Pass
________________________________________
Test Case 8 — Edit Prompt
Item	Description
Test ID	TC-008
Feature	Edit Prompt
Input	Update prompt title
Expected Result	Changes saved successfully
Status	Pass
________________________________________
Test Case 9 — Delete Prompt
Item	Description
Test ID	TC-009
Feature	Delete Prompt
Input	Delete selected prompt
Expected Result	Prompt removed from Firebase
Status	Pass
________________________________________
Test Case 10 — Search Prompt
Item	Description
Test ID	TC-010
Feature	Search
Input	Enter prompt title
Expected Result	Matching prompts displayed
Status	Pass
________________________________________
Test Case 11 — Favorite Prompt
Item	Description
Test ID	TC-011
Feature	Favorites
Input	Click favorite icon
Expected Result	Prompt marked as favorite
Status	Pass
________________________________________
Test Case 12 — Export Prompt
Item	Description
Test ID	TC-012
Feature	Export
Input	Export as PDF
Expected Result	PDF downloaded successfully
Status	Pass
________________________________________
Test Case 13 — Copy Prompt
Item	Description
Test ID	TC-013
Feature	Copy Prompt
Input	Click Copy
Expected Result	Prompt copied to clipboard
Status	Pass
________________________________________
Test Case 14 — Dashboard Statistics
Item	Description
Test ID	TC-014
Feature	Dashboard
Input	Open Dashboard
Expected Result	Statistics displayed correctly
Status	Pass
________________________________________
10.4 API Testing
The following APIs should be verified:
API	Expected Result
POST /api/generate	Prompt generated
POST /api/improve	Improved prompt returned
POST /api/score	Score generated
POST /api/suggestions	Suggestions returned
POST /api/prompts	Prompt saved
GET /api/prompts	Prompt list returned
PUT /api/prompts/{id}	Prompt updated
DELETE /api/prompts/{id}	Prompt deleted
POST /api/export	File generated
GET /api/health	Healthy response
________________________________________
10.5 Database Testing
Verify Firebase Firestore operations:
Create
•	Document successfully created.
Read
•	Documents retrieved correctly.
Update
•	Changes reflected immediately.
Delete
•	Document permanently removed.
Validation
•	Invalid data rejected.
________________________________________
10.6 Validation Testing
The application should validate:
•	Empty title
•	Empty role
•	Empty task
•	Invalid output format
•	Unsupported category
•	Excessively long input
•	Invalid characters (where applicable)
Appropriate error messages should be displayed.
________________________________________
10.7 Error Handling Testing
Simulate the following scenarios:
Scenario	Expected Behavior
No Internet	Show network error
Firebase Offline	Display retry message
Groq API Down	Friendly AI unavailable message
Invalid API Key	Configuration error message
Empty Prompt	Validation message
Export Failure	Export error notification
________________________________________
10.8 Responsive Testing
Verify functionality on:
•	Mobile (≤640px)
•	Tablet (641–1024px)
•	Laptop (1025–1440px)
•	Desktop (>1440px)
Checks include:
•	Navigation
•	Forms
•	Prompt Preview
•	Dashboard
•	Cards
•	Buttons
•	Typography
________________________________________
10.9 Browser Compatibility Testing
Supported browsers:
•	Google Chrome
•	Microsoft Edge
•	Mozilla Firefox
•	Safari
Verify:
•	Layout consistency
•	Form behavior
•	API communication
•	Theme switching
________________________________________
10.10 Performance Testing
Measure:
•	Initial page load time
•	API response time
•	Firebase response time
•	AI response time
•	Export generation time
Performance targets:
•	Home page: ≤3 seconds
•	API responses: ≤2 seconds (excluding AI processing)
•	AI optimization: ≤10 seconds
•	Firebase CRUD: ≤2 seconds
________________________________________
10.11 Security Testing
Verify:
•	API keys are not exposed.
•	Environment variables are configured correctly.
•	Input validation prevents invalid requests.
•	Error messages do not reveal sensitive information.
•	HTTPS is enabled in production.
________________________________________
10.12 User Acceptance Testing (UAT)
Before final deployment, verify that users can:
•	Generate prompts
•	Improve prompts using AI
•	Save prompts
•	Search prompts
•	Edit prompts
•	Delete prompts
•	Export prompts
•	Copy prompts
•	Switch themes
•	Navigate all pages successfully
________________________________________
10.13 Acceptance Criteria
The project will be considered complete when:
•	All functional requirements are implemented.
•	All critical test cases pass.
•	No major UI issues remain.
•	Firebase integration works correctly.
•	Groq API integration functions reliably.
•	Responsive design works across supported devices.
•	Deployment is successful on Vercel.
•	Documentation is complete.
________________________________________
10.14 Bug Severity Levels
Severity	Description
Critical	Application crash or data loss
High	Major feature not working
Medium	Feature works with issues
Low	Minor UI or usability issue
________________________________________
10.15 Testing Summary
The testing strategy ensures that FieryPrompts AI is reliable, secure, responsive, and production-ready. By combining functional, integration, performance, security, and user acceptance testing, the application can be deployed with confidence while meeting both internship requirements and professional software quality standards.
________________________________________
Chapter 11 — Future Enhancements & Conclusion
This chapter outlines the future scope of FieryPrompts AI, potential enhancements, project limitations, conclusion, references, and appendices. Although Version 1.0 fulfills the internship requirements, the architecture has been designed to support future expansion with minimal changes.
________________________________________
11.1 Future Enhancements
The current version focuses on AI-powered prompt generation and management. Future versions may include the following features:
1. User Authentication
Allow users to create personal accounts using:
•	Firebase Authentication
•	Google Sign-In
•	GitHub Login
•	Email & Password Authentication
Benefits:
•	Personalized dashboard
•	Secure cloud synchronization
•	Multi-device access
________________________________________
2. Prompt Version History
Maintain previous versions of prompts.
Features:
•	View revision history
•	Restore older versions
•	Compare changes
•	Automatic version tracking
________________________________________
3. Team Collaboration
Allow multiple users to collaborate on prompts.
Features:
•	Shared workspaces
•	Team libraries
•	Comments
•	Real-time collaboration
________________________________________
4. Prompt Marketplace
Create a public marketplace where users can:
•	Share prompts
•	Download prompts
•	Rate prompts
•	Bookmark prompts
________________________________________
5. AI Model Selection
Allow users to choose different AI models.
Examples:
•	Llama 3.3
•	GPT Models
•	Claude
•	Gemini
•	DeepSeek
•	Mistral
________________________________________
6. Prompt Collections
Organize prompts into folders.
Example:
•	Web Development
•	AI
•	Marketing
•	Resume
•	Business
•	Education
________________________________________
7. Prompt Tags
Support multiple tags.
Example:
React

Next.js

Tailwind

Frontend

TypeScript
________________________________________
8. Analytics Dashboard
Provide insights such as:
•	Total prompts generated
•	Most used templates
•	AI usage statistics
•	Most popular categories
•	Weekly activity
•	Monthly reports
________________________________________
9. Prompt Sharing
Allow users to share prompts using:
•	Public Link
•	QR Code
•	Copy Link
•	Social Media
________________________________________
10. AI Chat Assistant
Integrate a chatbot capable of assisting users while building prompts.
Capabilities:
•	Improve prompts
•	Explain prompt engineering
•	Suggest templates
•	Recommend better wording
________________________________________
11. Voice Input
Support speech-to-text prompt creation.
Users can dictate prompts instead of typing.
________________________________________
12. Image-Based Prompt Builder
Allow users to upload an image and automatically generate prompts for AI image generation or analysis.
________________________________________
13. Multi-Language Support
Support multiple languages, including:
•	English
•	Urdu
•	Arabic
•	French
•	Spanish
•	German
________________________________________
14. Offline Draft Mode
Allow users to create prompts offline and synchronize them once an internet connection is available.
________________________________________
15. AI Usage Reports
Generate reports showing:
•	AI requests
•	Token usage
•	Prompt quality trends
•	Daily activity
•	Productivity statistics
________________________________________
11.2 Project Limitations
The current version has the following limitations:
•	No user authentication.
•	Internet connection required for AI features.
•	AI responses depend on Groq API availability.
•	Prompt history is limited to saved documents.
•	No collaborative editing.
•	No offline synchronization.
These limitations are acceptable for Version 1.0 and can be addressed in future releases.
________________________________________
11.3 Project Benefits
FieryPrompts AI offers several advantages:
•	Simplifies prompt engineering.
•	Saves time through reusable templates.
•	Improves prompt quality using AI.
•	Stores prompts securely in the cloud.
•	Provides a modern and responsive interface.
•	Encourages best practices in AI prompt design.
•	Suitable for developers, students, businesses, marketers, and content creators.
________________________________________
11.4 Conclusion
FieryPrompts AI is an AI-powered Prompt Engineering Platform designed to help users create, optimize, manage, and reuse high-quality prompts efficiently.
The application combines a modern Next.js frontend, secure API routes, Firebase Firestore, and Groq AI to deliver an intuitive, scalable, and production-ready solution.
By following a modular architecture, reusable component design, and cloud-based infrastructure, the project meets both the internship objectives and industry-standard software engineering practices.
The platform not only fulfills the current functional requirements but also provides a strong foundation for future enhancements such as authentication, collaboration, analytics, and multi-model AI support.
Overall, FieryPrompts AI demonstrates practical implementation of modern web technologies, AI integration, prompt engineering concepts, and cloud services in a real-world application.
________________________________________
11.5 References
The following technologies and resources were used during the design and development of the project:
•	Next.js Documentation
•	React Documentation
•	TypeScript Documentation
•	Tailwind CSS Documentation
•	Firebase Documentation
•	Groq API Documentation
•	Llama 3.3 Model Documentation
•	shadcn/ui Documentation
•	Framer Motion Documentation
•	React Hook Form Documentation
•	Zod Documentation
•	Vercel Documentation
•	Git Documentation
•	GitHub Documentation
________________________________________
11.6 Appendix
Appendix A — Abbreviations
Abbreviation	Meaning
AI	Artificial Intelligence
API	Application Programming Interface
CRUD	Create, Read, Update, Delete
UI	User Interface
UX	User Experience
SaaS	Software as a Service
SRS	Software Requirements Specification
JSON	JavaScript Object Notation
HTTPS	HyperText Transfer Protocol Secure
________________________________________
Appendix B — Supported Browsers
•	Google Chrome
•	Microsoft Edge
•	Mozilla Firefox
•	Safari
________________________________________
Appendix C — Deployment Platform
•	Vercel (Frontend & API Routes)
•	Firebase Firestore (Database)
•	Groq API (AI Services)
________________________________________
Appendix D — Development Environment
•	Visual Studio Code
•	Git
•	GitHub
•	Node.js
•	npm
•	Firebase Console
•	Groq Console
________________________________________

