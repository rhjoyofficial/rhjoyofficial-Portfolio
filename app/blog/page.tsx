import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/BlogCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, AI automation, Laravel, React, and building software businesses — by Rakibul Hasan Joy.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.08}>
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
    </div>
  );
}
