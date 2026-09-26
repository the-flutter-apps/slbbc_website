"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

interface HeroProps {
  badge?: string;
  title: string;
  /** Brand line shown directly beneath the headline, in accent. */
  tagline?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  image?: { src: string; alt: string; fallback?: string };
  /** Readouts shown on the control-panel card over the hero image. */
  specs?: { label: string; value: string }[];
  /** Visible trail for inner pages, e.g. [{ label: "Services" }]. */
  breadcrumb?: { label: string; href?: string }[];
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
  specs,
  breadcrumb,
  centered = false,
  dark = true,
  children,
}: HeroProps) {
  const [imgSrc, setImgSrc] = useState(image?.src ?? "");
  const centerText = centered && !image;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        image ? "pt-28 pb-20 md:pt-36 md:pb-28" : "pt-32 pb-20 md:pt-40 md:pb-24",
        dark ? "bg-hero-pattern text-white" : "bg-background-muted text-text"
      )}
      aria-label="Page hero"
    >
      {dark && (
        <>
          {/* Blueprint grid */}
          <div
            className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-70"
            aria-hidden="true"
          />
          {/* Furnace glow */}
          <div
            className="absolute -z-10 top-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          {/* Hazard band along the bottom edge */}
          <div className="absolute inset-x-0 bottom-0 hazard-band opacity-90" aria-hidden="true" />
        </>
      )}

      <Container>
        <div
          className={cn(
            "relative grid items-center gap-12",
            image
              ? "lg:grid-cols-[1.1fr_1fr] lg:gap-16"
              : centered
              ? "max-w-3xl mx-auto text-center"
              : "max-w-3xl"
          )}
        >
          {/* Text content */}
          <div className={cn("flex flex-col gap-6 animate-fade-up", centerText && "items-center")}>
            {breadcrumb && (
              <nav aria-label="Breadcrumb">
                <ol
                  className={cn(
                    "spec-label flex flex-wrap items-center gap-1.5",
                    dark ? "text-white/50" : "text-text-muted"
                  )}
                >
                  <li>
                    <Link href="/" className="hover:text-accent-light">
                      Home
                    </Link>
                  </li>
                  {breadcrumb.map((crumb) => (
                    <li key={crumb.label} className="flex items-center gap-1.5">
                      <ChevronRight size={12} aria-hidden="true" />
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-accent-light">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className={dark ? "text-white/80" : "text-text"}>
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {badge && (
              <span
                className={cn(
                  dark ? "badge-dot" : "badge-accent",
                  centerText ? "self-center" : "self-start"
                )}
              >
                {badge}
              </span>
            )}

            <h1
              className={cn(
                "font-display text-balance",
                tagline
                  ? "text-display-md md:text-display-lg"
                  : "text-display-lg md:text-display-xl",
                dark ? "text-white" : "text-text"
              )}
            >
              {title}
            </h1>

            {tagline && (
              <p
                className={cn(
                  "-mt-2 flex items-center gap-3 font-display text-xl md:text-2xl font-semibold tracking-tight",
                  dark ? "text-accent-light" : "text-accent",
                  centered && "mx-auto"
                )}
              >
                <span className="h-[3px] w-8 bg-accent" aria-hidden="true" />
                {tagline}
              </p>
            )}

            {subtitle && (
              <p
                className={cn(
                  "max-w-xl text-body-lg text-pretty",
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
                  "flex flex-wrap items-center gap-3 pt-2",
                  centered && "justify-center"
                )}
              >
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="btn-primary group/cta">
                    {primaryCTA.label}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
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

          {/* Framed image with a control-panel readout */}
          {image && (
            <div className="relative animate-fade-up animate-delay-200 lg:pl-4">
              <div className="relative p-3 text-white/40 corner-ticks">
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <Image
                    src={imgSrc || (image.fallback ?? image.src)}
                    alt={image.alt}
                    fill
                    className="object-cover object-[50%_40%]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    onError={() => {
                      if (image.fallback && imgSrc !== image.fallback) {
                        setImgSrc(image.fallback);
                      }
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-900/10 to-transparent"
                    aria-hidden="true"
                  />

                  {/* On-duty status tag */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-primary-950/80 px-3 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="spec-label text-white/90">On duty · 24/7/365</span>
                  </div>

                  {specs && specs.length > 0 && (
                    <dl className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 backdrop-blur-md">
                      {specs.map((spec) => (
                        <div key={spec.label} className="bg-primary-950/75 px-4 py-3">
                          <dt className="spec-label text-white/55">{spec.label}</dt>
                          <dd className="mt-1 font-display text-lg font-bold tracking-tight text-white">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
