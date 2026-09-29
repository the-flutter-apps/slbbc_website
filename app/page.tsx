import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  FlaskConical,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/sections/StatCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { siteConfig, ogImage } from "@/content/site";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Boiler Operation & Maintenance Contractor in Hyderabad & Vizag | Sri Lakshmi Balaji (SLBBC)",
  },
  description:
    "24/7 boiler operation, maintenance and IBR-certified operators for 1–10 TPH boilers. 20+ years serving pharma and process plants in Hyderabad and Vizag.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [ogImage],
    title: "Sri Lakshmi Balaji Boiler Contractor — Aligning with your business",
    description:
      "20+ years of boiler operations and maintenance (1–10 Ton). 24/7 contract operations with IBR-certified manpower, ESI & PF benefits.",
    url: "/",
  },
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

/*
 * Every line of the vendor file is something this site already states
 * elsewhere — the registrations list, the FAQ, the services and the stats. It
 * collects them in the order a plant's procurement team checks them. Add a line
 * here only when the claim is true and stated somewhere a buyer can verify.
 */
const vendorFile: { label: string; value: string; verified?: boolean }[] = [
  { label: "GSTIN", value: siteConfig.gstin, verified: true },
  { label: "Registrations", value: "GST · PF · ESI", verified: true },
  { label: "Labour law", value: "Contract Labour Act", verified: true },
  { label: "Operators", value: "IBR 1st & 2nd class", verified: true },
  { label: "Boiler range", value: "1 – 10 TPH" },
  { label: "Coverage", value: "24 × 7 · 365 days" },
  { label: "Offices", value: "Hyderabad · Vishakhapatnam" },
];

const whyUs = [
  {
    icon: Clock,
    title: "Every shift covered",
    description:
      "Boilers don't stop, and neither do we. Our operators run your boilers round the clock, with replacements arranged so no shift goes vacant.",
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

const handover = [
  {
    title: "Site survey",
    description: "We visit your plant and review your boilers' capacity, fuel, shift pattern and current compliance status.",
  },
  {
    title: "Proposal & staffing plan",
    description: "A clear scope: shifts, grades of operators, maintenance schedule and statutory responsibilities.",
  },
  {
    title: "Deployment & handover",
    description: "Verified, IBR-certified crew deployed and briefed on your SOPs before they take over the first shift.",
  },
  {
    title: "Run, maintain, report",
    description: "Daily logs, preventive maintenance and inspection readiness — with a single point of contact.",
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

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const SHIFTS = ["A", "B", "C"];

const tel = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Cover ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-background-muted" aria-labelledby="hero-heading">
        <div className="container-main grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7 lg:pt-4">
            <p className="section-label">Boiler O&amp;M contractor · Hyderabad &amp; Vishakhapatnam</p>
            <h1 id="hero-heading" className="mt-5 text-display-xl font-bold text-primary">
              Boiler operation for pharma plants, round the clock.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-text-muted text-pretty">
              We run, maintain and staff industrial boilers for pharma and process plants — IBR-certified
              operators on every shift, with PF, ESI and statutory compliance handled for you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Request a site survey <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-secondary">
                See the scope of work
              </Link>
            </div>
            <a
              href={tel}
              className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[13px] text-text-muted hover:text-accent"
            >
              <Phone size={14} aria-hidden="true" />
              <span className="text-primary">{siteConfig.phone}</span>
              <span>· {siteConfig.officeHours}</span>
            </a>
          </div>

          {/* The vendor file — the site's signature. */}
          <div className="lg:col-span-5">
            <div className="card overflow-hidden shadow-[0_1px_0_rgba(11,34,57,0.04),0_24px_48px_-24px_rgba(11,34,57,0.25)]">
              <div className="flex items-center justify-between border-b border-border bg-primary px-5 py-3">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent-100">
                  Vendor file
                </span>
                <span className="font-mono text-[11px] tracking-[0.1em] text-white/60">SLBBC</span>
              </div>
              <div className="px-5 pb-4 pt-5">
                <p className="font-display text-xl font-bold leading-tight text-primary">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-text-muted">Boiler operation, maintenance &amp; certified manpower</p>
              </div>
              <dl className="divide-y divide-border border-t border-border">
                {vendorFile.map((row) => (
                  <div key={row.label} className="grid grid-cols-[6.75rem_1fr_auto] items-center gap-3 px-5 py-3 sm:grid-cols-[8.5rem_1fr_auto]">
                    <dt className="spec-label">{row.label}</dt>
                    <dd className="font-mono text-[13px] text-primary tabular">{row.value}</dd>
                    <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center">
                      {row.verified && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-bg text-success-text">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </dl>
              <div className="border-t border-border bg-background-subtle px-5 py-3 text-xs text-text-muted">
                The GSTIN can be checked on the GST portal before you call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Figures ──────────────────────────────────────────────────────── */}
      <section aria-label="SLBBC in figures" className="border-b border-border">
        <div className="container-main grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {siteConfig.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="px-2 py-8 md:px-8"
            />
          ))}
        </div>
      </section>

      {/* ── Scope of work ────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="scope-heading">
        <div className="container-main">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              id="scope-heading"
              label="Scope of work"
              title="Everything your boilers need, under one contract."
            />
            <Link href="/services" className="btn-ghost shrink-0">
              Full scope of every service <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <div className="hidden grid-cols-12 gap-6 border-b border-border bg-background-muted px-6 py-3 md:grid">
              <span className="spec-label col-span-4">Service</span>
              <span className="spec-label col-span-6">Included</span>
              <span className="spec-label col-span-2 text-right">Detail</span>
            </div>
            <ul className="divide-y divide-border">
              {services.map((s) => (
                <li key={s.id} className="grid gap-4 px-6 py-6 md:grid-cols-12 md:gap-6">
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-text-muted">{s.shortDesc}</p>
                  </div>
                  <ul className="space-y-1.5 md:col-span-6">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-6 text-text">
                        <Check size={15} className="mt-1 shrink-0 text-accent-500" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="md:col-span-2 md:text-right">
                    <Link href={`/services#${s.id}`} className="btn-ghost">
                      Scope <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Coverage ─────────────────────────────────────────────────────── */}
      <section className="section-padding border-y border-border bg-background-muted" aria-labelledby="coverage-heading">
        <div className="container-main grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              id="coverage-heading"
              label="Coverage"
              title="No shift goes vacant."
              subtitle="Boilers don't stop, and neither do we. Every shift is covered by IBR-certified personnel, with replacements arranged so no shift goes vacant."
            />
            <p className="mt-6 flex items-center gap-2 font-mono text-[13px] text-text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              No vacant shifts — replacements arranged in advance
            </p>
          </div>

          {/* A week's roster, shifts down and days across. Illustrative, and captioned as such. */}
          <figure className="lg:col-span-7">
            <div className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <span className="spec-label">Shift roster · one week</span>
                <span className="font-mono text-[12px] text-success-text">Every shift manned</span>
              </div>
              <table className="mt-5 w-full border-separate border-spacing-1.5 text-center">
                <thead>
                  <tr>
                    <th className="w-10" aria-hidden="true" />
                    {DAYS.map((d) => (
                      <th key={d} scope="col" className="font-mono text-[11px] font-medium text-text-muted">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SHIFTS.map((s) => (
                    <tr key={s}>
                      <th scope="row" className="font-mono text-[12px] font-medium text-primary">
                        {s}
                      </th>
                      {DAYS.map((d) => (
                        <td key={d} className="h-10 rounded-md bg-accent-50 sm:h-12">
                          <span className="flex items-center justify-center text-accent">
                            <Check size={15} strokeWidth={2.5} aria-label={`Shift ${s}, ${d}: manned`} />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="mt-4 text-xs text-text-muted">
                An illustrative week. The shift pattern itself is agreed with each plant at the site survey.
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ── Why SLBBC ────────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="why-heading">
        <div className="container-main">
          <SectionHeader
            id="why-heading"
            label="Why SLBBC"
            title="Your boilers, run like they're our own."
            subtitle="Plant heads hand us the boiler so they can stop thinking about it. Safe, compliant, uninterrupted steam — so production never waits."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {whyUs.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-7">
                <Icon size={22} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Handover ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-primary" aria-labelledby="handover-heading">
        <div className="container-main">
          <SectionHeader
            id="handover-heading"
            light
            label="Handover"
            title="From first call to first shift."
            subtitle="A straightforward handover, so your plant keeps producing while we take over the boiler operations."
          />
          {/* Numbered because it is a sequence: each step needs the one before it. */}
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {handover.map((step, i) => (
              <li key={step.title} className="border-t border-white/15 pt-5">
                <span className="font-mono text-[12px] text-accent-100">Step {i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Where we work ────────────────────────────────────────────────── */}
      <section className="section-padding" aria-labelledby="where-heading">
        <div className="container-main">
          <SectionHeader
            id="where-heading"
            label="Where we work"
            title="Two offices, close to the plants they serve."
            subtitle="Sterile injectables, API and formulations plants across Telangana and Andhra Pradesh — plus dependable steam support for other process industries."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                a: siteConfig.addresses.hyderabad,
                belts: "IDA Jeedimetla · Patancheru · Genome Valley",
              },
              { a: siteConfig.addresses.vizag, belts: "Parawada and the Vishakhapatnam industrial belt" },
            ].map(({ a, belts }) => (
              <div key={a.label} className="card flex gap-4 p-6">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold">{a.label}</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {a.line1}, {a.line2}
                  </p>
                  <p className="mt-3 font-mono text-[12px] text-text">{belts}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="spec-label">Industries served</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industries.map((name) => (
                <li key={name} className="rounded-md border border-border bg-white px-3.5 py-2 text-sm text-text">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* At the plant. Placeholder imagery until real site photographs replace it. */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <figure key={s.id} className="overflow-hidden rounded-lg border border-border bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 font-mono text-[12px] text-text-muted">{s.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border bg-background-muted" aria-labelledby="faq-heading">
        <div className="container-main grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq-heading" label="Questions" title="What plant heads ask us." />
            <p className="mt-5 text-sm text-text-muted">
              Something else?{" "}
              <Link href="/contact" className="font-semibold text-accent underline underline-offset-4">
                Ask us directly
              </Link>
              .
            </p>
          </div>
          <div className="divide-y divide-border rounded-lg border border-border bg-white lg:col-span-8">
            {homeFaqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-bold text-primary [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="-mt-1 pb-5 text-[15px] leading-7 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
