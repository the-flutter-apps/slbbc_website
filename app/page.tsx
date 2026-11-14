import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Clock,
  Factory,
  Flame,
  FlaskConical,
  HardHat,
  Lightbulb,
  MapPin,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Motion";
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
 * Every credential below is something this site already states elsewhere —
 * the registrations and the FAQ. Add one only when the claim is true and
 * stated somewhere a buyer can verify; the GSTIN can be checked on the GST
 * portal.
 */
const credentials = [
  `GSTIN ${siteConfig.gstin}`,
  "GST · PF · ESI registered",
  "Contract Labour Act",
  "IBR 1st & 2nd class operators",
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

const serviceIcons: Record<string, LucideIcon> = {
  Flame,
  Wrench,
  Users,
  ClipboardCheck,
  Lightbulb,
};

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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center overflow-hidden lg:min-h-[85vh]" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" aria-hidden="true" />
        <div
          className="absolute left-10 top-20 h-64 w-64 animate-blob rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-10 h-96 w-96 animate-blob-slow rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-main relative py-16 lg:py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="animate-slide-in-left text-center lg:text-left">
              <p className="section-label mb-6 animate-fade-up animate-delay-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Boiler O&amp;M contractor · Hyderabad &amp; Vishakhapatnam
              </p>
              <h1 id="hero-heading" className="mb-6 text-display-xl text-slate-900">
                Boiler operation for pharma plants,
                <span className="text-gradient mt-2 block">
                  round the clock.
                  <Flame
                    className="ml-2 inline h-9 w-9 -translate-y-1 text-brand-600 sm:h-11 sm:w-11"
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty lg:mx-0">
                We run, maintain and staff industrial boilers for pharma and process plants — IBR-certified
                operators on every shift, with PF, ESI and statutory compliance handled for you.
              </p>
              <div className="flex animate-fade-up flex-wrap justify-center gap-3 animate-delay-400 lg:justify-start">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                  Contact us <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn-secondary px-8 py-4 text-base">
                  See our services
                </Link>
              </div>
              <div className="mt-12 grid animate-fade-in grid-cols-4 gap-4 animate-delay-600">
                {siteConfig.stats.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg animate-slide-in-right animate-delay-200 lg:max-w-none">
              <div className="relative animate-drift">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-300/40">
                  <div className="relative aspect-[5/4] animate-breathe">
                    <Image
                      src="/images/certified_manpower.jpeg"
                      alt="SLBBC boiler operators in uniform at a client plant"
                      fill
                      priority
                      sizes="(min-width: 1024px) 45vw, (min-width: 512px) 512px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 left-2 animate-bob-up rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50 sm:-left-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-green-100 p-2">
                      <MapPin className="h-5 w-5 text-green-600" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">Hyderabad · Vizag</span>
                      <span className="block text-xs text-slate-500">Two offices near the plants</span>
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 right-2 animate-bob rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50 sm:-right-4">
                  <div className="flex items-center gap-2">
                    <span className="flex -space-x-2" aria-hidden="true">
                      {[HardHat, Flame, Wrench].map((Icon, i) => (
                        <span
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-brand-500 text-white"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      ))}
                    </span>
                    <span className="text-sm font-medium text-slate-700">IBR 1st &amp; 2nd class</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ──────────────────────────────────────────────────── */}
      <section aria-label="Registrations" className="border-y border-slate-100 bg-white/80">
        <Reveal y={10} className="container-main flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          <p className="text-sm font-semibold text-slate-900">Registered &amp; verified</p>
          {credentials.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check size={12} strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="tabular">{c}</span>
            </span>
          ))}
        </Reveal>
      </section>

      {/* ── Why SLBBC ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20" aria-labelledby="why-heading">
        <div className="container-main">
          <SectionHeader
            id="why-heading"
            centered
            className="mb-16"
            title={
              <>
                Why plants choose <span className="text-brand-600">SLBBC</span>
              </>
            }
            subtitle="Plant heads hand us the boiler so they can stop thinking about it. Safe, compliant, uninterrupted steam — so production never waits."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1} lift={8} className="group card-tint p-6">
                <span className="icon-tile mb-4 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="services-heading">
        <div className="container-main">
          <Reveal className="mb-12 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 id="services-heading" className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Our services
              </h2>
              <p className="text-slate-600">Everything your boilers need, under one contract.</p>
            </div>
            <Link href="/services" className="btn-pill shrink-0">
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon] ?? Flame;
              return (
                <Reveal key={s.id} delay={i * 0.1} lift={8} className="group relative overflow-hidden rounded-3xl">
                  <Link href={`/services#${s.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{s.title}</h3>
                          <p className="mt-1 text-sm leading-snug text-white/75">{s.shortDesc}</p>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-brand-700">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            <Reveal
              delay={services.length * 0.1}
              lift={8}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 text-white"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <span className="mb-4 inline-flex rounded-2xl bg-white/15 p-3">
                  <Factory className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-white">Not sure which you need?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Tell us about your boilers — capacity, fuel and shifts — and we&apos;ll suggest a scope at the site
                  survey.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:bg-brand-50"
              >
                Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Coverage ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20" aria-labelledby="coverage-heading">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              id="coverage-heading"
              label="Coverage"
              title="No shift goes vacant."
              subtitle="Boilers don't stop, and neither do we. Every shift is covered by IBR-certified personnel, with replacements arranged so no shift goes vacant."
            />
            <Reveal delay={0.1} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                Replacements arranged in advance
              </span>
            </Reveal>
          </div>

          {/* A week's roster, shifts down and days across. Illustrative, and captioned as such. */}
          <Reveal
            as="figure"
            delay={0.15}
            className="rounded-3xl border border-brand-100 bg-white p-5 shadow-xl shadow-brand-100/50 sm:p-7"
          >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <span className="text-sm font-semibold text-slate-900">Shift roster · one week</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Every shift manned
                </span>
              </div>
              <table className="mt-5 w-full border-separate border-spacing-1.5 text-center">
                <thead>
                  <tr>
                    <th className="w-8" aria-hidden="true" />
                    {DAYS.map((d) => (
                      <th key={d} scope="col" className="text-xs font-medium text-slate-500">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SHIFTS.map((s) => (
                    <tr key={s}>
                      <th scope="row" className="text-xs font-semibold text-slate-700">
                        {s}
                      </th>
                      {DAYS.map((d) => (
                        <td
                          key={d}
                          className="h-10 rounded-xl border border-brand-100 bg-gradient-to-br from-brand-50 to-brand-50 sm:h-12"
                        >
                          <span className="flex items-center justify-center text-brand-600">
                            <Check size={15} strokeWidth={2.5} aria-label={`Shift ${s}, ${d}: manned`} />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="mt-4 text-xs text-slate-500">
                An illustrative week. The shift pattern itself is agreed with each plant at the site survey.
              </figcaption>
          </Reveal>
        </div>
      </section>

      {/* ── Handover ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" aria-labelledby="handover-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeader
            id="handover-heading"
            centered
            className="mb-16"
            title="From first call to first shift"
            subtitle="A straightforward handover, so your plant keeps producing while we take over the boiler operations."
          />
          {/* Numbered because it is a sequence: each step needs the one before it. */}
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {handover.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.1}
                lift={5}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-sm font-bold text-white shadow-lg shadow-brand-300/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Where we work ────────────────────────────────────────────────── */}
      <section className="bg-white py-20" aria-labelledby="where-heading">
        <div className="container-main">
          <SectionHeader
            id="where-heading"
            className="mb-12"
            title="Two offices, close to the plants they serve"
            subtitle="Sterile injectables, API and formulations plants across Telangana and Andhra Pradesh — plus dependable steam support for other process industries."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                a: siteConfig.addresses.hyderabad,
                belts: "IDA Jeedimetla · Patancheru · Genome Valley",
              },
              { a: siteConfig.addresses.vizag, belts: "Parawada and the Vishakhapatnam industrial belt" },
            ].map(({ a, belts }, i) => (
              <Reveal key={a.label} delay={i * 0.1} lift={8} className="group card-tint flex gap-5 p-8">
                <span className="icon-tile h-fit transition-transform group-hover:scale-110">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{a.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {a.line1}, {a.line2}
                  </p>
                  <p className="mt-3 text-sm font-medium text-brand-700">{belts}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <p className="text-sm font-semibold text-slate-900">Industries served</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {industries.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-brand-100 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm shadow-brand-100/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="faq-heading">
        <div className="container-main">
          <SectionHeader
            id="faq-heading"
            centered
            className="mb-12"
            title="What plant heads ask us"
            subtitle="Straight answers on scope, people and compliance."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {homeFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-slate-100 bg-white px-6 shadow-sm transition-shadow duration-300 open:shadow-lg open:shadow-brand-100/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-semibold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-brand-600 group-open:to-brand-800 group-open:text-white">
                      <Plus size={16} aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="-mt-1 pb-5 text-[15px] leading-7 text-slate-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center text-sm text-slate-600">
            Something else?{" "}
            <Link href="/contact" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
