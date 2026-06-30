import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
