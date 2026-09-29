import { siteConfig } from "@/content/site";

/*
 * The business as search engines should understand it: defined once, here, and
 * referred to by @id from every other page — so Google reads one company with
 * two offices, not four slightly different copies of it (the home page, the
 * contact page and the services page each used to describe their own).
 *
 * Every value comes from siteConfig. Nothing in this file is a new claim.
 */

const base = siteConfig.url;

export const schemaIds = {
  organization: `${base}/#organization`,
  website: `${base}/#website`,
  hyderabad: `${base}/#hyderabad`,
  vizag: `${base}/#vizag`,
};

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "17:00",
};

const knowsAbout = [
  "Boiler operation",
  "Boiler maintenance",
  "Indian Boiler Regulations (IBR) compliance",
  "IBR-certified boiler operator supply",
  "Pharmaceutical utility operations",
];

/** One office: a place a customer can find, with the company behind it. */
function office(id: string, city: string, streetAddress: string, region: string, postalCode: string) {
  return {
    "@type": "ProfessionalService",
    "@id": id,
    name: `${siteConfig.name}, ${city}`,
    url: `${base}/`,
    image: `${base}/og.png`,
    logo: `${base}/icon.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: "IN",
    },
    areaServed: { "@type": "State", name: region },
    openingHoursSpecification: openingHours,
    knowsAbout,
    parentOrganization: { "@id": schemaIds.organization },
  };
}

/** Emitted on every page by the root layout. */
export const businessGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": schemaIds.organization,
      name: siteConfig.name,
      alternateName: ["SLBBC", "SLB Boiler Contractor"],
      url: `${base}/`,
      logo: `${base}/icon.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      slogan: siteConfig.tagline,
      description: siteConfig.description,
      taxID: siteConfig.gstin,
      knowsAbout,
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Visakhapatnam" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "te", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": schemaIds.website,
      url: `${base}/`,
      name: siteConfig.name,
      inLanguage: "en-IN",
      publisher: { "@id": schemaIds.organization },
    },
    office(schemaIds.hyderabad, "Hyderabad", siteConfig.addresses.hyderabad.line1, "Telangana", "500055"),
    office(schemaIds.vizag, "Visakhapatnam", siteConfig.addresses.vizag.line1, "Andhra Pradesh", "531021"),
  ],
};

/**
 * "Home › Services" for a page at `path` (with its trailing slash, as the site
 * serves it — the old lists pointed at the slashless address, a redirect).
 */
export function breadcrumbs(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name, item: `${base}${path}` },
    ],
  };
}
