import Link from "next/link";
import { LogIn, Mail, MessageCircle, Phone, Smartphone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { footerLinks, siteConfig } from "@/content/site";

const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/**
 * The back page of the file: who we are, where we are, how to reach us. Every
 * contact route is here, because a plant head reading this far has decided to
 * call and should not have to scroll back up to find how.
 */
export function Footer() {
  const { hyderabad, vizag } = siteConfig.addresses;
  return (
    <footer className="bg-primary text-white/75">
      <div className="container-main grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Boiler operation, maintenance and IBR-certified manpower for pharmaceutical and process plants in
            Hyderabad and Vishakhapatnam.
          </p>
          <p className="mt-5 font-mono text-[12px] tracking-[0.06em] text-accent-100/80">
            GSTIN {siteConfig.gstin}
          </p>
        </div>

        <FooterColumn title="Services" className="md:col-span-2">
          {footerLinks.services.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company" className="md:col-span-2">
          {footerLinks.company.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Reach us" className="md:col-span-4">
          <a href={tel} className="flex items-center gap-2.5 py-1 hover:text-white">
            <Phone size={15} className="text-accent-100" aria-hidden="true" />
            <span className="font-mono text-[13px]">{siteConfig.phone}</span>
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-1 hover:text-white"
          >
            <MessageCircle size={15} className="text-accent-100" aria-hidden="true" />
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 py-1 hover:text-white">
            <Mail size={15} className="text-accent-100" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[hyderabad, vizag].map((a) => (
              <address key={a.label} className="not-italic text-sm leading-6">
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{a.label}</span>
                {a.line1}
                <br />
                {a.line2}
              </address>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">{siteConfig.officeHours}</p>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="py-1.5 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="py-1.5 hover:text-white">
              Terms
            </Link>
            <Link href="/app" className="inline-flex items-center gap-1.5 py-1.5 hover:text-white">
              <Smartphone size={13} aria-hidden="true" /> Staff app
            </Link>
            <a href="https://payroll.slbbc.in" className="inline-flex items-center gap-1.5 py-1.5 hover:text-white">
              <LogIn size={13} aria-hidden="true" /> Staff login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">{title}</h2>
      <div className="mt-4 flex flex-col gap-1 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="py-1 hover:text-white">
      {children}
    </Link>
  );
}
