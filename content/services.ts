export const services = [
  {
    id: "operation",
    title: "Boiler Operation",
    shortDesc: "Round-the-clock manned operations by IBR-certified professionals.",
    description:
      "Our trained operators ensure your boilers run at peak efficiency, 24 hours a day, 365 days a year. Every shift is covered by IBR-certified personnel who follow SOPs tailored to your facility.",
    points: [
      "24/7 shift-based manned operations",
      "IBR-certified operators for every shift",
      "SOP adherence and daily log maintenance",
      "Real-time parameter monitoring and adjustment",
      "Emergency response readiness at all times",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    imageAlt: "Boiler control room with operators monitoring gauges — PPE worn",
    icon: "Flame",
  },
  {
    id: "maintenance",
    title: "Boiler Maintenance",
    shortDesc: "Preventive and breakdown maintenance to maximise uptime.",
    description:
      "Downtime costs pharma plants heavily. Our maintenance teams execute structured preventive schedules while remaining on standby for rapid breakdown response, minimising unplanned shutdowns.",
    points: [
      "Scheduled preventive maintenance (daily, weekly, monthly, annual)",
      "Annual boiler overhauling and tube inspection",
      "Rapid breakdown response — average response within 2 hours",
      "Spare parts inventory management at your site",
      "Detailed maintenance logs and digital records",
    ],
    image:
      "https://images.unsplash.com/photo-1565117541001-12aed69cc7de?w=800&q=80",
    imageAlt: "Technician inspecting industrial boiler components with PPE",
    icon: "Wrench",
  },
  {
    id: "manpower",
    title: "IBR-Certified Manpower Supply",
    shortDesc: "Qualified Operators, Firemen, and Helpers — deployed and managed.",
    description:
      "Sourcing, verifying, and managing IBR-certified boiler manpower is complex. SLBBC handles end-to-end manpower supply — from recruitment and credential verification to payroll and statutory compliance.",
    points: [
      "IBR 1st Class and 2nd Class Boiler Operators",
      "Boiler Firemen and Helpers for all shift requirements",
      "Credential verification and IBR licence validation",
      "On-time salary disbursement and statutory benefits (PF, ESI, PT)",
      "Replacement guarantee — zero shift vacancies",
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    imageAlt:
      "Industrial workers in full PPE gear at a manufacturing facility",
    icon: "Users",
  },
  {
    id: "compliance",
    title: "Compliance Management",
    shortDesc: "IBR statutory compliance, inspections, and documentation — handled.",
    description:
      "Boilers in India are regulated under the Indian Boiler Regulations. We manage the entire compliance lifecycle — from scheduling statutory inspections to maintaining renewal documentation — so your plant stays audit-ready.",
    points: [
      "IBR annual statutory inspection coordination",
      "Boiler licence renewal and liaison with Boiler Inspectorate",
      "Pre-inspection readiness checks and punch list closure",
      "Statutory documentation and record management",
      "Labour law compliance (PF, ESI, PT, Contract Labour Act)",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Engineer reviewing compliance documents and checklists",
    icon: "ClipboardCheck",
  },
  {
    id: "consultation",
    title: "Boiler Consultation",
    shortDesc: "Expert guidance for new installations, retrofits, and efficiency audits.",
    description:
      "Planning a new boiler installation or looking to improve efficiency of existing systems? Our experienced team provides technical consultation to help you make informed decisions.",
    points: [
      "New boiler installation — specification and vendor evaluation",
      "Energy efficiency audits and fuel consumption analysis",
      "Boiler room layout and safety system review",
      "Operator staffing model design for new facilities",
      "Compliance-readiness assessment for greenfield projects",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    imageAlt: "Engineers reviewing industrial plant blueprints",
    icon: "Lightbulb",
  },
];

export type Service = (typeof services)[number];
