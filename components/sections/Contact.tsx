"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const PROJECT_TYPES = [
  "Web Application",
  "AI Integration / Automation",
  "SaaS Development",
  "Landing Page",
  "Consulting",
  "Other",
];

const BUDGET_RANGES = [
  "< $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Let's discuss",
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) reset();
  }

  return (
    <section className="border-t border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-mono text-sm text-primary">Ready to start?</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Available for freelance projects, full-time remote roles, and consulting.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-medium text-green">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
              Currently Available ✓
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <AnimatedSection>
            {isSubmitSuccessful ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-green/30 bg-green/10 p-10 text-center">
                <div>
                  <p className="text-2xl font-bold text-foreground">Message sent!</p>
                  <p className="mt-2 text-muted">I&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Project Type</label>
                    <select
                      {...register("projectType")}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Budget Range</label>
                    <select
                      {...register("budget")}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select range…</option>
                      {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {errors.budget && <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project…"
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:endbrackets.rhjoy@gmail.com" className="text-sm text-muted hover:text-primary">
                      endbrackets.rhjoy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Response time</p>
                    <p className="text-sm text-muted">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted">Bangladesh (UTC+6)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
