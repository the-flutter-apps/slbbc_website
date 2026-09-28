import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { iconFor } from "@/components/shared/icons";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { siteConfig, ogImage } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us — Sri Lakshmi Balaji Boiler Contractor",
  description:
    "Over two decades of boiler maintenance and services (1–10 Ton) across Hyderabad and Vishakhapatnam. We undertake round-the-clock boiler operations with our own manpower and provide ESI, PF, and statutory benefits.",
  alternates: { canonical: "/about/" },
  openGraph: {
    images: [ogImage],
    url: "/about/",
    title: "About Sri Lakshmi Balaji Boiler Contractor",
    description:
      "20+ years of boiler O&M experience. Contract boiler operations with 24/7 manpower, ESI, PF, and full statutory compliance.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://slbbc.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://slbbc.in/about" },
  ],
};

const values = [
  {
    icon: "Shield",
    title: "Safety First",
    description:
      "No production target overrides safety. Every operator follows SOPs, wears PPE, and is trained to handle emergencies — always.",
  },
  {
    icon: "Clock",
    title: "Reliability",
    description:
      "We commit to shift coverage and we deliver. No vacant shifts, no last-minute surprises — you can build your operations plan around us.",
  },
  {
    icon: "ClipboardCheck",
    title: "Compliance",
    description:
      "IBR regulations are not optional. We maintain 100% certification compliance across our workforce and proactively manage statutory renewals.",
  },
  {
    icon: "Handshake",
    title: "Long-term Partnerships",
    description:
      "We're not a staffing agency. We invest in understanding your facility and build lasting operational partnerships with our clients.",
  },
];

const certifications = [
  { label: "IBR Certified Manpower", detail: "Indian Boiler Regulations" },
  { label: "GST Registered", detail: `GSTIN: ${siteConfig.gstin}` },
  { label: "PF Registered", detail: "Employees' Provident Fund" },
  { label: "ESI Registered", detail: "Employees' State Insurance" },
  { label: "Contract Labour Act", detail: "Compliant contractor registration" },
];

const founder = {
  name: "Nemili Gundam Gora",
  initials: "NG",
  role: "Founder",
  /** Personal experience, longer than the firm's own age. */
  yearsExperience: 30,
};

/**
 * The firm is a sole proprietorship. The legal name on the GST registration is
 * the proprietor's, not the founder's — stated here because it is the name any
 * verification of the business (GSTIN lookup, D-U-N-S, Play Console) resolves
 * to, and a site that named someone else as proprietor contradicted it.
 */
const proprietor = "Ramanamma Gorra";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        breadcrumb={[{ label: "About" }]}
        badge={`${siteConfig.yearsExperience}+ years in boiler houses`}
        title="Built on safety. Run on reliability."
        subtitle="More than two decades of boiler maintenance and services, from 1 Ton to 10 Ton boilers — aligned with your business so operations run without interruption."
        specs={[
          { label: "Constitution", value: "Sole proprietorship" },
          { label: "GSTIN", value: siteConfig.gstin },
          { label: "Experience", value: `${siteConfig.yearsExperience}+ years` },
          { label: "Offices", value: "Hyderabad · Vizag" },
        ]}
      />

      {/* Our story */}
      <section className="section-padding" aria-labelledby="story-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="section-label">Our story</p>
              <h2 id="story-heading" className="mt-3 text-display-md font-bold">
                Two decades of boiler expertise, built on trust.
              </h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-7 text-text-muted">
                <p>
                  Having more than two decades of experience in boiler maintenance and services ranging from 1 Ton
                  to 10 Ton boilers, we enable our clients to excel in their continuous delivery by providing
                  continuous support.
                </p>
                <p>
                  We undertake the contract of boiler operations and provide round the clock operations, maintaining
                  boilers with our own manpower. We provide ESI, PF and other statutory benefits to our employees —
                  a stable, motivated workforce at every client site.
                </p>
                <p>
                  Sri Lakshmi Balaji Boiler Contractor has grown to serve 10+ manufacturing facilities across
                  Hyderabad and Vishakhapatnam, deploying 85+ professionals. Our growth has been driven by client
                  trust — most of our expansions come through referrals from existing partners.
                </p>
              </div>
            </div>
            <figure className="lg:col-span-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border bg-background-muted">
                <Image
                  src="/images/inspection_w.png"
                  alt="Industrial boiler room — technician in PPE conducting inspection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </figure>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding border-y border-border bg-background-muted" aria-labelledby="values-heading">
        <Container>
          <SectionHeader
            label="Mission & values"
            title="What guides every decision we make."
            subtitle="Four principles that define how we operate — on every shift, at every site."
            id="values-heading"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = iconFor(v.icon);
              return (
                <div key={v.title} className="bg-white p-7">
                  <Icon size={22} className="text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section-padding" aria-labelledby="leadership-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader label="Leadership" title="Led by experience." id="leadership-heading" />
            </div>
            <div className="lg:col-span-8">
              <div className="card overflow-hidden">
                <div className="flex items-center gap-5 border-b border-border p-6">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-white"
                    aria-hidden="true"
                  >
                    {founder.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="spec-label mt-1">{founder.role}</p>
                  </div>
                </div>
                <div className="space-y-3 p-6 text-[15px] leading-7 text-text-muted">
                  <p>
                    {founder.name} brings more than {founder.yearsExperience} years of hands-on experience in
                    industrial boiler operations — starting on the floor as a boiler operator, then earning both 2nd
                    Class and 1st Class Boiler Operator certification before moving into contracting. SLBBC was
                    founded to professionalise boiler contracting for the pharmaceutical industry, combining rigorous
                    safety standards with operational reliability.
                  </p>
                </div>
                <dl className="grid border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-border">
                  <div className="px-6 py-4">
                    <dt className="spec-label">Certification</dt>
                    <dd className="mt-1 font-mono text-[13px] text-primary">1st Class Boiler Operator</dd>
                  </div>
                  <div className="border-t border-border px-6 py-4 sm:border-t-0">
                    <dt className="spec-label">Proprietor of record</dt>
                    <dd className="mt-1 font-mono text-[13px] text-primary">{proprietor}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footprint */}
      <section className="section-padding border-y border-border bg-background-muted" aria-labelledby="footprint-heading">
        <Container>
          <SectionHeader
            label="Our footprint"
            title="Operating across two major pharma hubs."
            subtitle="Hyderabad (Telangana) and Vishakhapatnam (Andhra Pradesh) — two of India's most significant pharmaceutical manufacturing clusters."
            id="footprint-heading"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                office: siteConfig.addresses.hyderabad,
                kind: "Head office",
                detail:
                  "Primary operations hub. Serving 7+ pharma manufacturing facilities across Genome Valley, IDA Jeedimetla, and Patancheru.",
              },
              {
                office: siteConfig.addresses.vizag,
                kind: "Site office",
                detail: "Supporting 3+ manufacturing clients in the JNPC and surrounding industrial corridors.",
              },
            ].map(({ office, kind, detail }) => (
              <a
                key={office.label}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${office.line1}, ${office.line2}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex flex-col p-6 transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" aria-hidden="true" />
                  <span className="spec-label">{kind}</span>
                </span>
                <span className="mt-3 font-display text-2xl font-bold text-primary">{office.label}</span>
                <span className="mt-1 text-sm text-text-muted">
                  {office.line1}, {office.line2}
                </span>
                <span className="mt-4 text-sm leading-6 text-text">{detail}</span>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Open in Google Maps{" "}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Registrations */}
      <section className="section-padding" aria-labelledby="cert-heading">
        <Container>
          <SectionHeader
            label="Registrations & compliance"
            title="Fully registered and compliant."
            subtitle="Every statutory registration a responsible boiler contracting operation in India needs."
            id="cert-heading"
          />
          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <ul className="divide-y divide-border">
              {certifications.map((cert) => (
                <li key={cert.label} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:grid-cols-12">
                  <p className="font-semibold text-primary sm:col-span-4">{cert.label}</p>
                  <p className="hidden font-mono text-[13px] text-text-muted sm:col-span-6 sm:block">{cert.detail}</p>
                  <span className="flex items-center justify-end gap-2 sm:col-span-2">
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-success-text sm:inline">
                      In place
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success-bg text-success-text">
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                  </span>
                  <p className="col-span-2 -mt-2 font-mono text-[12px] text-text-muted sm:hidden">{cert.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Work with a contractor you can hold to account."
        subtitle="Let's discuss how SLBBC can take ownership of your boiler operations."
        primaryCTA={{ label: "Request a site survey", href: "/contact" }}
        secondaryCTA={{ label: "Our services", href: "/services" }}
      />
    </>
  );
}
