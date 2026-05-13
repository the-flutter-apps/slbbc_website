import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ValueCard } from "@/components/sections/ValueCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About Us — Sri Lakshmi Balaji Boiler Contractor",
  description:
    "Over a decade of boiler maintenance and services (1–10 Ton) across Hyderabad and Vishakhapatnam. We undertake round-the-clock boiler operations with our own manpower and provide ESI, PF, and statutory benefits.",
  openGraph: {
    title: "About Sri Lakshmi Balaji Boiler Contractor",
    description:
      "10+ years of boiler O&M experience. Contract boiler operations with 24/7 manpower, ESI, PF, and full statutory compliance.",
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
  { label: "GST Registered", detail: "GSTIN: 36XXXXXXXXXXXXXXX" },
  { label: "PF Registered", detail: "Employees' Provident Fund" },
  { label: "ESI Registered", detail: "Employees' State Insurance" },
  { label: "Contract Labour Act", detail: "Compliant contractor registration" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        badge="About Us"
        title="Built on safety. Run on reliability."
        subtitle="Having more than a decade of experience in boiler maintenance and services ranging from 1 Ton to 10 Ton, Sri Lakshmi Balaji Boiler Contractor aligns with your business to keep operations running without interruption."
        dark
      />

      {/* Our Story */}
      <section className="py-16 md:py-24" aria-labelledby="story-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="section-label">Our Story</p>
              <h2 id="story-heading">
                A decade of boiler expertise, built on trust
              </h2>
              <p className="text-text-muted text-body-lg leading-relaxed">
                Having more than a decade of experience in the area of boiler
                maintenance and services ranging from 1 Ton to 10 Ton boilers,
                we enable our clients to excel in their continuous delivery by
                providing continuous support.
              </p>
              <p className="text-text-muted leading-relaxed">
                We undertake the contract of boiler operations and provide
                round the clock operations, maintaining boilers with our own
                manpower. We provide ESI, PF and other statutory benefits to
                our employees — ensuring a stable, motivated workforce at
                every client site.
              </p>
              <p className="text-text-muted leading-relaxed">
                Sri Lakshmi Balaji Boiler Contractor has grown to serve
                10+ manufacturing facilities across Hyderabad and
                Vishakhapatnam, deploying 85+ professionals. Our growth has
                been driven entirely by client trust — most of our expansions
                come through referrals from existing partners.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/2]">
              <Image
                src="/images/inspection_w.png"
                alt="Industrial boiler room — technician in PPE conducting inspection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="values-heading">
        <Container>
          <SectionHeader
            label="Mission & Values"
            title="What guides every decision we make"
            subtitle="Four principles that define how we operate — on every shift, at every site."
            id="values-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <ValueCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                description={v.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24" aria-labelledby="leadership-heading">
        <Container>
          <SectionHeader
            label="Leadership"
            title="Led by experience"
            centered={false}
            id="leadership-heading"
          />
          <div className="mt-8 max-w-lg">
            <div className="flex items-start gap-5 p-6 rounded-xl border border-border bg-white shadow-card">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-primary" aria-hidden="true">
                  FN
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text">[Founder Name]</h3>
                <p className="text-sm text-text-muted mb-3">
                  Proprietor &amp; Founder
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  [Founder Name] brings over [N] years of hands-on experience
                  in industrial boiler operations and maintenance. He founded
                  SLBBC with a vision to professionalise boiler contracting for
                  the pharmaceutical industry — combining rigorous safety
                  standards with operational reliability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Footprint */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="footprint-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="section-label">Our Footprint</p>
              <h2 id="footprint-heading">Operating across two major pharma hubs</h2>
              <p className="text-text-muted leading-relaxed">
                SLBBC operates across Hyderabad (Telangana) and Vishakhapatnam
                (Andhra Pradesh) — two of India&apos;s most significant
                pharmaceutical manufacturing clusters.
              </p>
              <div className="space-y-3">
                {[
                  {
                    city: "Hyderabad, Telangana",
                    detail:
                      "Head office and primary operations hub. Serving 7+ pharma manufacturing facilities across Genome Valley, IDA Jeedimetla, and Patancheru.",
                  },
                  {
                    city: "Vishakhapatnam, Andhra Pradesh",
                    detail:
                      "Site office supporting 3+ manufacturing clients in the JNPC and surrounding industrial corridors.",
                  },
                ].map((loc) => (
                  <div key={loc.city} className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-text text-sm">{loc.city}</p>
                      <p className="text-xs text-text-muted leading-relaxed mt-0.5">
                        {loc.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-background-muted border border-border aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-6 space-y-2">
                <MapPin size={40} className="text-primary mx-auto" aria-hidden="true" />
                <p className="text-sm font-semibold text-text">
                  Hyderabad &amp; Vishakhapatnam
                </p>
                <p className="text-xs text-text-muted">
                  [Map placeholder — real map will be embedded here]
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24" aria-labelledby="cert-heading">
        <Container>
          <SectionHeader
            label="Certifications & Compliance"
            title="Fully registered and compliant"
            subtitle="SLBBC maintains all statutory registrations required for a responsible boiler contracting operation in India."
            id="cert-heading"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-text text-sm">{cert.label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Work with a contractor you can trust"
        subtitle="Let's discuss how SLBBC can take ownership of your boiler operations."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
      />
    </>
  );
}
