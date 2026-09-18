import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface HeroProps {
  badge?: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image?: { src: string; alt: string; fallback?: string };
  centered?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
}
export function Hero({
  badge,
  title,
  tagline,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  children,
}: HeroProps) {
  return (
    <section
      className={`inner-hero ${image ? "inner-hero-with-image" : ""}`}
      aria-label="Page hero"
    >
      <div className="container-main">
        <div className="inner-hero-content">
          {badge && <p className="eyebrow">{badge}</p>}
          <h1>{title}</h1>
          {tagline && <p className="inner-tagline">{tagline}</p>}
          {subtitle && <p className="inner-description">{subtitle}</p>}
          <div className="hero-actions">
            {primaryCTA && (
              <Link className="industrial-button" href={primaryCTA.href}>
                {primaryCTA.label}
                <ArrowUpRight size={18} />
              </Link>
            )}
            {secondaryCTA && (
              <Link className="text-link" href={secondaryCTA.href}>
                {secondaryCTA.label}
                <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
          {children}
        </div>
        {image && (
          <div className="inner-hero-image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width:800px) 100vw, 40vw"
            />
          </div>
        )}
      </div>
      <span className="inner-hero-watermark" aria-hidden="true">
        SLBBC /
      </span>
    </section>
  );
}
