"use client";

import {
  SiDocker,
  SiGit,
  SiHtml5,
  SiLaravel,
  SiMysql,
  SiN8N,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVuedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Bot } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  SiLaravel,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiDocker,
  SiN8N,
  SiAnthropic: Bot,
  SiPostman,
  SiVisualstudiocode: VscVscode,
  SiUbuntu,
};

interface SkillIconProps {
  iconKey: string;
  name: string;
}

export function SkillIcon({ iconKey, name }: SkillIconProps) {
  const Icon = ICON_MAP[iconKey] ?? Bot;
  return (
    <div className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface/50 p-4 transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:bg-surface">
      <Icon size={28} className="text-foreground/70 transition-colors group-hover:text-primary" />
      <span className="text-center font-mono text-xs text-muted transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}
