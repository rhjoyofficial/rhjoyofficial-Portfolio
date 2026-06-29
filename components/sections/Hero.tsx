import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TerminalCodeBlock } from "@/components/ui/TerminalCodeBlock";
import { SOCIAL_LINKS } from "@/lib/social-links";

export function Hero() {
  return (
    <section className="bg-dot-grid relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Available for Work ✓
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hi, I’m Rakibul Hasan Joy
          </h1>

          <p className="mt-3 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            Full Stack Developer &amp; AI Automation Engineer
          </p>

          <p className="mt-5 max-w-lg text-lg text-muted">
            I build web apps and AI systems that make businesses run faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Let’s Talk
            </Link>
          </div>

          <div className="mt-8 flex gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <TerminalCodeBlock />
        </AnimatedSection>
      </div>
    </section>
  );
}
