"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

interface HeroProps {
  badge?: string;
  title: string;
  /** Brand line shown directly beneath the headline, in accent. */
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
  centered = false,
  dark = true,
  children,
}: HeroProps) {
  const [imgSrc, setImgSrc] = useState(image?.src ?? "");

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "pt-28 pb-20 md:pt-36 md:pb-28",
        dark ? "bg-hero-pattern text-white" : "bg-background-muted text-text"
      )}
      aria-label="Page hero"
    >
      {/* Decorative layers (dark variant) */}
      {dark && (
        <>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-60"
            aria-hidden="true"
          />
          {/* Soft accent orb */}
          <div
            className="absolute -z-10 top-[-10%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl animate-blob"
            aria-hidden="true"
          />
          <div
            className="absolute -z-10 bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-primary-400/30 blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
            aria-hidden="true"
          />
          {/* Bottom edge fade into next section */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/20"
            aria-hidden="true"
          />
        </>
      )}

      <Container>
        <div
          className={cn(
            "relative grid items-center gap-10",
            image
              ? "lg:grid-cols-[1.05fr_1fr] lg:gap-16"
              : centered
              ? "max-w-3xl mx-auto text-center"
              : "max-w-3xl"
          )}
        >
          {/* Text content */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {badge && (
              <span className={dark ? "badge-dot self-start" : "badge-accent self-start"}>
                {badge}
              </span>
            )}

            <h1
              className={cn(
                "font-display text-balance",
                // A headline carrying a tagline beneath it steps down one size,
                // so the pair still clears the fold alongside the CTAs.
                tagline
                  ? "text-display-md md:text-display-lg"
                  : "text-display-lg md:text-display-xl",
                dark ? "text-gradient-light" : "text-text"
              )}
            >
              {title}
            </h1>

            {tagline && (
              <p
                className={cn(
                  "-mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight",
                  dark ? "text-accent-light" : "text-accent",
                  centered && "mx-auto"
                )}
              >
                {tagline}
              </p>
            )}

            {subtitle && (
              <p
                className={cn(
                  "mt-2 max-w-xl text-body-lg text-pretty",
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
                  "flex flex-wrap items-center gap-3 pt-3",
                  centered && "justify-center"
                )}
              >
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="btn-primary group/cta"
                  >
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
                    <Play size={14} className="opacity-80" />
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}

            {children}
          </div>

          {/* Hero image with framed treatment + floating stat */}
          {image && (
            <div className="relative animate-fade-up animate-delay-200">
              {/* Outer frame ring */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/15 via-white/5 to-transparent shadow-2xl">
                <div className="relative rounded-[1.25rem] overflow-hidden aspect-[4/5]">
                  <Image
                    src={imgSrc || (image.fallback ?? image.src)}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    onError={() => {
                      if (image.fallback && imgSrc !== image.fallback) {
                        setImgSrc(image.fallback);
                      }
                    }}
                  />
                  {/* Tint overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-primary-900/60 via-primary-900/10 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Corner brackets */}
                  <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-accent" />
                  <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-white/50" />
                  <span className="pointer-events-none absolute left-3 bottom-3 h-6 w-6 border-l-2 border-b-2 border-white/50" />
                  <span className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r-2 border-b-2 border-accent" />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-3 sm:-left-6 bottom-6 glass-dark text-white rounded-2xl px-5 py-4 shadow-2xl hidden sm:flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-accent-light">
                    {siteConfig.yearsExperience}
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Years</p>
                  <p className="text-sm font-semibold text-white">of pharma-grade O&amp;M</p>
                </div>
              </div>

              {/* Floating compliance pill */}
              <div className="absolute -right-3 sm:-right-4 top-6 bg-white/95 backdrop-blur-md border border-white text-text rounded-full px-4 py-2 shadow-xl hidden sm:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                <span className="text-xs font-semibold tracking-wide text-text">IBR Certified</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
