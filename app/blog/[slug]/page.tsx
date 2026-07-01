import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { articleSchema } from "@/lib/schemas";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};
  return {
    title: result.meta.title,
    description: result.meta.description,
    openGraph: {
      title: result.meta.title,
      description: result.meta.description,
      type: "article",
      publishedTime: result.meta.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);

  if (!result || !result.meta.published) notFound();

  const { meta, content } = result;

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(meta)) }}
      />
      <AnimatedSection>
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All Articles
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            {meta.category}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {meta.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span>{formatDate(meta.date)}</span>
          <span>·</span>
          <span>{meta.readTime}</span>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground prose-code:font-mono prose-code:text-green prose-code:bg-surface prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-muted">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-16 border-t border-border pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Rakibul Hasan Joy</p>
            <p className="text-sm text-muted">Full Stack Developer & AI Automation Engineer</p>
          </div>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Work With Me →
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
