import { Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";

const STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Tech Domains (Web, AI, Automation)" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <AnimatedSection>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-bold text-primary sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
          <div className="text-center">
            <div className="flex justify-center text-primary">
              <Globe size={32} />
            </div>
            <p className="mt-2 text-sm text-muted">Available Worldwide</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
