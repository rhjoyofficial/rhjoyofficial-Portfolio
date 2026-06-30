"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="text-center">
          <p className="font-mono text-sm text-primary">Got questions?</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border overflow-hidden">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-surface/40">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface"
                aria-expanded={open === i}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-muted">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
