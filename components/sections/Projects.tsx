import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center">
          <p className="font-mono text-sm text-primary">What I&apos;ve built</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A selection of real projects shipped for real clients and users.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}

        <AnimatedSection delay={featured.length * 0.1}>
          <div className="flex h-full min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface/30 p-6 text-center">
            <div>
              <p className="font-mono text-sm text-muted">More projects coming</p>
              <p className="mt-1 text-xs text-muted/60">Building in public →</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mt-10 text-center" delay={0.3}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          View All Projects →
        </Link>
      </AnimatedSection>
    </section>
  );
}
