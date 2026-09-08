export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges?: string;
  learned?: string;
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "project" | "education";
}

export interface Service {
  title: string;
  description: string;
  icon: "flutter" | "mobile" | "web" | "ui" | "database" | "api" | "bug";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "telegram" | "whatsapp" | "email";
}
