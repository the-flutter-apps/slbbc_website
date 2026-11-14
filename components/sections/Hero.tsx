"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
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
  /** Figures shown in a card beside the headline. */
  specs?: { label: string; value: string }[];
  /** Visible trail for inner pages, e.g. [{ label: "Services" }]. */
  breadcrumb?: { label: string; href?: string }[];
  centered?: boolean;
  /** Kept for compatibility; every hero is light now. */
  dark?: boolean;
  children?: React.ReactNode;
}

/**
 * The opening of an inner page: where you are, what this page is, one
 * paragraph of context — on the same pale-sky ground and drifting blobs as the
 * home page. Text slides in from the left, the side panel from the right.
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
    <section className="relative overflow-hidden" aria-label="Page introduction">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" aria-hidden="true" />
      <div
        className="absolute left-10 top-10 h-64 w-64 animate-blob rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 h-96 w-96 animate-blob-slow rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className={cn(
          "container-main relative grid gap-12 py-16 md:py-20",
          side && "lg:grid-cols-2 lg:items-center lg:gap-20",
          centered && !side && "text-center"
        )}
      >
        <div className={cn("animate-slide-in-left", !side && "max-w-3xl", centered && !side && "mx-auto")}>
          {breadcrumb && (
            <nav aria-label="Breadcrumb">
              <ol
                className={cn(
                  "flex items-center gap-1.5 text-sm text-slate-500",
                  centered && !side && "justify-center"
                )}
              >
                <li>
                  <Link href="/" className="transition-colors hover:text-brand-700">
                    Home
                  </Link>
                </li>
                {breadcrumb.map((crumb) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    <ChevronRight size={14} aria-hidden="true" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-brand-700">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-slate-700" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {badge && (
            <p className={cn("section-label animate-fade-up animate-delay-200", breadcrumb && "mt-6")}>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {badge}
            </p>
          )}

          <h1
            className={cn(
              "text-4xl font-bold leading-tight text-slate-900 sm:text-5xl",
              (breadcrumb || badge) && "mt-6"
            )}
          >
            {title}
          </h1>

          {tagline && <p className="text-gradient mt-3 text-xl font-semibold">{tagline}</p>}

          {subtitle && (
            <p
              className={cn(
                "mt-6 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty",
                centered && !side && "mx-auto max-w-2xl"
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                "mt-8 flex animate-fade-up flex-wrap gap-3 animate-delay-400",
                centered && !side && "justify-center"
              )}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn-primary">
                  {primaryCTA.label} <ArrowRight size={18} aria-hidden="true" />
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
          <div className="animate-slide-in-right animate-delay-200">
            {image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-brand-300/40">
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-transparent to-transparent" />
              </div>
            )}
            {specs && specs.length > 0 && (
              <dl className={cn("card divide-y divide-slate-100 p-2", image && "mt-4")}>
                {specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                    <dt className="text-sm text-slate-500">{s.label}</dt>
                    <dd className="text-sm font-semibold text-slate-900 tabular">{s.value}</dd>
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
