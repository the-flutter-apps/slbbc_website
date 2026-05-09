import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { vendorCards, caseHighlights, otherIndustries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries Served — Pharmaceutical Manufacturers | SLBBC",
  description:
    "SLBBC serves sterile injectable, API, and formulations manufacturers across Hyderabad and Vishakhapatnam. Trusted boiler O&M partner to 10+ pharma facilities.",
  openGraph: {
    title: "Industries Served | SLBBC — Trusted by Pharma Manufacturers",
    description:
      "Trusted boiler O&M partner to 10+ pharmaceutical manufacturing facilities in Hyderabad and Vishakhapatnam.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://slbbc.in" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://slbbc.in/industries" },
  ],
};

const pharmaAdvantages = [
  "Deep understanding of GMP manufacturing environment requirements",
  "Zero tolerance for unplanned boiler downtime that affects batch production",
  "Operators trained to follow pharmaceutical-grade SOPs and cleanliness standards",
  "Pre-audit readiness support — documentation, calibration records, and compliance files",
  "Confidentiality — we never disclose client names without permission",
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        badge="Industries Served"
        title="Trusted by Leading Pharmaceutical Manufacturers"
        subtitle="10+ vendor sites, 85+ deployed professionals, and zero LTI incidents — all in some of India's most regulated manufacturing environments."
        dark
        centered
      />

      {/* Why Pharma Trusts SLBBC */}
      <section className="py-16 md:py-24" aria-labelledby="pharma-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="section-label">Why Pharma Trusts SLBBC</p>
              <h2 id="pharma-heading">
                We understand pharmaceutical operations
              </h2>
              <p className="text-body-lg text-text-muted leading-relaxed">
                Pharmaceutical manufacturing is one of the most demanding
                operating environments for boiler contractors. FDA and WHO GMP
                audits, zero-downtime requirements, stringent documentation,
                and a workforce that must adhere to pharmaceutical-grade
                cleanliness standards — this is our day-to-day.
              </p>
              <p className="text-text-muted leading-relaxed">
                SLBBC has spent years building expertise specifically in this
                sector. We don&apos;t bring a generic industrial approach and
                adapt it — we start from the pharma plant&apos;s perspective.
              </p>
              <ul className="space-y-2.5 mt-4">
                {pharmaAdvantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-text-muted">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Sterile Injectables", icon: "🏭" },
                { label: "API / Bulk Drug", icon: "⚗️" },
                { label: "Oral Formulations", icon: "💊" },
                { label: "CRAM Facilities", icon: "🔬" },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="card flex flex-col items-center text-center gap-2 py-6"
                >
                  <span className="text-3xl" role="img" aria-label={cat.label}>
                    {cat.icon}
                  </span>
                  <p className="text-sm font-semibold text-text">{cat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Vendor Partners */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="vendors-heading">
        <Container>
          <SectionHeader
            label="Vendor Partners"
            title="Serving facilities across Telangana and Andhra Pradesh"
            subtitle="Client names are anonymised to protect confidentiality — available upon request."
            id="vendors-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vendorCards.map((vendor) => (
              <div
                key={vendor.id}
                className="card border border-border/50 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 size={20} className="text-primary" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-text text-sm leading-snug">
                    {vendor.category}
                  </p>
                </div>
                <div className="space-y-1 text-xs text-text-muted pl-1">
                  <p>
                    <span className="font-medium text-text">Location:</span>{" "}
                    {vendor.location}
                  </p>
                  <p>
                    <span className="font-medium text-text">Partnership:</span>{" "}
                    {vendor.duration}
                  </p>
                  <p>
                    <span className="font-medium text-text">Scope:</span>{" "}
                    {vendor.scope}
                  </p>
                  <p>
                    <span className="font-medium text-text">Scale:</span>{" "}
                    {vendor.boilerCount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Highlights */}
      <section className="py-16 md:py-24" aria-labelledby="cases-heading">
        <Container>
          <SectionHeader
            label="Case Highlights"
            title="Results we're proud of"
            subtitle="Anonymised examples of how SLBBC has created value for pharmaceutical clients."
            id="cases-heading"
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseHighlights.map((c) => (
              <article
                key={c.title}
                className="card border border-border/50 space-y-4"
                aria-labelledby={`case-${c.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="badge-accent self-start">{c.client}</div>
                <h3
                  id={`case-${c.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-base font-semibold text-text"
                >
                  {c.title}
                </h3>
                <div className="space-y-2.5 text-sm text-text-muted">
                  <div>
                    <p className="font-medium text-text text-xs uppercase tracking-wide mb-1">
                      Challenge
                    </p>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <p className="font-medium text-text text-xs uppercase tracking-wide mb-1">
                      Solution
                    </p>
                    <p>{c.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-text text-xs uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    <p className="font-medium text-primary">{c.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Industries */}
      <section className="py-12 bg-background-muted border-y border-border" aria-labelledby="other-industries-heading">
        <Container>
          <div className="space-y-4">
            <p className="section-label">Beyond Pharma</p>
            <h2 id="other-industries-heading" className="text-xl font-semibold text-text">
              We also serve other process industries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {otherIndustries.map((ind) => (
                <div
                  key={ind.name}
                  className="p-5 rounded-xl border border-border bg-white"
                >
                  <p className="font-semibold text-text text-sm">{ind.name}</p>
                  <p className="text-xs text-text-muted mt-1">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Become a partner"
        subtitle="Looking for a reliable boiler O&M contractor? Let's start a conversation."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
