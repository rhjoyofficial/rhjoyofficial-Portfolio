import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const DIFFERENTIATORS = [
  "Full stack AND automation — I don’t hand off the AI piece to someone else.",
  "Clear communication, real deadlines — no disappearing acts mid-project.",
  "Built for scale from day one — clean architecture, not just a working demo.",
];

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-violet-500/20 font-mono text-5xl font-bold text-primary lg:mx-0">
            RJ
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <p className="mt-4 max-w-2xl text-muted">
              I’m a Full Stack Developer and AI Automation Engineer based in Bangladesh, with
              3+ years building web applications for clients across the globe. My work spans
              Laravel and React on the development side, and Claude API and n8n on the
              automation side — so I don’t just build your app, I help it run itself. Whether
              you’re a startup founder, a remote team, or a local business owner, I turn what
              you need into software that actually ships.
            </p>

            <ul className="mt-6 space-y-3">
              {DIFFERENTIATORS.map((point) => (
                <li key={point} className="flex gap-3 text-foreground/90">
                  <span className="mt-1 text-green">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Read full story →
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
