import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Boiler Services — Operations, Maintenance & Compliance | SLBBC",
  description:
    "SLBBC provides 24/7 boiler operations, preventive maintenance, IBR-certified manpower supply, compliance management, and consultation for pharmaceutical manufacturers in Hyderabad and Vishakhapatnam.",
  openGraph: {
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
        badge="Our Services"
        title="Comprehensive Boiler Services for Industrial Operations"
        subtitle="From manned 24/7 operations to statutory compliance — every aspect of your boiler requirements, handled."
        dark
        centered
      />

      {/* Service jump links */}
      <nav
        className="sticky top-16 md:top-20 z-30 bg-white border-b border-border shadow-sm"
        aria-label="Service sections"
      >
        <Container>
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 rounded-md text-sm font-medium text-text-muted hover:text-primary hover:bg-background-muted transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* Service blocks */}
      <div className="divide-y divide-border">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-16 md:py-24 scroll-mt-32 md:scroll-mt-40"
            aria-labelledby={`${service.id}-heading`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div
                  className={`space-y-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <p className="section-label">{`0${index + 1}`}</p>
                  <h2 id={`${service.id}-heading`}>{service.title}</h2>
                  <p className="text-body-lg text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-text-muted">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex mt-2"
                  >
                    Enquire About This Service
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTASection
        title="Need a custom service package?"
        subtitle="Every pharma facility is different. Talk to us about a tailored boiler O&M contract."
        primaryCTA={{ label: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ label: "About SLBBC", href: "/about" }}
      />
    </>
  );
}
