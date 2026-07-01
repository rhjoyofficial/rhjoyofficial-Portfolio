import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full story of Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer from Bangladesh. How I got here, what drives me, and how I work.",
};

const TIMELINE = [
  {
    year: "2021",
    title: "Started web development",
    description: "Learned HTML, CSS, JavaScript, and PHP. Built first client sites on freelance platforms.",
  },
  {
    year: "2022",
    title: "Moved to Laravel + React",
    description:
      "Adopted Laravel as my primary backend framework and React for frontend. Delivered first full-stack SaaS features.",
  },
  {
    year: "2023",
    title: "Expanded into Next.js + TypeScript",
    description:
      "Rebuilt projects with type-safe code and server-side rendering. Started achieving strong SEO scores for client sites.",
  },
  {
    year: "2024",
    title: "Integrated AI tools",
    description:
      "Added Claude API and n8n to my stack. Built the first AI proposal generator and automated client onboarding workflows.",
  },
  {
    year: "2026",
    title: "Full Stack + AI Automation Engineer",
    description:
      "Now helping businesses build web applications and automate their operations. Available for remote projects globally.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary">The full story</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">About Me</h1>
      </AnimatedSection>

      <div className="mt-12 grid gap-12 lg:grid-cols-[200px_1fr] lg:items-start">
        <AnimatedSection delay={0.1}>
          <ProfilePhoto size={192} className="mx-auto lg:mx-0" priority />
          <div className="mt-6 flex justify-center gap-3 lg:justify-start">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-foreground">
              I&apos;m <strong>Rakibul Hasan Joy</strong> — a Full Stack Developer and AI Automation
              Engineer based in Bangladesh. Over the past 3+ years I&apos;ve helped startups, agencies,
              and business owners turn ideas into production software.
            </p>
            <p className="mt-4 text-muted">
              My background is in Laravel and React, and more recently I&apos;ve been building AI-powered
              features using the Claude API and workflow automations with n8n. I care about clean
              architecture, honest timelines, and shipping work that actually solves the problem.
            </p>
            <p className="mt-4 text-muted">
              I work remotely with clients across North America, Europe, and Asia — async communication
              is second nature to me. I reply fast, document my work, and stay available after
              delivery.
            </p>
            <p className="mt-4 text-muted">
              Outside of client work I run <strong>End Brackets</strong>, a small software studio
              where I build SaaS products and write about development, AI, and building on the web.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Work With Me
            </Link>
            <Link
              href="/uses"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Tools I Use →
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mt-20" delay={0.2}>
        <h2 className="text-2xl font-bold text-foreground">Timeline</h2>
        <div className="relative mt-8 space-y-8 border-l border-border pl-8">
          {TIMELINE.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-[10px] font-bold text-primary">
                ●
              </span>
              <p className="font-mono text-xs text-primary">{item.year}</p>
              <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
