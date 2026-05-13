import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Clock, Building2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact SLBBC — Boiler Contractor Hyderabad",
  description:
    "Get in touch with Sri Lakshmi Balaji Boiler Contractor. Request a quote, ask about services, or enquire about careers. Phone, WhatsApp, and email available.",
  openGraph: {
    title: "Contact SLBBC — Get a Quote for Boiler O&M Services",
    description:
      "Reach out via phone, WhatsApp, or email. We typically respond within 1 business day.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  openingHours: "Mo-Sa 09:00-18:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://slbbc.in" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://slbbc.in/contact" },
  ],
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    desc: "Call us directly — Mon–Sat, 9 AM–6 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: siteConfig.social.whatsapp,
    desc: "Quick response for urgent enquiries",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    desc: "We respond within 1 business day",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: siteConfig.officeHours,
    href: undefined,
    desc: "Emergency support available 24/7 for existing clients",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Whether you're looking for a boiler O&M contractor, have a service query, or are interested in joining our team — we'd love to hear from you."
        dark
        centered
      />

      {/* Contact methods */}
      <section className="py-16 md:py-24 bg-background-muted" aria-labelledby="contact-methods-heading">
        <Container>
          <SectionHeader
            label="Reach Us"
            title="Multiple ways to connect"
            id="contact-methods-heading"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="card flex flex-col gap-3 h-full border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-0.5">
                      {method.label}
                    </p>
                    <p className="font-semibold text-text text-sm">{method.value}</p>
                    <p className="text-xs text-text-muted mt-1">{method.desc}</p>
                  </div>
                </div>
              );

              if (method.href) {
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="block h-full"
                    aria-label={`${method.label}: ${method.value}`}
                  >
                    {content}
                  </a>
                );
              }
              return <div key={method.label}>{content}</div>;
            })}
          </div>
        </Container>
      </section>

      {/* Offices + Form */}
      <section className="py-16 md:py-24" aria-labelledby="offices-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Office details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="section-label mb-3">Our Offices</p>
                <div className="space-y-5">
                  {Object.values(siteConfig.addresses).map((addr) => (
                    <div
                      key={addr.label}
                      className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2
                          size={17}
                          className="text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <address className="not-italic">
                        <p className="font-semibold text-text text-sm">
                          {addr.label}
                        </p>
                        <p className="text-sm text-text-muted mt-0.5">
                          {addr.line1}
                        </p>
                        <p className="text-sm text-text-muted">{addr.line2}</p>
                      </address>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration info */}
              <div className="p-5 rounded-xl border border-border bg-white text-sm space-y-2">
                <p className="font-semibold text-text text-xs uppercase tracking-wide">
                  Registration Details
                </p>
                <div className="space-y-1 text-text-muted text-xs">
                  <p>
                    <span className="font-medium text-text">GSTIN:</span>{" "}
                    {siteConfig.gstin}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <p className="section-label mb-3">Send Us a Message</p>
              <h2 id="offices-heading" className="mb-6">
                Request a quote or ask a question
              </h2>
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-white shadow-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
