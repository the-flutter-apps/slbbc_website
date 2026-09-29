import type { Metadata } from "next";
import { ogImage } from "@/content/site";
import { breadcrumbs } from "@/content/schema";
import { ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { iconFor } from "@/components/shared/icons";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CareerForm } from "@/components/forms/CareerForm";
import { openPositions, benefits, walkInDetails } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers — Boiler Operator & Fireman Jobs in Hyderabad & Vizag",
  description:
    "Boiler Operator (1st/2nd Class), Fireman and Helper jobs in Hyderabad and Vishakhapatnam. Steady work, salary on time, PF and ESI.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    images: [ogImage],
    url: "/careers/",
    title: "Careers at SLBBC — Build Your Career in Industrial Operations",
    description:
      "Open positions for IBR-certified Boiler Operators, Firemen, and Helpers. Stable employment with full statutory benefits.",
  },
};

const breadcrumbJsonLd = breadcrumbs("Careers", "/careers/");

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        breadcrumb={[{ label: "Careers" }]}
        badge="We're hiring"
        title="Build your career in industrial operations."
        subtitle="Join a team that values safety, offers stable employment, and treats every team member with respect. IBR-certified professionals welcome."
        primaryCTA={{ label: "Apply now", href: "#apply" }}
        secondaryCTA={{ label: "Open positions", href: "#positions" }}
        specs={[
          { label: "Open roles", value: `${openPositions.length}` },
          { label: "Locations", value: "Hyderabad · Vizag" },
          { label: "Benefits", value: "PF · ESI" },
          { label: "Walk-ins", value: walkInDetails.days },
        ]}
      />

      {/* Why work with SLBBC */}
      <section className="section-padding" aria-labelledby="why-work-heading">
        <Container>
          <SectionHeader
            label="Why work with us"
            title="More than just a job."
            subtitle="We invest in our people because our clients depend on them."
            id="why-work-heading"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = iconFor(b.icon);
              return (
                <div key={b.title} className="bg-white p-7">
                  <Icon size={22} className="text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section
        id="positions"
        className="section-padding scroll-mt-24 border-y border-border bg-background-muted"
        aria-labelledby="positions-heading"
      >
        <Container>
          <SectionHeader
            label="Open positions"
            title="Current openings."
            subtitle="All positions are full-time deployments at pharma manufacturing sites in Hyderabad or Vishakhapatnam."
            id="positions-heading"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {openPositions.map((pos) => (
              <article key={pos.id} className="card flex flex-col" aria-labelledby={`pos-${pos.id}`}>
                <div className="flex items-start justify-between gap-3 border-b border-border p-6">
                  <div>
                    <h3 id={`pos-${pos.id}`} className="text-xl font-bold">
                      {pos.title}
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px] text-text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} aria-hidden="true" />
                        {pos.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={12} aria-hidden="true" />
                        {pos.type}
                      </span>
                    </p>
                  </div>
                  <span className="badge badge-accent badge-dot shrink-0">Open</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[15px] leading-6 text-text-muted">{pos.description}</p>
                  <p className="spec-label mt-5">Requirements</p>
                  <ul className="mt-2 space-y-1.5">
                    {pos.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5 text-sm leading-6 text-text">
                        <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#apply"
                    className="btn-ghost mt-6 self-start"
                    aria-label={`Apply for this role: ${pos.title}`}
                  >
                    Apply for this role <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Walk-in details */}
      <section className="border-b border-border bg-primary" aria-label="Walk-in interview details">
        <Container>
          <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-6">
            <CalendarDays size={26} className="shrink-0 text-accent-100" aria-hidden="true" />
            <div>
              <p className="font-display text-xl font-bold text-white">Walk-in interviews</p>
              <p className="mt-1 font-mono text-[13px] text-white/80">
                {walkInDetails.days} · {walkInDetails.time} · {walkInDetails.location}
              </p>
              <p className="mt-1 text-sm text-white/60">{walkInDetails.note}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="section-padding scroll-mt-24" aria-labelledby="apply-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                label="Apply now"
                title="Submit your application."
                subtitle="Fill in the form and our HR team will contact you within 3 working days."
                id="apply-heading"
              />
            </div>
            <div className="card p-6 md:p-8 lg:col-span-8">
              <CareerForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
