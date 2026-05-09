import Link from "next/link";
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
      className="bg-cta-pattern py-16 md:py-24"
      aria-label="Call to action"
    >
      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-white text-balance">{title}</h2>
          {subtitle && (
            <p className="text-white/75 text-body-lg">{subtitle}</p>
          )}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href={primaryCTA.href} className="btn-primary">
              {primaryCTA.label}
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
