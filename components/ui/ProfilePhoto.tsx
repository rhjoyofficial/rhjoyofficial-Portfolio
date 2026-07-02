"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  size?: number;
  className?: string;
  priority?: boolean;
}

export function ProfilePhoto({ size = 224, className = "", priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

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
    <>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label="View larger photo"
        className={`relative block cursor-zoom-in overflow-hidden rounded-2xl border border-border transition-transform duration-200 hover:scale-[1.02] ${className}`}
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
      </button>

      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setExpanded(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X size={20} />
          </button>
          <div
            className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/photo.jpg"
              alt="Rakibul Hasan Joy"
              fill
              sizes="512px"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
    </>
  );
}
