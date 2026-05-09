import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, Shield, Star, Wrench } from "lucide-react";
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
  title: "Boiler O&M Contractor for Pharma — Hyderabad & Vishakhapatnam",
  description:
    "Sri Lakshmi Balaji Boiler Contractor (SLBBC) provides 24/7 IBR-certified boiler operations, maintenance, and manpower services to pharmaceutical manufacturers across Hyderabad and Vishakhapatnam.",
  openGraph: {
    title: "SLBBC — Reliable Boiler Operations for Pharmaceutical Manufacturing",
    description:
      "24/7 IBR-certified boiler operation, maintenance, and manpower services. 10+ vendor sites, 85+ employees.",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <Hero
        badge="IBR Certified · Pharma Focused · 24/7 Operations"
        title="Reliable Boiler Operations for Pharmaceutical Manufacturing"
        subtitle={`24/7 IBR-certified boiler operation, maintenance, and manpower services across Hyderabad and Vishakhapatnam. Trusted by leading pharma manufacturers since ${siteConfig.foundingYear}.`}
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
        image={{
          src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
          alt: "Industrial boiler facility — workers in PPE monitoring operations",
        }}
      >
        {/* Trust strip */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-1.5 text-white/80">
              <span className="text-lg font-bold text-white">
                {stat.prefix ?? ""}{stat.value}{stat.suffix}
              </span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </Hero>

      {/* Why SLBBC */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="why-heading">
        <Container>
          <SectionHeader
            label="Why SLBBC"
            title="Built for pharmaceutical operations"
            subtitle="We exist for one purpose: keeping your boilers running safely, compliantly, and without interruption."
            id="why-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <ValueCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-16 md:py-24" aria-labelledby="services-heading">
        <Container>
          <SectionHeader
            label="Our Services"
            title="Comprehensive boiler services under one contract"
            subtitle="From manned 24/7 operations to IBR compliance — tailored for pharmaceutical manufacturing."
            id="services-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                href={`/services#${service.id}`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Industries strip */}
      <section className="py-12 bg-background-muted border-y border-border" aria-labelledby="industries-heading">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:max-w-md space-y-3">
              <p className="section-label">Industries Served</p>
              <h2 id="industries-heading" className="text-2xl font-bold text-text">
                Trusted by pharmaceutical manufacturers
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Sterile injectables, API manufacturers, formulations plants —
                SLBBC serves leading pharma companies across Telangana and
                Andhra Pradesh.
              </p>
              <Link href="/industries" className="btn-primary inline-flex mt-2">
                Our Clients
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3 w-full">
              {[
                "Sterile Injectables",
                "API Manufacturers",
                "Formulations",
                "CRAM Facilities",
                "Chemical Processing",
                "Food & Beverage",
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex items-center justify-center text-center px-3 py-4 rounded-xl bg-white border border-border shadow-sm text-xs font-semibold text-text-muted hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary" aria-label="Company statistics">
        <Container>
          <SectionHeader
            label="Our track record"
            title="Numbers that reflect our commitment"
            centered
            light
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2 divide-x divide-white/10">
            {siteConfig.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-12 border-b border-border" aria-label="Certifications">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">
              Registrations &amp; Compliance
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "IBR Certified Manpower",
                "GST Registered",
                "PF Registered",
                "ESI Registered",
                "Contract Labour Act Compliant",
              ].map((cert) => (
                <span key={cert} className="badge text-xs px-4 py-1.5">
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
