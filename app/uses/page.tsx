import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Tools, software, and hardware used by Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer. Editor, backend, frontend, AI tools, DevOps, and more.",
};

const CATEGORIES = [
  {
    title: "Editor",
    items: [
      { name: "VS Code", note: "Primary editor — fast, extensible, great TypeScript support." },
      { name: "Claude Code", note: "AI coding assistant. Used daily for refactoring and code reviews." },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel 13", note: "Go-to PHP framework. Elegant APIs, great ecosystem." },
      { name: "PHP 8.3", note: "Fast, modern, well-typed enough for production apps." },
      { name: "Composer", note: "PHP dependency manager." },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React 18", note: "Component-driven UI. Works great with Laravel APIs." },
      { name: "Next.js 15", note: "Full-stack React. Used for SEO-heavy and app-heavy projects." },
      { name: "TypeScript", note: "Always. Makes large codebases maintainable." },
      { name: "Tailwind CSS", note: "Utility-first CSS. Fast to build with, easy to maintain." },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Claude API (Anthropic)", note: "Primary AI model for integrations. Best for structured outputs and long-context tasks." },
      { name: "n8n (self-hosted)", note: "Visual workflow automation. Connects everything together without heavy coding." },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", note: "Default choice for relational data. Rock-solid." },
      { name: "PostgreSQL", note: "When advanced queries or JSON fields are needed." },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Git + GitHub", note: "Version control and collaboration." },
      { name: "Vercel", note: "Deploy Next.js projects in seconds." },
      { name: "Hostinger VPS", note: "Self-hosted apps and databases." },
      { name: "Ubuntu 22.04", note: "Server OS. Nginx + PM2 for Node, Laravel Forge for PHP." },
      { name: "Docker (basic)", note: "Local dev environments and isolated services." },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma", note: "For quick wireframes and client mockups." },
      { name: "shadcn/ui", note: "Component primitives for rapid UI builds." },
    ],
  },
  {
    title: "Testing & API",
    items: [
      { name: "Postman", note: "API development and testing." },
    ],
  },
  {
    title: "Communication",
    items: [
      { name: "Slack", note: "Team and client communication." },
      { name: "Discord", note: "Dev communities and project channels." },
      { name: "Email", note: "endbrackets.rhjoy@gmail.com — preferred for async work." },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary">My toolkit</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Uses</h1>
        <p className="mt-4 max-w-xl text-muted">
          Tools, software, and services I use daily as a Full Stack Developer and AI Automation
          Engineer. Updated regularly.
        </p>
      </AnimatedSection>

      <div className="mt-12 space-y-12">
        {CATEGORIES.map((category, i) => (
          <AnimatedSection key={category.title} delay={i * 0.05}>
            <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
            <ul className="mt-4 space-y-4 border-l border-border pl-6">
              {category.items.map((item) => (
                <li key={item.name}>
                  <p className="font-mono text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
