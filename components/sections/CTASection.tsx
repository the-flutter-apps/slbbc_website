import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTASection({
  title = "Ready to discuss your boiler operations?",
  subtitle = "Talk to our team about a tailored boiler O&M contract for your pharma facility.",
  primaryCTA = { label: "Get a Quote", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-cta-pattern py-20 md:py-28"
      aria-label="Call to action"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-50"
      />
      {/* Decorative blur orbs */}
      <div
        aria-hidden="true"
        className="absolute -z-10 top-1/2 -translate-y-1/2 -left-24 h-80 w-80 rounded-full bg-primary-400/40 blur-3xl animate-blob"
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 top-1/2 -translate-y-1/2 -right-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <Container>
        <div className="relative mx-auto max-w-3xl flex flex-col items-center text-center gap-6">
          <span className="badge-dot">Let&apos;s talk</span>
          <h2 className="font-display text-display-md md:text-display-lg text-gradient-light text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/75 text-body-lg text-pretty max-w-2xl">{subtitle}</p>
          )}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href={primaryCTA.href} className="btn-primary group/cta">
              {primaryCTA.label}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-outline-white">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
