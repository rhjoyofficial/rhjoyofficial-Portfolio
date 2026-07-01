"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  size?: number;
  className?: string;
  priority?: boolean;
}

export function ProfilePhoto({ size = 224, className = "", priority = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-border bg-linear-to-br from-primary/20 to-violet-500/20 font-mono font-bold text-primary ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.22) }}
      >
        RJ
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/photo.jpg"
        alt="Rakibul Hasan Joy"
        fill
        sizes={`${size}px`}
        className="object-cover object-top"
        onError={() => setFailed(true)}
        priority={priority}
      />
    </div>
  );
}
