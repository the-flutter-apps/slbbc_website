import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FlaskConical,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StatCard } from "@/components/sections/StatCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { siteConfig, ogImage } from "@/content/site";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Boiler Operation & Maintenance Contractor in Hyderabad & Vizag | Sri Lakshmi Balaji (SLBBC)",
  },
  description:
    "24/7 boiler operation, maintenance, IBR-certified operator supply and compliance for 1–10 TPH boilers. 20+ years serving pharma and process plants in Hyderabad and Vishakhapatnam. Get a quote.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [ogImage],
    title: "Sri Lakshmi Balaji Boiler Contractor — Aligning with your business",
    description:
      "20+ years of boiler operations and maintenance (1–10 Ton). 24/7 contract operations with IBR-certified manpower, ESI & PF benefits.",
    url: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og.png`,
  logo: `${siteConfig.url}/icon.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addresses.hyderabad.line1,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500055",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Visakhapatnam" },
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
  ],
  knowsAbout: [
    "Boiler operation",
    "Boiler maintenance",
    "Indian Boiler Regulations (IBR) compliance",
    "IBR-certified boiler operator supply",
    "Pharmaceutical utility operations",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const capabilities = [
  "Boiler operation",
  "Preventive maintenance",
  "Breakdown response",
  "IBR 1st & 2nd class operators",
  "Firemen & helpers",
  "IBR inspection coordination",
  "Licence renewals",
  "PF · ESI · PT compliance",
  "Efficiency audits",
  "Greenfield staffing",
];

const whyUs = [
  {
    icon: Clock,
    title: "Every shift covered",
    description:
      "Boilers don't stop, and neither do we. Our operators run your boiler house round the clock, with replacements arranged so no shift goes vacant.",
  },
  {
    icon: ShieldCheck,
    title: "IBR-certified people",
    description:
      "1st and 2nd class operators with verified IBR certificates. Statutory inspections, renewals and records are handled end to end.",
  },
  {
    icon: FlaskConical,
    title: "Pharma-grade discipline",
    description:
      "Two decades in GMP pharmaceutical plants. We know the audit expectations, the SOPs and the cost of a missed batch.",
  },
  {
    icon: Users,
    title: "One accountable contractor",
    description:
      "Manpower, payroll, PF, ESI, maintenance and compliance under a single contract — one number to call, one invoice to pay.",
  },
];

const process = [
  {
    title: "Site survey",
    description:
      "We visit your boiler house, review capacity, fuel, shift pattern and current compliance status.",
  },
  {
    title: "Proposal & staffing plan",
    description:
      "A clear scope: shifts, grades of operators, maintenance schedule and statutory responsibilities.",
  },
  {
    title: "Deployment & handover",
    description:
      "Verified, IBR-certified crew deployed and briefed on your SOPs before they take over the first shift.",
  },
  {
    title: "Run, maintain, report",
    description:
      "Daily logs, preventive maintenance and inspection readiness — with a single point of contact.",
  },
];

const industries = [
  "Sterile injectables",
  "API / bulk drugs",
  "Formulations",
  "CRAM facilities",
  "Chemical processing",
  "Food & beverage",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <Hero
        badge="Boiler O&M contractor · 1–10 TPH"
        title={siteConfig.name}
        tagline={`${siteConfig.tagline}.`}
        subtitle="We run, maintain and staff industrial boiler houses for pharma and process plants across Hyderabad and Vishakhapatnam — IBR-certified operators on every shift, with PF, ESI and statutory compliance handled for you."
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Explore services", href: "/services" }}
        image={{
          src: "/images/hero.jpg",
          alt: "Sri Lakshmi Balaji Boiler Contractor — industrial plant stack with steam",
          fallback: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
        }}
        specs={[
          { label: "Boiler range", value: "1–10 TPH" },
          { label: "Experience", value: `${siteConfig.yearsExperience}+ years` },
          { label: "Plant sites", value: "10+" },
          { label: "Lost-time incidents", value: "Zero" },
        ]}
      >
        <ul className="grid gap-2.5 pt-2 text-sm text-white/80 sm:grid-cols-2">
          {[
            "IBR-certified operators, every shift",
            "PF, ESI & payroll handled",
            "Inspection & licence renewals",
            "One contract, one point of contact",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Hero>

      {/* Capability ticker */}
      <div className="border-b border-border bg-white py-4" aria-label="Capabilities">
        <div className="mask-fade-x flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...capabilities, ...capabilities].map((c, i) => (
              <li
                key={`${c}-${i}`}
                aria-hidden={i >= capabilities.length ? true : undefined}
                className="flex items-center gap-8 whitespace-nowrap spec-label text-primary"
              >
                {c}
                <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>

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
                Your boiler house, run like it&apos;s our own.
              </h2>
              <p className="text-body-lg text-text-muted mt-5 text-pretty">
                Plant heads hand us the boiler so they can stop thinking about it.
                Safe, compliant, uninterrupted steam — so production never waits.
              </p>
              <Link href="/about" className="btn-secondary mt-8 group/cta">
                About the company
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative flex flex-col gap-4 bg-white p-7 transition-colors duration-300 hover:bg-background-subtle"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white transition-colors duration-300 group-hover:bg-accent">
                        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="spec-label text-text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28" aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="section-label">Our Services</p>
              <h2
                id="services-heading"
                className="font-display text-display-md mt-4 tracking-tight max-w-2xl text-balance"
              >
                Everything your boiler house needs, under one contract.
              </h2>
            </div>
            <Link href="/services" className="btn-secondary self-start md:self-auto">
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </div>

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

            {/* Closing tile fills the sixth slot with a next step */}
            <Link
              href="/contact"
              className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-primary-900 p-7 text-white shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid-light bg-grid-sm opacity-60"
              />
              <div className="relative">
                <p className="spec-label text-accent-light">Not sure where to start?</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white text-balance">
                  Book a boiler house assessment.
                </h3>
              </div>
              <span className="relative inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-accent-dark">
                Request a visit
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section
        className="relative isolate overflow-hidden bg-primary-950 py-20 md:py-28 text-white"
        aria-labelledby="process-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-grid-light bg-grid-md mask-radial-fade opacity-50"
        />
        <Container>
          <SectionHeader
            label="How it works"
            title="From first call to first shift."
            subtitle="A straightforward handover, so your plant keeps producing while we take over the boiler house."
            id="process-heading"
            light
            centered={false}
          />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-accent via-white/20 to-transparent lg:block"
            />
            {process.map((step, i) => (
              <li key={step.title} className="relative flex flex-col gap-4">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-md border border-accent/50 bg-primary-950 font-mono text-sm font-medium text-accent-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Track record */}
      <section className="py-20 md:py-24 bg-white" aria-label="Company statistics">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="bg-white">
                <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries + compliance */}
      <section
        className="py-20 md:py-28 bg-background-muted border-y border-border"
        aria-labelledby="industries-heading"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="section-label">Industries served</p>
              <h2
                id="industries-heading"
                className="font-display text-display-md mt-4 tracking-tight text-balance"
              >
                Deep roots in pharmaceutical manufacturing.
              </h2>
              <p className="mt-5 text-text-muted text-pretty">
                Sterile injectables, API and formulations plants across Telangana
                and Andhra Pradesh — plus dependable steam support for other
                process industries.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {industries.map((industry, i) => (
                  <li
                    key={industry}
                    className="flex items-center gap-3 bg-white px-5 py-4 text-sm font-semibold text-text"
                  >
                    <span className="spec-label text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-primary-900 p-8 text-white md:p-10">
              <div aria-hidden="true" className="absolute inset-0 bg-grid-light bg-grid-sm opacity-50" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                  <ClipboardCheck size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
                  Registered, compliant, audit-ready.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Every statutory registration a responsible boiler contractor
                  needs, kept current and ready for your vendor audit.
                </p>
                <ul className="mt-6 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm font-medium">
                      <CheckCircle2 size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <p className="spec-label mt-6 text-white/50">GSTIN · {siteConfig.gstin}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="section-label">FAQ</p>
              <h2 id="faq-heading" className="font-display text-display-md mt-4 tracking-tight text-balance">
                Questions plant heads ask us.
              </h2>
              <p className="mt-5 text-text-muted">
                Something else?{" "}
                <Link href="/contact" className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  Ask us directly
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-border border-y border-border">
              {homeFaqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold tracking-tight text-text [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-primary transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white">
                      <Plus size={16} aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 text-text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Hand over the boiler house. Keep the steam."
        subtitle="Tell us about your facility and we'll design a boiler O&M contract that fits — shifts, people, maintenance and compliance."
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}
