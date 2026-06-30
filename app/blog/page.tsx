import type { Metadata } from "next";
import { BlogCard, type BlogPost } from "@/components/ui/BlogCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, AI automation, Laravel, React, and building software businesses — by Rakibul Hasan Joy.",
};

const ALL_POSTS: BlogPost[] = [
  {
    slug: "ai-proposal-generator-laravel-claude-api",
    title: "How I Built an AI Proposal Generator with Laravel and Claude API",
    category: "Tutorial",
    readTime: "8 min read",
    date: "Jun 2026",
    excerpt:
      "A step-by-step walkthrough of building a production-ready AI proposal generator — from prompt engineering to streaming responses in a Laravel + React app.",
  },
  {
    slug: "n8n-vs-zapier-2026",
    title: "n8n vs Zapier: Which Automation Tool Should Your Business Use in 2026?",
    category: "Automation",
    readTime: "6 min read",
    date: "Jun 2026",
    excerpt:
      "An honest comparison of n8n and Zapier across pricing, flexibility, self-hosting, and real-world automation use cases — with a clear recommendation.",
  },
  {
    slug: "full-stack-laravel-react-process",
    title: "Full Stack Laravel + React: My Development Process Explained",
    category: "Development",
    readTime: "5 min read",
    date: "May 2026",
    excerpt:
      "How I structure, build, and ship Laravel + React projects — from API design to state management to deployment.",
  },
  {
    slug: "what-is-ai-automation",
    title: "What is AI Automation and Why Every Small Business Needs It",
    category: "AI",
    readTime: "4 min read",
    date: "May 2026",
    excerpt:
      "A plain-English guide to AI automation — what it is, what it isn't, and three real workflows that save small businesses hours every week.",
  },
  {
    slug: "how-to-hire-laravel-developer",
    title: "How to Hire a Laravel Developer: What to Look For",
    category: "Hiring",
    readTime: "5 min read",
    date: "Apr 2026",
    excerpt:
      "What separates a good Laravel developer from a great one — and the questions you should ask before signing a contract.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary">Writing</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-xl text-muted">
          Articles on web development, AI automation, and building software businesses.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ALL_POSTS.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.08}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
