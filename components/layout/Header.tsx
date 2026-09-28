"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { navLinks, siteConfig } from "@/content/site";

const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/**
 * A letterhead, not a hero overlay. White on every page and at every scroll
 * position, so it never has to change colour — which is what made the logo
 * unreadable in the previous design.
 *
 * The thin strip above it carries what a procurement reader checks first: the
 * GSTIN, both offices and the email. Desktop only; on a phone the number is
 * the thing, and it is in the bar.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="hidden border-b border-border bg-background-muted lg:block">
        <div className="container-main flex h-8 items-center justify-between font-mono text-[11px] tracking-[0.06em] text-text-muted">
          <span>
            GSTIN <span className="text-text">{siteConfig.gstin}</span>
          </span>
          <span className="flex items-center gap-5">
            <span>Hyderabad · Vishakhapatnam</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
              {siteConfig.email}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="container-main flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Logo />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive(link.href) ? "text-primary" : "text-text-muted hover:text-primary"
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute inset-x-3.5 -bottom-[17px] h-0.5 bg-accent" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={tel} className="inline-flex items-center gap-2 font-mono text-[13px] text-primary hover:text-accent">
              <Phone size={14} aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-primary py-2.5">
              Request a site survey
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={tel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone size={19} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile navigation" className="container-main py-4">
            <ul className="divide-y divide-border border-b border-border">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-2xl font-bold",
                      isActive(link.href) ? "text-accent" : "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <Link href="/contact" className="btn-primary w-full">
                Request a site survey
              </Link>
              <a href={tel} className="btn-secondary w-full">
                <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] tracking-[0.06em] text-text-muted">
              GSTIN {siteConfig.gstin} · {siteConfig.email}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
