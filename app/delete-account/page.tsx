import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Delete your SLBBC Connect account | SLBBC",
  description:
    "How to request deletion of your SLBBC Connect account and the data associated with it.",
};

export default function DeleteAccountPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24" aria-labelledby="delete-heading">
      <Container>
        <div className="max-w-2xl mx-auto prose-style space-y-8">
          <header className="space-y-2">
            <p className="section-label">SLBBC Connect</p>
            <h1 id="delete-heading">Delete your account</h1>
            <p className="text-text-muted text-sm">
              For the <strong>SLBBC Connect</strong> Android app, published by
              Sri Lakshmi Balaji Boiler Contractor.
            </p>
          </header>

          <div className="space-y-6 text-text-muted leading-relaxed">
            <section aria-labelledby="how-heading">
              <h2 id="how-heading" className="text-xl font-semibold text-text mb-2">
                How to request deletion
              </h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Send an email to{" "}
                  <a
                    href={`mailto:${siteConfig.email}?subject=Delete%20my%20SLBBC%20Connect%20account`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  with the subject <strong>&ldquo;Delete my SLBBC Connect account&rdquo;</strong>.
                </li>
                <li>
                  Include the <strong>mobile number</strong> you use to sign in, and
                  your <strong>employee code</strong> if you know it.
                </li>
                <li>
                  We will confirm your identity — usually by calling the number on
                  your record — and act within <strong>30 days</strong>.
                </li>
              </ol>
              <p className="mt-4">
                You can also ask your supervisor or the office to raise the request
                for you. You do not need to send the email yourself.
              </p>
            </section>

            <section aria-labelledby="deleted-heading">
              <h2 id="deleted-heading" className="text-xl font-semibold text-text mb-2">
                What is deleted
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your app account and your ability to sign in</li>
                <li>Sign-in sessions and tokens held on our servers</li>
                <li>The device identifier recorded by the app</li>
                <li>Location readings taken when attendance was recorded</li>
                <li>Documents you uploaded through the app yourself</li>
              </ul>
            </section>

            <section aria-labelledby="kept-heading">
              <h2 id="kept-heading" className="text-xl font-semibold text-text mb-2">
                What we must keep, and for how long
              </h2>
              <p>
                We cannot delete everything, and it is fairer to say so plainly.
                Indian labour, PF, ESI and tax law require an employer to retain
                employment and wage records, and those obligations do not end because
                an app account is closed.
              </p>
              <p className="mt-3">
                So we keep your <strong>employment record, attendance, payslips and
                statutory contributions</strong> for as long as the law requires —
                generally up to <strong>eight years</strong> after your employment
                ends. These are the same records we would hold if the app had never
                existed.
              </p>
              <p className="mt-3">
                Everything not covered by that obligation is deleted, and we will tell
                you what has been retained and why.
              </p>
            </section>

            <section aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-xl font-semibold text-text mb-2">
                Questions
              </h2>
              <p>
                Sri Lakshmi Balaji Boiler Contractor —{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
              <p className="mt-3">
                The full{" "}
                <a href="/app-privacy" className="text-primary hover:underline">
                  SLBBC Connect privacy policy
                </a>{" "}
                explains everything the app collects and why.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
