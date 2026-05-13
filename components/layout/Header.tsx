"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/layout/Container";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-border/60 shadow-header"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Logo variant={scrolled ? "dark" : "light"} />

            {/* Desktop nav */}
            <nav
              className={cn(
                "hidden md:flex items-center gap-1 rounded-full px-2 py-1 transition-colors duration-500",
                scrolled ? "bg-background-muted/60" : "bg-white/70 backdrop-blur-md border border-border/60"
              )}
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-primary bg-white shadow-sm"
                        : "text-text-muted hover:text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className={cn(
                  "hidden lg:flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors",
                  scrolled
                    ? "text-text-muted hover:text-primary hover:bg-background-muted"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                <Phone size={14} />
                <span>{siteConfig.phone}</span>
              </a>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 group/cta">
                Get a Quote
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                scrolled
                  ? "text-text hover:bg-background-muted"
                  : "text-text bg-white/70 backdrop-blur-md border border-border/60"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary-900/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              key="drawer"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 w-[300px] bg-white shadow-2xl flex flex-col md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full text-text hover:bg-background-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/8 text-primary font-semibold"
                          : "text-text hover:bg-background-muted"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="px-4 py-5 border-t border-border space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-text-muted px-4 py-2"
                >
                  <Phone size={15} />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center text-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
