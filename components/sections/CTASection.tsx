import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

/**
 * The close of every page: one request, one number. A site survey is the
 * honest first step — nobody can quote for boilers they have not seen.
 */
export function CTASection({
  title = "Start with a site survey.",
  subtitle = "We visit your plant, review your boilers' capacity, fuel and shift pattern, and come back with a staffing plan and a scope you can hold us to.",
  primaryCTA = { label: "Request a site survey", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  return (
    <section className="bg-primary" aria-label="Contact">
      <div className="container-main grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-20">
        <div className="md:col-span-7">
          <h2 className="text-display-md font-bold text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-body-lg text-white/70">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
          <div className="flex flex-wrap gap-3">
            <Link href={primaryCTA.href} className="btn-primary">
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-outline-white">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
          <a href={tel} className="inline-flex items-center gap-2 font-mono text-sm text-accent-100 hover:text-white">
            <Phone size={14} aria-hidden="true" /> {siteConfig.phone} · {siteConfig.officeHours}
          </a>
        </div>
      </div>
    </section>
  );
}
