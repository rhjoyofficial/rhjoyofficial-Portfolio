import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All Projects
        </Link>

        <div className="mt-4 flex h-64 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-violet-500/10">
          <span className="font-mono text-6xl font-bold text-primary/30">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
            <p className="mt-2 text-lg text-muted">{project.description}</p>
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                <FaGithub size={14} /> GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-slate dark:prose-invert mt-8 max-w-none">
          <p>{project.longDescription}</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
