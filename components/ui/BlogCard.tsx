import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-medium text-primary">
          {post.category}
        </span>
        <span className="text-xs text-muted">{post.readTime}</span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <time className="text-xs text-muted">{post.date}</time>
        <span className="text-xs font-medium text-primary">Read More →</span>
      </div>
    </Link>
  );
}
