import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/layout/Container";
import { siteConfig, footerLinks } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      <Container>
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed max-w-[220px]">
              Over a decade of boiler maintenance and services (1–10 Ton).
              Round-the-clock contract operations with ESI, PF &amp; statutory
              benefits for our workforce.
            </p>
            <div className="text-xs text-white/50 space-y-0.5">
              <p>GSTIN: {siteConfig.gstin}</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={15} className="shrink-0 mt-0.5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} className="shrink-0 mt-0.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={15} className="shrink-0 mt-0.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin size={15} className="shrink-0 mt-0.5" />
                  <span>Hyderabad &amp; Vishakhapatnam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {year} Sri Lakshmi Balaji Boiler Contractor. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
