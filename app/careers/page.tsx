import type { Metadata } from "next";
import { MapPin, Briefcase, Info } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ValueCard } from "@/components/sections/ValueCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CareerForm } from "@/components/forms/CareerForm";
import { openPositions, benefits, walkInDetails } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers — Boiler Operator & Fireman Jobs | SLBBC",
  description:
    "Join SLBBC as a Boiler Operator (1st/2nd Class), Boiler Fireman, or Helper. Stable employment, on-time salaries, PF/ESI benefits, and career growth. Hyderabad & Vishakhapatnam.",
  openGraph: {
    title: "Careers at SLBBC — Build Your Career in Industrial Operations",
    description:
      "Open positions for IBR-certified Boiler Operators, Firemen, and Helpers. Stable employment with full statutory benefits.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://slbbc.in" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://slbbc.in/careers" },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        badge="We're Hiring"
        title="Build Your Career in Industrial Operations"
        subtitle="Join a team that values safety, offers stable employment, and treats every team member with respect. IBR-certified professionals welcome."
        primaryCTA={{ label: "Apply Now", href: "#apply" }}
        secondaryCTA={{ label: "Open Positions", href: "#positions" }}
        dark
        centered
      />

      {/* Why work with SLBBC */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="why-work-heading">
        <Container>
          <SectionHeader
            label="Why Work With Us"
            title="More than just a job"
            subtitle="We invest in our people because our clients depend on them."
            id="why-work-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <ValueCard
                key={b.title}
                icon={b.icon}
                title={b.title}
                description={b.desc}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section
        id="positions"
        className="py-16 md:py-24 scroll-mt-24"
        aria-labelledby="positions-heading"
      >
        <Container>
          <SectionHeader
            label="Open Positions"
            title="Current openings"
            subtitle="All positions are full-time deployments at pharma manufacturing sites in Hyderabad or Vishakhapatnam."
            id="positions-heading"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {openPositions.map((pos) => (
              <article
                key={pos.id}
                className="card border border-border/50 space-y-4"
                aria-labelledby={`pos-${pos.id}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      id={`pos-${pos.id}`}
                      className="text-base font-semibold text-text"
                    >
                      {pos.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <MapPin size={12} aria-hidden="true" />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <Briefcase size={12} aria-hidden="true" />
                        {pos.type}
                      </span>
                    </div>
                  </div>
                  <span className="badge shrink-0">Open</span>
                </div>
                <p className="text-sm text-text-muted">{pos.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text mb-2">
                    Requirements
                  </p>
                  <ul className="space-y-1.5">
                    {pos.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#apply"
                  className="btn-secondary inline-flex text-sm px-5 py-2"
                  aria-label={`Apply for ${pos.title}`}
                >
                  Apply for This Role
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Walk-in details */}
      <section className="py-10 bg-primary/5 border-y border-primary/10" aria-label="Walk-in interview details">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Info size={22} className="text-primary shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold text-text">Walk-in Interviews</p>
              <p className="text-sm text-text-muted mt-0.5">
                {walkInDetails.days} · {walkInDetails.time} ·{" "}
                {walkInDetails.location}
              </p>
              <p className="text-xs text-text-muted mt-1">
                {walkInDetails.note}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section
        id="apply"
        className="py-16 md:py-24 scroll-mt-24"
        aria-labelledby="apply-heading"
      >
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              label="Apply Now"
              title="Submit your application"
              subtitle="Fill in the form below and our HR team will contact you within 3 working days."
              id="apply-heading"
            />
            <div className="mt-8 p-6 md:p-8 rounded-2xl border border-border bg-white shadow-card">
              <CareerForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
