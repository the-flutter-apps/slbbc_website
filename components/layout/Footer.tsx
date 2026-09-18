import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { siteConfig, footerLinks } from "@/content/site";
export function Footer() {
  return (
    <footer className="industrial-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo variant="light" />
          <p>
            Aligning with your business.
            <br />
            Keeping your operations moving.
          </p>
          <span>GSTIN: {siteConfig.gstin}</span>
        </div>
        <div>
          <h2>EXPLORE</h2>
          {footerLinks.company.slice(0, 4).map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>OUR EXPERTISE</h2>
          {footerLinks.services.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h2>LET’S CONNECT</h2>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
            {siteConfig.phone} <ArrowUpRight size={17} />
          </a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>Hyderabad · Visakhapatnam</p>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Sri Lakshmi Balaji Boiler Contractor.
        </span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/app">Employee app</Link>
          <a href="https://payroll.slbbc.in">
            Staff login <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
