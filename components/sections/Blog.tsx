import Link from "next/link";
import { BlogCard } from "@/components/ui/BlogCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/lib/blog";

export function Blog() {
  const posts = getAllPosts().slice(0, 3);

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
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <BlogCard
                post={{
                  slug: post.slug,
                  title: post.title,
                  category: post.category,
                  readTime: post.readTime,
                  date: new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  }),
                  excerpt: post.description,
                }}
              />
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
