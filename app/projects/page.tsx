import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of web applications, SaaS products, and AI-powered tools built by Rakibul Hasan Joy.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary">What I&apos;ve shipped</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-xl text-muted">
          A collection of real projects built for real clients — web apps, SaaS tools, and
          AI-powered products.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
