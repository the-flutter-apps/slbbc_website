import Link from "next/link";
import { Facebook, LogIn, Mail, MapPin, MessageCircle, Phone, Smartphone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { footerLinks, siteConfig } from "@/content/site";

const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/**
 * Who we are, where we are, how to reach us. Every contact route is here,
 * because a plant head reading this far has decided to call and should not
 * have to scroll back up to find how.
 */
export function Footer() {
  const { hyderabad, vizag } = siteConfig.addresses;
  const quick = [
    { icon: Phone, href: tel, label: `Call ${siteConfig.phone}` },
    { icon: MessageCircle, href: siteConfig.social.whatsapp, label: "WhatsApp us", external: true },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: `Email ${siteConfig.email}` },
    { icon: Facebook, href: siteConfig.social.facebook, label: "SLBBC on Facebook", external: true },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Boiler operation, maintenance and IBR-certified manpower for pharmaceutical and process plants in
              Hyderabad and Vishakhapatnam.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              GSTIN <span className="tabular text-slate-300">{siteConfig.gstin}</span>
            </p>
            <div className="mt-5 flex gap-3">
              {quick.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-lg bg-white/5 p-2 text-slate-300 transition-all duration-300 hover:-translate-y-[3px] hover:bg-brand-500/20 hover:text-white"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            {footerLinks.services.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {footerLinks.company.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact us">
            <a href={tel} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-brand-400">
              <Phone size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-brand-400"
            >
              <Mail size={16} className="shrink-0 text-brand-400" aria-hidden="true" />
              {siteConfig.email}
            </a>
            {[hyderabad, vizag].map((a) => (
              <address key={a.label} className="flex gap-3 text-sm not-italic leading-relaxed text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-slate-300">{a.label}</span>
                  {a.line1}, {a.line2}
                </span>
              </address>
            ))}
            <p className="text-xs text-slate-500">{siteConfig.officeHours}</p>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-400">
              Terms of Service
            </Link>
            <Link href="/app" className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-400">
              <Smartphone size={14} aria-hidden="true" /> Staff app
            </Link>
            <a
              href="https://payroll.slbbc.in"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-400"
            >
              <LogIn size={14} aria-hidden="true" /> Staff login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-white">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-sm text-slate-400 transition-colors hover:text-brand-400">
      {children}
    </Link>
  );
}
