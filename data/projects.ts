export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "invoiceai",
    title: "InvoiceAI",
    description: "AI Invoice & Proposal Generator built with Laravel + React + Claude API.",
    longDescription:
      "A full-stack SaaS tool that generates professional invoices and project proposals using AI. Users describe their project scope and InvoiceAI drafts a polished proposal with line-item breakdown, pricing, and payment terms in seconds.",
    tags: ["Laravel", "React", "Claude API", "MySQL", "Stripe"],
    featured: true,
  },
  {
    slug: "tycoonbd",
    title: "tycoonbd.com",
    description: "Business platform that generated 2,500 Google clicks in its first 28 days.",
    longDescription:
      "A business discovery and directory platform for Bangladesh, built with a strong SEO foundation. Achieved 2,500 organic Google clicks within 28 days of launch through structured data, targeted keywords, and fast Core Web Vitals scores.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "SEO"],
    liveUrl: "https://tycoonbd.com",
    featured: true,
  },
];
