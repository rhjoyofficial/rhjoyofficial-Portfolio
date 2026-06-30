import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

const BASE = "https://rakibulhasanjoy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/projects`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/uses`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...projectRoutes];
}
