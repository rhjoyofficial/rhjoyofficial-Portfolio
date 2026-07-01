"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

type CursorState = "default" | "link" | "image" | "button";

const RING_CONFIG: Record<CursorState, { size: number; color: string; bg: string; label?: string }> = {
  default: { size: 36,  color: "#6366f1", bg: "transparent" },
  link:    { size: 54,  color: "#6366f1", bg: "rgba(99,102,241,0.10)" },
  button:  { size: 54,  color: "#6366f1", bg: "rgba(99,102,241,0.15)" },
  image:   { size: 72,  color: "#22c55e", bg: "rgba(34,197,94,0.10)", label: "View" },
};

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const isTouch = useRef(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  // Ring lags slightly behind — gives the "trailing" feel
  const rx = useSpring(mx, { stiffness: 130, damping: 18, mass: 0.08 });
  const ry = useSpring(my, { stiffness: 130, damping: 18, mass: 0.08 });

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouch.current = true;
      return;
    }

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);

      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], img, [data-cursor]"
      ) as HTMLElement | null;

      if (!el) {
        setState("default");
        return;
      }
      if (el.tagName === "IMG") {
        setState("image");
      } else if (el.tagName === "BUTTON" || el.getAttribute("role") === "button") {
        setState("button");
      } else if (el.tagName === "A") {
        setState("link");
      } else {
        const custom = el.dataset.cursor as CursorState | undefined;
        setState(custom ?? "default");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mx, my, visible]);

  if (isTouch.current) return null;

  const cfg = RING_CONFIG[state];

  return (
    <>
      {/* Outer ring — springs behind the dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          border: `1.5px solid ${cfg.color}`,
          backgroundColor: cfg.bg,
          willChange: "transform",
        }}
        animate={{ width: cfg.size, height: cfg.size }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        <AnimatePresence mode="wait">
          {cfg.label && (
            <motion.span
              key={cfg.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              style={{ color: cfg.color, fontSize: 10, fontWeight: 700, letterSpacing: "0.05em" }}
            >
              {cfg.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot — follows instantly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-primary"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          // Hide dot when ring is large (it's inside the ring)
          opacity: visible && state === "default" ? 1 : 0,
          willChange: "transform",
        }}
        transition={{ duration: 0 }}
      />
    </>
  );
}
