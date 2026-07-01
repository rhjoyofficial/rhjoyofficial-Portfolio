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
        <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-border bg-surface/30 p-10 text-center">
          <p className="font-mono text-sm text-muted">
            Client testimonials coming soon — currently taking on new projects.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
