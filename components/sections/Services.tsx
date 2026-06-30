import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center">
          <p className="font-mono text-sm text-primary">What I offer</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Services</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            End-to-end development across web, AI, and SaaS — from first line of code to
            production deployment.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <ServiceCard service={service} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
