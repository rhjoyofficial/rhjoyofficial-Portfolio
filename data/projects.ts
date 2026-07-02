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
    image: "/projects/invoiceai-cover.png",
    featured: true,
  },
  {
    slug: "laladia",
    title: "LaLaDia",
    description: "Brand website for LaLaDia, a Bor De Guna food company.",
    longDescription:
      "A customer-facing brand and product website built for LaLaDia, one of Bor De Guna's food-sector companies. Covers the product catalog, brand story, and inquiry flow with a clean, mobile-first experience.",
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    liveUrl: "https://laladia.com",
    featured: true,
  },
  {
    slug: "bionic",
    title: "Bionic",
    description: "Brand website for Bionic, a Bor De Guna food & garden company.",
    longDescription:
      "Website built for Bionic, a Bor De Guna company spanning food and garden products. Handles the storefront presentation, product information, and lead capture for the brand.",
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    liveUrl: "https://bionic.garden",
    featured: true,
  },
  {
    slug: "end-brackets",
    title: "End Brackets",
    description: "Brand site for End Brackets, my own software studio.",
    longDescription:
      "The brand and marketing site for End Brackets, the software studio I co-founded — covering services (web & software development, AI automation, digital marketing) and acting as the front door for client work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://endbrackets.com",
    featured: true,
  },
  {
    slug: "azmion",
    title: "Azmion",
    description: "Brand website for Azmion, Bor De Guna's tech company.",
    longDescription:
      "Website built for Azmion, the technology arm of Bor De Guna. Presents the company's tech offerings and serves as its primary online presence.",
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    liveUrl: "https://theazmion.com",
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
    image: "/projects/tycoonbd-cover.png",
    featured: true,
  },
];
