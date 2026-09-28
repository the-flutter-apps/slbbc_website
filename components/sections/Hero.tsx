"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  badge?: string;
  title: string;
  /** Brand line shown directly beneath the headline. */
  tagline?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image?: { src: string; alt: string; fallback?: string };
  /** Figures shown as a ruled table beside the headline. */
  specs?: { label: string; value: string }[];
  /** Visible trail for inner pages, e.g. [{ label: "Services" }]. */
  breadcrumb?: { label: string; href?: string }[];
  centered?: boolean;
  /** Kept for compatibility; the dossier has no dark heroes. */
  dark?: boolean;
  children?: React.ReactNode;
}

/**
 * The cover of a section of the file: where you are, what this section is, one
 * paragraph of context. Light, and the same on every page, so the header above
 * it never has to change colour to stay readable.
 */
export function Hero({
  badge,
  title,
  tagline,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  specs,
  breadcrumb,
  centered = false,
  children,
}: HeroProps) {
  const [imgSrc, setImgSrc] = useState(image?.src ?? "");
  const side = image || (specs && specs.length > 0);

  return (
    <section className="border-b border-border bg-background-muted" aria-label="Page introduction">
      <div
        className={cn(
          "container-main grid gap-12 py-14 md:py-20",
          side && "lg:grid-cols-12 lg:items-center",
          centered && !side && "text-center"
        )}
      >
        <div className={cn(side ? "lg:col-span-7" : "max-w-3xl", centered && !side && "mx-auto")}>
          {breadcrumb && (
            <nav aria-label="Breadcrumb">
              <ol className={cn("flex items-center gap-2 font-mono text-[12px] text-text-muted", centered && "justify-center")}>
                <li>
                  <Link href="/" className="hover:text-accent">
                    SLBBC
                  </Link>
                </li>
                {breadcrumb.map((crumb) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-accent">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-text" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {badge && <p className={cn("section-label", breadcrumb && "mt-6")}>{badge}</p>}

          <h1 className={cn("text-display-lg font-bold text-primary", (breadcrumb || badge) && "mt-4")}>{title}</h1>

          {tagline && <p className="mt-4 font-display text-xl font-semibold text-accent">{tagline}</p>}

          {subtitle && (
            <p className={cn("mt-5 max-w-2xl text-body-lg text-text-muted text-pretty", centered && !side && "mx-auto")}>
              {subtitle}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className={cn("mt-8 flex flex-wrap gap-3", centered && !side && "justify-center")}>
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn-primary">
                  {primaryCTA.label} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}

          {children}
        </div>

        {side && (
          <div className="lg:col-span-5">
            {image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-white">
                <Image
                  src={imgSrc || (image.fallback ?? image.src)}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                  onError={() => {
                    if (image.fallback && imgSrc !== image.fallback) setImgSrc(image.fallback);
                  }}
                />
              </div>
            )}
            {specs && specs.length > 0 && (
              <dl className={cn("card divide-y divide-border", image && "mt-4")}>
                {specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                    <dt className="spec-label">{s.label}</dt>
                    <dd className="font-mono text-sm text-primary tabular">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
