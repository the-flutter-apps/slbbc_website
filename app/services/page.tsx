import type { Metadata } from "next";
import { ogImage } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Boiler Operation, Maintenance & IBR Compliance Services",
  description:
    "SLBBC provides 24/7 boiler operations, preventive maintenance, IBR-certified manpower supply, compliance management, and consultation for pharmaceutical manufacturers in Hyderabad and Vishakhapatnam.",
  alternates: { canonical: "/services/" },
  openGraph: {
    images: [ogImage],
    url: "/services/",
    title: "Comprehensive Boiler Services | SLBBC",
    description:
      "Boiler operation, maintenance, manpower supply, compliance management, and consultation — all under one contract.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Sri Lakshmi Balaji Boiler Contractor",
    url: "https://slbbc.in",
  },
  serviceType: "Boiler Operation and Maintenance",
  areaServed: ["Hyderabad", "Vishakhapatnam"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Boiler Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://slbbc.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://slbbc.in/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        breadcrumb={[{ label: "Services" }]}
        badge="Scope of work"
        title="Boiler services for plants that can't afford to stop."
        subtitle="From manned 24/7 operations to statutory compliance — every aspect of your boiler house, handled under one contract."
        specs={[
          { label: "Services", value: `${services.length}` },
          { label: "Offices", value: "Hyderabad · Vizag" },
          { label: "Boiler range", value: "1 – 10 TPH" },
          { label: "Coverage", value: "24 × 7 · 365 days" },
        ]}
      />

      {/* Jump links, pinned under the header while the sheets scroll past. */}
      <nav
        className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur lg:top-[106px]"
        aria-label="Service sections"
      >
        <Container>
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {services.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="block whitespace-nowrap rounded-md px-3 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted transition-colors hover:bg-background-muted hover:text-primary"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* One sheet per service: what it is on the left, what is included on the right. */}
      <div className="divide-y divide-border">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 py-16 md:py-24 lg:scroll-mt-44"
            aria-labelledby={`${service.id}-heading`}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <p className="section-label">Service</p>
                  <h2 id={`${service.id}-heading`} className="mt-3 text-display-md font-bold">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-body-lg text-text-muted text-pretty">{service.description}</p>
                  <Link href="/contact" className="btn-primary mt-8">
                    Enquire about {service.title.toLowerCase()} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <div className="card overflow-hidden">
                    <div className="relative aspect-[16/9] border-b border-border bg-background-muted">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="border-b border-border bg-background-muted px-5 py-3">
                      <span className="spec-label">Included</span>
                    </div>
                    <ul className="divide-y divide-border">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 px-5 py-3.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent">
                            <Check size={12} strokeWidth={3} aria-hidden="true" />
                          </span>
                          <span className="text-[15px] leading-6 text-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTASection
        title="Need a custom service package?"
        subtitle="Every pharma facility is different. Talk to us about a boiler O&M contract built around your plant."
        primaryCTA={{ label: "Request a site survey", href: "/contact" }}
        secondaryCTA={{ label: "About SLBBC", href: "/about" }}
      />
    </>
  );
}
