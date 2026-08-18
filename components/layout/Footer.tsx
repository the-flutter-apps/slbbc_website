import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, LogIn } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/layout/Container";
import { siteConfig, footerLinks } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative isolate overflow-hidden bg-primary-900 text-white"
      aria-label="Site footer"
    >
      {/* Subtle grid + glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 -top-32 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-accent/15 blur-3xl"
      />

      <Container>
        {/* Top CTA strip */}
        <div className="py-10 border-b border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-eyebrow uppercase text-accent-light">Talk to us</p>
            <h2 className="font-display text-2xl md:text-3xl text-white mt-2 tracking-tight">
              Industrial-grade boiler partners — on call 24/7.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow-accent hover:bg-accent-dark transition-all"
            >
              Get a Quote
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand */}
          <div className="space-y-5 lg:col-span-4">
            <Logo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
              Over a decade of boiler maintenance and services (1–10 Ton).
              Round-the-clock contract operations with ESI, PF &amp; statutory
              benefits for our workforce.
            </p>
            <div className="text-xs text-white/50 space-y-1">
              <p>GSTIN: {siteConfig.gstin}</p>
              <p>Founded {siteConfig.foundingYear}</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow uppercase text-white/55 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 sm:py-1 text-sm text-white/80 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow uppercase text-white/55 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 sm:py-1 text-sm text-white/80 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-eyebrow uppercase text-white/55 mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 py-1.5 sm:py-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={15} className="shrink-0 mt-0.5 text-accent-light" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 py-1.5 sm:py-1 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} className="shrink-0 mt-0.5 text-accent-light" />
                  <span>WhatsApp chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 py-1.5 sm:py-1 text-sm text-white/80 hover:text-white transition-colors break-all"
                >
                  <Mail size={15} className="shrink-0 mt-0.5 text-accent-light" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-accent-light" />
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold text-white">
                        {siteConfig.addresses.hyderabad.label}
                      </p>
                      <p className="text-white/65">
                        {siteConfig.addresses.hyderabad.line1},{" "}
                        {siteConfig.addresses.hyderabad.line2}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {siteConfig.addresses.vizag.label}
                      </p>
                      <p className="text-white/65">
                        {siteConfig.addresses.vizag.line1},{" "}
                        {siteConfig.addresses.vizag.line2}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55 text-center sm:text-left">
            &copy; {year} Sri Lakshmi Balaji Boiler Contractor. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="py-1.5 text-xs text-white/55 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="py-1.5 text-xs text-white/55 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://payroll.slbbc.in"
              className="inline-flex items-center gap-1.5 py-1.5 text-xs text-white/55 hover:text-white transition-colors"
            >
              <LogIn size={13} />
              Staff Login
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
