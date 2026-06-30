import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web application development, AI integration & automation, and SaaS development services by Rakibul Hasan Joy.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary">What I offer</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-xl text-muted">
          End-to-end development across web, AI, and SaaS. I handle design, code, testing, and
          deployment — you get working software.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <ServiceCard service={service} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-16 rounded-2xl border border-border bg-surface/50 p-8 text-center" delay={0.3}>
        <h2 className="text-2xl font-bold text-foreground">Ready to start?</h2>
        <p className="mt-2 text-muted">
          Tell me about your project and I&apos;ll send a quote within 24 hours.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Get a Free Quote
        </Link>
      </AnimatedSection>
    </div>
  );
}
