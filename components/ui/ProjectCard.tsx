import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-violet-500/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="font-mono text-4xl font-bold text-primary/30">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg"
          >
            View Project →
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1.5 flex-1 text-sm text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary-hover"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repo"
              className="flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
