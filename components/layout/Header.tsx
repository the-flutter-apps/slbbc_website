"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/content/site";

const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/**
 * Fixed to the top. Clear over the page at rest; once the page scrolls it
 * frosts to white with a soft blue shadow. It slides down into place on load,
 * and the short bar under the current page glides between links.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 animate-slide-down transition-all duration-500",
        solid ? "bg-white/90 shadow-lg shadow-brand-100/50 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-main flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative block px-4 py-2"
                  >
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        active ? "text-brand-700" : "text-slate-600 group-hover:text-brand-700"
                      )}
                    >
                      {link.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        aria-hidden="true"
                        className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={tel}
            className="hidden items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700 xl:inline-flex"
          >
            <Phone size={15} aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary px-5 py-2.5 shadow-lg">
            Contact us
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={tel}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-brand-50"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone size={20} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-brand-50"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    isActive(link.href)
                      ? "bg-gradient-to-r from-brand-600 to-brand-800 text-white"
                      : "text-slate-600 hover:bg-brand-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid gap-2 pt-3">
                <Link href="/contact" className="btn-primary w-full">
                  Contact us
                </Link>
                <a href={tel} className="btn-secondary w-full">
                  <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
