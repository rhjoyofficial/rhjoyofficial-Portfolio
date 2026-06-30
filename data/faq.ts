export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where are you located and do you work with international clients?",
    answer:
      "I'm based in Bangladesh (UTC+6) and work with clients globally. I've delivered projects for clients across North America, Europe, and the Middle East. Time zone differences are manageable with async communication and scheduled calls.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack is Laravel (PHP) for backend, React and Next.js for frontend, and TypeScript throughout. On the AI side I work with the Claude API and n8n for automation. I also use MySQL, Tailwind CSS, and deploy on Vercel and VPS (Ubuntu).",
  },
  {
    question: "How much do you charge for a web application project?",
    answer:
      "Project pricing depends on scope, complexity, and timeline. Simple web apps typically start around $500–$1,500. Full-stack SaaS products with AI features range from $2,000–$8,000+. I provide a detailed quote after a discovery call — no surprises.",
  },
  {
    question: "How long does it take to build a web app?",
    answer:
      "A standard web application takes 3–6 weeks from kickoff to delivery. Simple sites or landing pages can be done in 1–2 weeks. Larger SaaS products with AI features typically take 6–12 weeks. I share a delivery timeline in writing before starting.",
  },
  {
    question: "Do you work on existing projects or only new ones?",
    answer:
      "Both. I frequently take over existing Laravel or React codebases — adding features, fixing bugs, or refactoring architecture. I'll review the existing code first and give you an honest assessment of effort before committing.",
  },
  {
    question: "What is AI automation and how can it help my business?",
    answer:
      "AI automation means connecting your business processes to AI tools so repetitive work happens automatically. For example: auto-generating quotes, classifying support tickets, summarizing reports, or triggering workflows based on emails. It saves hours per week and reduces human error.",
  },
  {
    question: "How do I hire you?",
    answer:
      "Send me a message via the contact form or email endbrackets.rhjoy@gmail.com with a short description of your project. I'll reply within 24 hours to schedule a free discovery call. If we're a good fit, I'll send a proposal and we start.",
  },
  {
    question: "Do you offer ongoing maintenance after delivery?",
    answer:
      "Yes. I offer monthly maintenance retainers that cover bug fixes, security updates, dependency upgrades, and minor feature additions. I also stay available after delivery for a 30-day post-launch window at no extra charge.",
  },
];
