import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" "),
    description: "Blog post by Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All Articles
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 text-muted">
          This article is coming soon. Subscribe via email or follow on social media to get
          notified when it&apos;s published.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Get in touch instead →
        </Link>
      </AnimatedSection>
    </div>
  );
}
