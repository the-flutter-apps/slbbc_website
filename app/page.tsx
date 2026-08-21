import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ValueCard } from "@/components/sections/ValueCard";
import { StatCard } from "@/components/sections/StatCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Boiler O&M Contractor — Hyderabad & Vishakhapatnam | Sri Lakshmi Balaji",
  description:
    "Sri Lakshmi Balaji Boiler Contractor has over two decades of experience in boiler maintenance and services (1–10 Ton) across Hyderabad and Vishakhapatnam. We provide round-the-clock operations with ESI, PF, and full statutory benefits.",
  openGraph: {
    title: "Sri Lakshmi Balaji Boiler Contractor — Aligning with your business",
    description:
      "20+ years of boiler maintenance and operations (1–10 Ton). 24/7 contract operations with IBR-certified manpower, ESI & PF benefits.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad", "Vishakhapatnam"],
  knowsAbout: [
    "Boiler Operation",
    "Boiler Maintenance",
    "IBR Compliance",
    "Manpower Supply",
  ],
};

const whyUs = [
  {
    icon: "Clock",
    title: "24/7 Reliability",
    description:
      "Every shift is covered. Boilers don't stop, and neither do we — our IBR-certified operators are on-site around the clock.",
  },
  {
    icon: "Shield",
    title: "IBR Compliance",
    description:
      "All operators hold valid IBR certificates. We handle statutory inspections, licence renewals, and documentation — end to end.",
  },
  {
    icon: "CheckCircle2",
    title: "Pharma-Grade Standards",
    description:
      "Deep experience in GMP pharmaceutical environments. We understand the audit expectations and zero-tolerance approach to downtime.",
  },
  {
    icon: "Star",
    title: "End-to-End Service",
    description:
      "From manpower sourcing and payroll to compliance management — one contractor for all your boiler operation needs.",
  },
];

const industries = [
  "Sterile Injectables",
  "API Manufacturers",
  "Formulations",
  "CRAM Facilities",
  "Chemical Processing",
  "Food & Beverage",
];

const certifications = [
  "IBR Certified Manpower",
  "GST Registered",
  "PF Registered",
  "ESI Registered",
  "Contract Labour Act",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <Hero
        badge="1 — 10 Ton · IBR Certified · 24/7"
        title="Aligning with your business."
        subtitle="Over two decades keeping pharma-grade boilers running across Hyderabad and Vishakhapatnam. Round-the-clock contract operations powered by IBR-certified manpower with full statutory cover."
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
        image={{
          src: "/images/hero.jpg",
          alt: "Sri Lakshmi Balaji Boiler Contractor — industrial boiler facility",
          fallback: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
        }}
      >
        {/* Trust strip */}
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-white/10 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-white tabular-nums">
                {stat.value}
                <span className="text-accent-light">{stat.suffix}</span>
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-white/55">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Hero>

      {/* Why SLB */}
      <section className="relative isolate py-20 md:py-28 bg-background-subtle" aria-labelledby="why-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-grid-dark bg-grid-lg mask-radial-fade opacity-60"
        />
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="section-label">Why Sri Lakshmi Balaji</p>
              <h2 id="why-heading" className="font-display text-display-md mt-4 tracking-tight text-balance">
                Built for continuous industrial operations.
              </h2>
              <p className="text-body-lg text-text-muted mt-5 text-pretty">
                We exist for one purpose: keeping your boilers running safely,
                compliantly, and without interruption — so your production never
                stops.
              </p>
              <Link href="/about" className="btn-ghost mt-6 group/cta -ml-3">
                Learn about us
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <ValueCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className={i === 0 ? "sm:mt-8" : i === 2 ? "sm:mt-8" : ""}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services overview — bento layout */}
      <section className="py-20 md:py-28" aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="section-label">Our Services</p>
              <h2
                id="services-heading"
                className="font-display text-display-md mt-4 tracking-tight max-w-2xl text-balance"
              >
                Comprehensive boiler services under one contract.
              </h2>
            </div>
            <Link href="/services" className="btn-secondary self-start md:self-auto">
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Even grid — the gradient plates are a fixed height, so the old
              bento row-spans would have left the feature card's plate stretched. */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                href={`/services#${service.id}`}
                index={i + 1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Industries strip */}
      <section
        className="relative isolate py-20 md:py-24 bg-background-muted border-y border-border"
        aria-labelledby="industries-heading"
      >
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="section-label">Industries Served</p>
              <h2
                id="industries-heading"
                className="font-display text-display-md tracking-tight text-balance"
              >
                Trusted by pharmaceutical manufacturers.
              </h2>
              <p className="text-text-muted text-pretty">
                Sterile injectables, API manufacturers, formulations plants —
                SLBBC serves leading pharma companies across Telangana and
                Andhra Pradesh.
              </p>
              <Link href="/industries" className="btn-secondary mt-2">
                Our clients
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {industries.map((industry, i) => (
                <div
                  key={industry}
                  className="group relative flex items-center justify-center text-center px-3 py-5 rounded-xl bg-white border border-border text-sm font-semibold text-text-muted hover:border-primary/30 hover:text-primary hover:shadow-card transition-all duration-300"
                  style={{ marginTop: i % 2 === 1 ? "1rem" : 0 }}
                >
                  <span className="absolute left-3 top-3 font-display text-[11px] font-bold text-text-subtle tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section
        className="relative isolate overflow-hidden py-20 md:py-28 bg-primary-900 text-white"
        aria-label="Company statistics"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[420px] w-[60%] rounded-full bg-accent/15 blur-3xl"
        />
        <Container>
          <SectionHeader
            label="Our track record"
            title="Numbers that reflect our commitment."
            centered
            light
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="bg-primary-900">
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  light
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications strip */}
      <section className="py-12 md:py-16 border-b border-border" aria-label="Certifications">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-eyebrow uppercase text-text-muted">
              Registrations &amp; Compliance
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background-subtle px-4 py-1.5 text-xs font-semibold text-text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to discuss your boiler operations?"
        subtitle="Tell us about your facility and we'll design a boiler O&M contract that fits your requirements."
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Learn About Us", href: "/about" }}
      />
    </>
  );
}
