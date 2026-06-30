import { Bot, Code2, LayoutDashboard } from "lucide-react";
import type { ComponentType } from "react";

export interface Service {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom web apps built with Laravel + React. Clean code, fast delivery, scalable architecture.",
    tags: ["Laravel", "React", "MySQL", "REST API"],
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    description:
      "Connect your business to AI. Automate workflows using n8n, Claude API, and custom integrations.",
    tags: ["Claude API", "n8n", "Automation", "AI Agents"],
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Development",
    description:
      "Build your SaaS product from scratch — multi-tenant, billing, authentication, dashboard.",
    tags: ["SaaS", "Stripe", "Laravel", "React"],
  },
];
