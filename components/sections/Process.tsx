import { AnimatedSection } from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk about your project, goals, and timeline. I ask the right questions.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I map out the architecture, scope, and delivery schedule before writing a single line.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean, well-structured code. Regular updates. No disappearing acts.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Tested, deployed, documented. I stay available post-launch.",
  },
];

export function Process() {
  return (
    <section className="border-t border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-mono text-sm text-primary">How it works</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              How I Work
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 top-8 hidden h-px w-full bg-border lg:block" />

          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-lg font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
