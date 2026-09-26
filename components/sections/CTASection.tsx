import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const directLines = [
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us",
    href: siteConfig.social.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export function CTASection({
  title = "Ready to discuss your boiler operations?",
  subtitle = "Talk to our team about a tailored boiler O&M contract for your facility.",
  primaryCTA = { label: "Get a Quote", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-cta-pattern"
      aria-label="Call to action"
    >
      <div className="hazard-band" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-50"
      />

      <Container className="py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="badge-dot self-start">Let&apos;s talk</span>
            <h2 className="font-display text-display-md md:text-display-lg text-white text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="max-w-2xl text-body-lg text-white/75 text-pretty">{subtitle}</p>
            )}
            <div className="flex flex-wrap gap-3 pt-2">
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

          {/* Direct lines — B2B buyers often want a person, not a form */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm">
            <p className="spec-label px-4 pt-3 pb-2 text-white/50">Direct lines</p>
            <ul className="divide-y divide-white/10">
              {directLines.map((line) => {
                const Icon = line.icon;
                return (
                  <li key={line.label}>
                    <a
                      href={line.href}
                      target={line.external ? "_blank" : undefined}
                      rel={line.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-lg px-4 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent-light ring-1 ring-accent/30">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="spec-label block text-white/50">{line.label}</span>
                        <span className="block truncate font-semibold text-white">{line.value}</span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="px-4 pb-3 pt-2 text-xs text-white/50">{siteConfig.officeHours}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
