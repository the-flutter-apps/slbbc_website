import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Clock3,
  MapPin,
  Flame,
  Wrench,
  Users,
  ClipboardCheck,
  Lightbulb,
  Check,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
export const metadata: Metadata = {
  title: "Boiler Operations & Maintenance | Sri Lakshmi Balaji",
  description: siteConfig.description,
};
const icons = [Flame, Wrench, Users, ClipboardCheck, Lightbulb];
export default function HomePage() {
  return (
    <div className="redesign-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: ["Hyderabad", "Vishakhapatnam"],
          }),
        }}
      />
      <section className="industrial-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> YOUR PARTNER IN CONTINUOUS
            PRODUCTION
          </p>
          <h1 id="home-title">
            Your boilers.
            <br />
            Our expertise.
            <br />
            <span>Non-stop.</span>
          </h1>
          <p className="hero-description">
            Reliable boiler operations, expert maintenance, and the right
            people. Keeping your business moving, every hour of every day.
          </p>
          <div className="hero-actions">
            <Link className="industrial-button" href="/contact">
              Let’s talk operations <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href="/services">
              Explore services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> HYDERABAD <span>/</span> VISAKHAPATNAM
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/Boiler_operation.jpeg"
            alt="Boiler operator beside an industrial boiler and control panel"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <div className="image-topline">
            <span>PRECISION IN EVERY SHIFT.</span>
            <span>01 / SLBBC</span>
          </div>
          <div className="hero-cert">
            <ShieldCheck size={23} />
            <div>
              <strong>IBR-certified expertise</strong>
              <span>Safety at the heart of every operation.</span>
            </div>
          </div>
          <div className="hero-capacity">
            <span>BOILER CAPACITY</span>
            <strong>
              1–10 <small>TON</small>
            </strong>
          </div>
        </div>
      </section>
      <section className="proof-strip" aria-label="Our experience in numbers">
        <div className="proof-intro">
          <span className="eyebrow">BUILT ON EXPERIENCE.</span>
          <strong>Backed by people.</strong>
        </div>
        <div>
          <strong>
            {siteConfig.yearsExperience}
            <em>+</em>
          </strong>
          <span>Years of expertise</span>
        </div>
        <div>
          <strong>
            10<em>+</em>
          </strong>
          <span>Vendor sites</span>
        </div>
        <div>
          <strong>
            85<em>+</em>
          </strong>
          <span>Skilled employees</span>
        </div>
        <div>
          <strong>
            24<em>/</em>7
          </strong>
          <span>Operational support</span>
        </div>
      </section>
      <section className="home-section" aria-labelledby="services-title">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / WHAT WE DO</p>
            <h2 id="services-title">
              One partner.
              <br />
              Every boiler requirement.
            </h2>
          </div>
          <div className="section-aside">
            <p>
              From the first shift to the next inspection, we take care of the
              details that keep your facility running.
            </p>
            <Link className="text-link" href="/services">
              View all services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link
                className="industrial-service"
                href={`/services#${service.id}`}
                key={service.id}
              >
                <div className="service-top">
                  <Icon size={29} strokeWidth={1.4} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <span className="service-bottom">
                  Explore service <ArrowUpRight size={21} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section
        className="commitment-section"
        aria-labelledby="commitment-title"
      >
        <div className="commitment-photo">
          <Image
            src="/images/boiler_maintenance.jpeg"
            alt="Industrial boiler maintenance"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="photo-note">
            <span className="status-dot" /> EXPERTISE ON THE GROUND. EVERY DAY.
          </div>
        </div>
        <div className="commitment-copy">
          <p className="eyebrow">02 / THE SLBBC COMMITMENT</p>
          <h2 id="commitment-title">
            We look after your boilers.
            <br />
            <span>You focus on your business.</span>
          </h2>
          <p>
            For over two decades, Sri Lakshmi Balaji Boiler Contractor has
            supported continuous production across Telangana and Andhra Pradesh.
          </p>
          <div className="commitment-item">
            <Clock3 />
            <div>
              <h3>Every shift, covered.</h3>
              <p>
                Round-the-clock operations with a dedicated, qualified team.
              </p>
            </div>
          </div>
          <div className="commitment-item">
            <ShieldCheck />
            <div>
              <h3>Compliance, built in.</h3>
              <p>
                IBR-certified manpower with PF, ESI, and statutory benefits.
              </p>
            </div>
          </div>
          <Link className="text-link" href="/about">
            Get to know SLBBC <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section
        className="home-section industries-section"
        aria-labelledby="industry-title"
      >
        <div className="section-top">
          <div>
            <p className="eyebrow">03 / INDUSTRIES WE SERVE</p>
            <h2 id="industry-title">
              Behind the industries
              <br />
              that move us forward.
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Deep roots in pharmaceutical manufacturing. Dependable steam
              support across essential industries.
            </p>
            <Link className="text-link" href="/industries">
              Explore our experience <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="industry-list">
          {[
            "Pharmaceuticals & APIs",
            "Sterile injectables",
            "Formulations & CRAM",
            "Chemical processing",
            "Food & beverage",
            "Textile manufacturing",
          ].map((name, i) => (
            <Link href="/industries" key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <ArrowUpRight size={23} />
            </Link>
          ))}
        </div>
      </section>
      <section className="compliance-band" aria-label="Registrations">
        <span>CONFIDENCE AT EVERY LEVEL</span>
        {[
          "IBR-certified manpower",
          "GST registered",
          "PF & ESI",
          "Statutory compliance",
        ].map((t) => (
          <span key={t}>
            <Check size={16} />
            {t}
          </span>
        ))}
      </section>
      <section className="home-cta">
        <p className="eyebrow">LET’S KEEP YOUR BUSINESS MOVING</p>
        <div>
          <h2>
            Your next shift.
            <br />
            Our next commitment.
          </h2>
          <Link className="industrial-button light-button" href="/contact">
            Discuss your requirements <ArrowUpRight size={20} />
          </Link>
        </div>
        <p>
          Tell us about your facility. We’ll help you build the right operations
          plan.
        </p>
      </section>
    </div>
  );
}
