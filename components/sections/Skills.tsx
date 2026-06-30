"use client";

import { useState } from "react";
import { LANGUAGES_FRAMEWORKS, TOOLS_PLATFORMS } from "@/data/skills";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const TABS = [
  { id: "languages", label: "Languages & Frameworks", data: LANGUAGES_FRAMEWORKS },
  { id: "tools", label: "Tools & Platforms", data: TOOLS_PLATFORMS },
] as const;

export function Skills() {
  const [activeTab, setActiveTab] = useState<"languages" | "tools">("languages");

  const activeSkills = activeTab === "languages" ? LANGUAGES_FRAMEWORKS : TOOLS_PLATFORMS;

  return (
    <section className="border-t border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-mono text-sm text-primary">My toolkit</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Skills &amp; Tech Stack
            </h2>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "border border-border text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {activeSkills.map((skill) => (
              <SkillIcon key={skill.name} iconKey={skill.icon} name={skill.name} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
