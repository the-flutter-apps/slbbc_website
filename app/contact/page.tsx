import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, ogImage } from "@/content/site";
import { breadcrumbs } from "@/content/schema";

export const metadata: Metadata = {
  title: "Contact SLBBC — Boiler Contractor Hyderabad",
  description:
    "Get in touch with Sri Lakshmi Balaji Boiler Contractor. Request a quote, ask about services, or enquire about careers. Phone, WhatsApp, and email available.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    images: [ogImage],
    url: "/contact/",
    title: "Contact SLBBC — Get a Quote for Boiler O&M Services",
    description:
      "Reach out via phone, WhatsApp, or email. We typically respond within 1 business day.",
  },
};

const breadcrumbJsonLd = breadcrumbs("Contact", "/contact/");

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    desc: "Call us directly — Mon–Sat, 9 AM–5 PM",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero
        breadcrumb={[{ label: "Contact" }]}
        badge="Quotes · Site visits · Support"
        title="Get in touch."
        subtitle="Whether you're looking for a boiler O&M contractor, have a service query, or want to join our team — call, message or write, and a person replies."
      />

      <section className="section-padding" aria-labelledby="offices-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* The contact sheet: every way to reach us, and where we are. */}
            <div className="lg:col-span-5">
              <p className="section-label">Reach us</p>
              <div className="card mt-4 overflow-hidden">
                <ul className="divide-y divide-border">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    const row = (
                      <span className="flex items-start gap-4 px-5 py-4">
                        <Icon size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="spec-label block">{method.label}</span>
                          <span className="mt-1 block break-words font-semibold text-primary">{method.value}</span>
                          <span className="mt-0.5 block text-[13px] text-text-muted">{method.desc}</span>
                        </span>
                      </span>
                    );
                    return (
                      <li key={method.label}>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                            className="block transition-colors hover:bg-background-muted"
                          >
                            {row}
                          </a>
                        ) : (
                          row
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="section-label mt-10">Our offices</p>
              <div className="mt-4 grid gap-3">
                {Object.values(siteConfig.addresses).map((addr) => (
                  <address key={addr.label} className="card flex items-start gap-4 p-5 not-italic">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-primary">{addr.label}</span>
                      <span className="mt-0.5 block text-sm text-text-muted">{addr.line1}</span>
                      <span className="block text-sm text-text-muted">{addr.line2}</span>
                    </span>
                  </address>
                ))}
              </div>

              <dl className="mt-4 flex items-baseline justify-between gap-4 rounded-lg border border-dashed border-border-strong px-5 py-3.5">
                <dt className="spec-label">GSTIN</dt>
                <dd className="font-mono text-[13px] text-primary">{siteConfig.gstin}</dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              <p className="section-label">Send us a message</p>
              <h2 id="offices-heading" className="mt-3 text-display-md font-bold">
                Request a site survey or ask a question.
              </h2>
              <div className="card mt-8 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
