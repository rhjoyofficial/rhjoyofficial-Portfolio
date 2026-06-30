import { FAQ_ITEMS } from "@/data/faq";

const SITE_URL = "https://rakibulhasanjoy.com";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Rakibul Hasan Joy",
    url: SITE_URL,
    image: `${SITE_URL}/photo.jpg`,
    jobTitle: "Full Stack Developer & AI Automation Engineer",
    description:
      "Full Stack Developer and AI Automation Engineer from Bangladesh specializing in Laravel, React, and AI-powered web applications.",
    email: "endbrackets.rhjoy@gmail.com",
    nationality: "Bangladeshi",
    knowsAbout: ["Laravel", "React", "Next.js", "AI Automation", "n8n", "PHP", "TypeScript"],
    sameAs: [
      "https://github.com/rhjoyofficial",
      "https://linkedin.com/in/rhjoyofficial",
      "https://facebook.com/rhjoyofficial",
    ],
    worksFor: {
      "@type": "Organization",
      name: "End Brackets",
      url: "https://endbrackets.com",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Rakibul Hasan Joy",
    description: "Full Stack Developer & AI Automation Engineer portfolio",
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
