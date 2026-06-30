export interface Skill {
  name: string;
  icon: string;
}

export const LANGUAGES_FRAMEWORKS: Skill[] = [
  { name: "PHP / Laravel", icon: "SiLaravel" },
  { name: "JavaScript / TypeScript", icon: "SiTypescript" },
  { name: "React / Next.js", icon: "SiReact" },
  { name: "Vue / Nuxt", icon: "SiVuedotjs" },
  { name: "HTML / CSS", icon: "SiHtml5" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
];

export const TOOLS_PLATFORMS: Skill[] = [
  { name: "MySQL", icon: "SiMysql" },
  { name: "Git / GitHub", icon: "SiGit" },
  { name: "Docker", icon: "SiDocker" },
  { name: "n8n", icon: "SiN8N" },
  { name: "Claude API", icon: "SiAnthropic" },
  { name: "Postman", icon: "SiPostman" },
  { name: "VS Code", icon: "SiVisualstudiocode" },
  { name: "Linux / Ubuntu", icon: "SiUbuntu" },
];
