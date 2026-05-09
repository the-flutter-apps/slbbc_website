import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image?: { src: string; alt: string };
  centered?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
}

export function Hero({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  centered = false,
  dark = true,
  children,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden",
        dark ? "bg-hero-pattern" : "bg-background-muted"
      )}
      aria-label="Page hero"
    >
      {/* Subtle grid overlay */}
      {dark && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
      )}

      <Container>
        <div
          className={cn(
            "relative flex flex-col gap-6 md:gap-8",
            image
              ? "md:flex-row md:items-center md:gap-12"
              : centered
              ? "items-center text-center max-w-3xl mx-auto"
              : "max-w-3xl"
          )}
        >
          {/* Text content */}
          <div className={cn("flex-1 space-y-5", image && "md:max-w-[55%]")}>
            {badge && (
              <span
                className={cn(
                  "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full",
                  dark
                    ? "bg-accent/20 text-accent-light"
                    : "bg-accent/10 text-accent"
                )}
              >
                {badge}
              </span>
            )}
            <h1
              className={cn(
                "text-balance",
                dark ? "text-white" : "text-text"
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-body-lg max-w-xl",
                  dark ? "text-white/75" : "text-text-muted",
                  centered && "mx-auto"
                )}
              >
                {subtitle}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div
                className={cn(
                  "flex flex-wrap gap-3 pt-2",
                  centered && "justify-center"
                )}
              >
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="btn-primary">
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className={dark ? "btn-outline-white" : "btn-secondary"}
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
            {children}
          </div>

          {/* Hero image */}
          {image && (
            <div className="flex-1 md:max-w-[45%]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
