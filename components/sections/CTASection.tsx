import Link from "next/link";
import { ArrowRight, Phone, Settings } from "lucide-react";
import { Reveal } from "@/components/motion/Motion";
import { siteConfig } from "@/content/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

/**
 * The close of every page: one request, one number, on a blue band that
 * scales up into view. A site survey is the honest first step — nobody can
 * quote for boilers they have not seen.
 */
export function CTASection({
  title = "Start with a site survey.",
  subtitle = "We visit your plant, review your boilers' capacity, fuel and shift pattern, and come back with a staffing plan and a scope you can hold us to.",
  primaryCTA = { label: "Contact us", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  return (
    <section className="py-20" aria-label="Contact">
      <div className="container-main">
        <Reveal
          zoom
          y={0}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative text-center">
            {/* A slow-turning gear: maintenance, never stopping. */}
            <Settings
              className="pointer-events-none absolute -top-4 right-0 hidden h-16 w-16 animate-spin-slow text-white/20 md:block lg:-top-6"
              aria-hidden="true"
            />
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">{subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={primaryCTA.href} className="btn-white group">
                {primaryCTA.label}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-outline-white py-4 text-base">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
            <a
              href={tel}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Phone size={15} aria-hidden="true" /> {siteConfig.phone} · {siteConfig.officeHours}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
