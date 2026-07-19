export interface PromptTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  tone: string;
  audience: string;
  outputFormat: string;
  tags: string[];
}

export const TEMPLATES: PromptTemplate[] = [
  { id: "react-feature", name: "React Feature", category: "Software Development", description: "Plan a focused React feature with clear implementation requirements.", role: "Senior React Developer", tone: "Technical", audience: "Developers", outputFormat: "Markdown", tags: ["react", "typescript", "frontend"] },
  { id: "article-outline", name: "Article Outline", category: "Content Writing", description: "Turn a topic into a useful, well-structured long-form outline.", role: "Content Strategist", tone: "Professional", audience: "General Audience", outputFormat: "Markdown", tags: ["writing", "blog", "outline"] },
  { id: "business-proposal", name: "Business Proposal", category: "Business", description: "Create a concise proposal tailored to a professional audience.", role: "Business Consultant", tone: "Persuasive", audience: "Business Professionals", outputFormat: "Report", tags: ["business", "proposal", "strategy"] },
  { id: "ai-explainer", name: "AI Concept Explainer", category: "Artificial Intelligence", description: "Explain an AI concept accurately for a selected audience.", role: "AI Educator", tone: "Educational", audience: "Students", outputFormat: "Markdown", tags: ["ai", "education", "explain"] },
  { id: "nextjs-page", name: "Next.js Page", category: "Web Development", description: "Plan an accessible, responsive Next.js page.", role: "Next.js Developer", tone: "Technical", audience: "Developers", outputFormat: "Code", tags: ["nextjs", "web", "typescript"] },
  { id: "mobile-screen", name: "Mobile App Screen", category: "Mobile Development", description: "Specify a polished mobile screen and interaction flow.", role: "Mobile Product Designer", tone: "Professional", audience: "Designers", outputFormat: "Markdown", tags: ["mobile", "ux", "app"] },
  { id: "saas-ui", name: "SaaS UI Brief", category: "UI/UX Design", description: "Create a responsive SaaS interface design brief.", role: "Senior UX Designer", tone: "Creative", audience: "Designers", outputFormat: "Markdown", tags: ["ui", "ux", "saas"] },
  { id: "data-analysis", name: "Data Analysis Plan", category: "Data Science", description: "Outline a reproducible data-analysis approach.", role: "Data Scientist", tone: "Analytical", audience: "Researchers", outputFormat: "Report", tags: ["data", "analysis", "research"] },
  { id: "security-review", name: "Security Review", category: "Cybersecurity", description: "Review an application for practical security risks.", role: "Application Security Engineer", tone: "Technical", audience: "Developers", outputFormat: "Checklist", tags: ["security", "owasp", "audit"] },
  { id: "cicd-pipeline", name: "CI/CD Pipeline", category: "DevOps", description: "Design a reliable deployment pipeline.", role: "DevOps Engineer", tone: "Technical", audience: "Software Engineers", outputFormat: "Documentation", tags: ["devops", "cicd", "deployment"] },
  { id: "marketing-campaign", name: "Marketing Campaign", category: "Marketing", description: "Build a focused campaign with persuasive messaging.", role: "Growth Marketer", tone: "Persuasive", audience: "Marketing Teams", outputFormat: "Report", tags: ["marketing", "campaign", "copy"] },
  { id: "lesson-plan", name: "Lesson Plan", category: "Education", description: "Create an engaging lesson plan with measurable outcomes.", role: "Educator", tone: "Educational", audience: "Teachers", outputFormat: "Step-by-Step Guide", tags: ["education", "lesson", "teaching"] },
  { id: "resume-review", name: "Resume Review", category: "Resume & Career", description: "Improve a resume for clarity and ATS alignment.", role: "Career Coach", tone: "Professional", audience: "General Audience", outputFormat: "Checklist", tags: ["resume", "career", "ats"] },
  { id: "client-email", name: "Client Email", category: "Email Writing", description: "Draft a polished, concise professional email.", role: "Communications Specialist", tone: "Professional", audience: "Business Professionals", outputFormat: "Plain Text", tags: ["email", "client", "communication"] },
  { id: "linkedin-post", name: "LinkedIn Post", category: "Social Media", description: "Write a useful and authentic LinkedIn post.", role: "Social Media Strategist", tone: "Confident", audience: "Business Professionals", outputFormat: "Markdown", tags: ["social", "linkedin", "content"] },
  { id: "research-proposal", name: "Research Proposal", category: "Research", description: "Structure a credible research proposal.", role: "Research Methodologist", tone: "Formal", audience: "Researchers", outputFormat: "Report", tags: ["research", "proposal", "methodology"] },
  { id: "api-docs", name: "API Documentation", category: "Documentation", description: "Document an API clearly for its users.", role: "Technical Writer", tone: "Technical", audience: "Developers", outputFormat: "Markdown", tags: ["api", "docs", "technical-writing"] },
  { id: "support-reply", name: "Support Reply", category: "Customer Support", description: "Write a helpful customer-support response.", role: "Customer Support Specialist", tone: "Friendly", audience: "Customer Support Teams", outputFormat: "Plain Text", tags: ["support", "customer", "reply"] },
  { id: "product-description", name: "Product Description", category: "E-commerce", description: "Create a clear, conversion-focused product description.", role: "E-commerce Copywriter", tone: "Persuasive", audience: "General Audience", outputFormat: "Markdown", tags: ["ecommerce", "product", "seo"] },
  { id: "general-purpose", name: "General Purpose", category: "General Purpose", description: "Start from a flexible structure for any task.", role: "Prompt Engineer", tone: "Professional", audience: "General Audience", outputFormat: "Markdown", tags: ["general", "flexible", "prompt"] },
];
