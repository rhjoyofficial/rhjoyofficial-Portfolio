import Link from "next/link";
import { BlogCard, type BlogPost } from "@/components/ui/BlogCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PREVIEW_POSTS: BlogPost[] = [
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
      "How I structure, build, and ship Laravel + React projects — from API design to state management to deployment. The opinionated process I've refined over 3 years.",
  },
];

export function Blog() {
  return (
    <section className="border-t border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-sm text-primary">From the blog</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                Latest Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-primary transition-colors hover:text-primary-hover sm:block"
            >
              View All →
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_POSTS.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center sm:hidden" delay={0.3}>
          <Link
            href="/blog"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View All Articles →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
