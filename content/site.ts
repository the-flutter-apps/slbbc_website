/** Years of boiler O&M experience. Change it here and nowhere else. */
const YEARS_EXPERIENCE = 20;

export const siteConfig = {
  name: "Sri Lakshmi Balaji Boiler Contractor",
  shortName: "SLB",
  tagline: "Aligning with your business",
  description:
    "Having more than two decades of experience in the area of Boiler maintenance and services ranging from 1 Ton to 10 Ton boilers, we enable our clients to excel in their continuous delivery by providing continuous support across Hyderabad and Vishakhapatnam.",
  url: "https://slbbc.in",
  // NEEDS CONFIRMATION: 2013 contradicts the 20+ years stated sitewide.
  // Not rendered anywhere until corrected — see Footer.tsx.
  foundingYear: "2013",
  yearsExperience: YEARS_EXPERIENCE,
  gstin: "36BGKPG7459J2ZU",
  phone: "+91 93907 45568",
  whatsapp: "+919390745568",
  email: "boilercontractor@gmail.com",
  officeHours: "Mon–Sat, 9:00 AM – 5:00 PM IST",
  addresses: {
    hyderabad: {
      label: "Hyderabad",
      line1: "Suraram, IDA Jeedimetla",
      line2: "Hyderabad, Telangana – 500 055",
      mapQuery: "Hyderabad, Telangana, India",
    },
    vizag: {
      label: "Vishakhapatnam Office",
      line1: "Parawada",
      line2: "Vishakhapatnam, Andhra Pradesh – 531021",
      mapQuery: "Visakhapatnam, Andhra Pradesh, India",
    },
  },
  stats: [
    { value: 10, suffix: "+", label: "Vendor Sites" },
    { value: 85, suffix: "+", label: "Employees" },
    { value: YEARS_EXPERIENCE, suffix: "+", label: "Years of Experience" },
    { value: 0, suffix: "", label: "LTI Incidents" },
  ],
  social: {
    linkedin: "#",
    whatsapp: "https://wa.me/919390745568",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Boiler Operation", href: "/services#operation" },
    { label: "Boiler Maintenance", href: "/services#maintenance" },
    { label: "Manpower Supply", href: "/services#manpower" },
    { label: "Compliance Management", href: "/services#compliance" },
    { label: "Consultation", href: "/services#consultation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries Served", href: "/industries" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
