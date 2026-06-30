import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center">
          <p className="font-mono text-sm text-primary">Kind words</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Testimonials</h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-border bg-surface/30 p-6">
            <p className="text-sm italic text-muted">
              &ldquo;Rakibul delivered the Laravel backend two days ahead of schedule and the code
              quality was excellent — well-documented, easy to extend. Will hire again.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                J
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">James R.</p>
                <p className="text-xs text-muted">SaaS Founder, USA</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-dashed border-border bg-surface/30 p-6 text-center">
            <p className="font-mono text-sm text-muted">More testimonials coming soon.</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
