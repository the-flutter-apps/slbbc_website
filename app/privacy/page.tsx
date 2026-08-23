import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | SLBBC",
  description:
    "Privacy Policy for Sri Lakshmi Balaji Boiler Contractor — how we collect, use, and protect your personal information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  const effectiveDate = "1 January 2025";
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24" aria-labelledby="privacy-heading">
      <Container>
        <div className="max-w-2xl mx-auto prose-style space-y-8">
          <header className="space-y-2">
            <p className="section-label">Legal</p>
            <h1 id="privacy-heading">Privacy Policy</h1>
            <p className="text-text-muted text-sm">
              Effective date: {effectiveDate}
            </p>
          </header>

          <div className="space-y-6 text-text-muted leading-relaxed">
            <section aria-labelledby="collect-heading">
              <h2 id="collect-heading" className="text-xl font-semibold text-text mb-2">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly — such as your name,
                email address, phone number, and message — when you fill out the
                contact form or career application on this website. We do not
                collect any information automatically beyond standard web server
                logs (IP address, browser type, pages visited).
              </p>
            </section>

            <section aria-labelledby="use-heading">
              <h2 id="use-heading" className="text-xl font-semibold text-text mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Information collected through our contact and career forms is
                used solely to respond to your enquiry or process your job
                application. We do not use your information for marketing
                purposes without your consent, and we do not sell or share your
                information with third parties except as required by law.
              </p>
            </section>

            <section aria-labelledby="retention-heading">
              <h2 id="retention-heading" className="text-xl font-semibold text-text mb-2">
                3. Data Retention
              </h2>
              <p>
                We retain enquiry and application data for up to 12 months
                after the last communication, after which it is deleted. You
                may request deletion of your data at any time by contacting us
                at{" "}
                <a
                  href="mailto:info@slbbc.in"
                  className="text-primary hover:underline"
                >
                  info@slbbc.in
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="cookies-heading">
              <h2 id="cookies-heading" className="text-xl font-semibold text-text mb-2">
                4. Cookies
              </h2>
              <p>
                This website does not use tracking cookies or third-party
                analytics. It is a static website with no persistent client-side
                storage beyond what the browser requires for normal operation.
              </p>
            </section>

            <section aria-labelledby="security-heading">
              <h2 id="security-heading" className="text-xl font-semibold text-text mb-2">
                5. Security
              </h2>
              <p>
                We take reasonable precautions to protect your information.
                However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="text-xl font-semibold text-text mb-2">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or request deletion of
                your personal information held by us. To exercise these rights,
                please contact us at{" "}
                <a
                  href="mailto:info@slbbc.in"
                  className="text-primary hover:underline"
                >
                  info@slbbc.in
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="changes-heading">
              <h2 id="changes-heading" className="text-xl font-semibold text-text mb-2">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section aria-labelledby="contact-legal-heading">
              <h2 id="contact-legal-heading" className="text-xl font-semibold text-text mb-2">
                8. Contact
              </h2>
              <p>
                For privacy-related queries, contact us at{" "}
                <a
                  href="mailto:info@slbbc.in"
                  className="text-primary hover:underline"
                >
                  info@slbbc.in
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
