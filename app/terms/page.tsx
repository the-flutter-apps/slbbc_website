import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service | SLBBC",
  description:
    "Terms of Service for the SLBBC website — usage terms for slbbc.in.",
  robots: { index: false },
};

export default function TermsPage() {
  const effectiveDate = "1 January 2025";
  return (
    <section className="py-16 md:py-24" aria-labelledby="terms-heading">
      <Container>
        <div className="max-w-2xl mx-auto space-y-8">
          <header className="space-y-2">
            <p className="section-label">Legal</p>
            <h1 id="terms-heading">Terms of Service</h1>
            <p className="text-text-muted text-sm">
              Effective date: {effectiveDate}
            </p>
          </header>

          <div className="space-y-6 text-text-muted leading-relaxed">
            <section aria-labelledby="acceptance-heading">
              <h2 id="acceptance-heading" className="text-xl font-semibold text-text mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website (slbbc.in), you accept and
                agree to be bound by these Terms of Service. If you do not
                agree, please do not use this website.
              </p>
            </section>

            <section aria-labelledby="use-terms-heading">
              <h2 id="use-terms-heading" className="text-xl font-semibold text-text mb-2">
                2. Use of This Website
              </h2>
              <p>
                This website is provided for informational purposes only. You
                may use this website to learn about SLBBC&apos;s services and to
                contact us. You may not use this website for any unlawful
                purpose or in any manner that could damage, disable, or impair
                the website.
              </p>
            </section>

            <section aria-labelledby="ip-heading">
              <h2 id="ip-heading" className="text-xl font-semibold text-text mb-2">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                and images — is the property of Sri Lakshmi Balaji Boiler
                Contractor or its content suppliers and is protected by
                applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works without express written
                permission.
              </p>
            </section>

            <section aria-labelledby="disclaimer-heading">
              <h2 id="disclaimer-heading" className="text-xl font-semibold text-text mb-2">
                4. Disclaimer of Warranties
              </h2>
              <p>
                This website is provided on an &quot;as is&quot; basis without
                warranties of any kind, either express or implied. SLBBC does
                not warrant that the website will be error-free, uninterrupted,
                or free of viruses or other harmful components.
              </p>
            </section>

            <section aria-labelledby="liability-heading">
              <h2 id="liability-heading" className="text-xl font-semibold text-text mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                SLBBC shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of your use of or
                inability to use this website. Service-specific terms and
                liabilities are governed by the contracts signed between SLBBC
                and its clients.
              </p>
            </section>

            <section aria-labelledby="links-heading">
              <h2 id="links-heading" className="text-xl font-semibold text-text mb-2">
                6. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites. SLBBC
                is not responsible for the content or privacy practices of those
                sites and provides links for convenience only.
              </p>
            </section>

            <section aria-labelledby="governing-heading">
              <h2 id="governing-heading" className="text-xl font-semibold text-text mb-2">
                7. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of courts in Hyderabad, Telangana.
              </p>
            </section>

            <section aria-labelledby="contact-terms-heading">
              <h2 id="contact-terms-heading" className="text-xl font-semibold text-text mb-2">
                8. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a
                  href="mailto:info@slbbc.in"
                  className="text-primary hover:underline"
                >
                  info@slbbc.in
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
