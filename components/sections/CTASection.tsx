import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}
export function CTASection({
  title = "Ready to discuss your boiler operations?",
  subtitle = "Talk to our team about a tailored boiler O&M contract for your facility.",
  primaryCTA = { label: "Get a quote", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="home-cta" aria-label="Call to action">
      <p className="eyebrow">LET’S KEEP YOUR BUSINESS MOVING</p>
      <div>
        <h2>{title}</h2>
        <Link className="industrial-button light-button" href={primaryCTA.href}>
          {primaryCTA.label}
          <ArrowUpRight size={20} />
        </Link>
      </div>
      <p>{subtitle}</p>
      {secondaryCTA && (
        <Link className="text-link" href={secondaryCTA.href}>
          {secondaryCTA.label}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </section>
  );
}
