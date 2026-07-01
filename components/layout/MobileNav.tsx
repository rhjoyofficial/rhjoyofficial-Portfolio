"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on route change / resize
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 z-50 border-b border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 border-t border-border pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Hire Me
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
