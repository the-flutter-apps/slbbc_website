import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "SLBBC Connect App — Privacy Policy | SLBBC",
  description:
    "Privacy Policy for the SLBBC Connect mobile application — what the app collects, why, and how it is protected.",
};

export default function AppPrivacyPage() {
  const effectiveDate = "23 August 2026";
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24" aria-labelledby="app-privacy-heading">
      <Container>
        <div className="max-w-2xl mx-auto prose-style space-y-8">
          <header className="space-y-2">
            <p className="section-label">Legal</p>
            <h1 id="app-privacy-heading">SLBBC Connect App — Privacy Policy</h1>
            <p className="text-text-muted text-sm">Effective date: {effectiveDate}</p>
          </header>

          <div className="space-y-6 text-text-muted leading-relaxed">
            <section aria-labelledby="scope-heading">
              <h2 id="scope-heading" className="text-xl font-semibold text-text mb-2">
                1. Who this policy is for
              </h2>
              <p>
                This policy covers the <strong>SLBBC Connect</strong> Android
                application, published by Sri Lakshmi Balaji Boiler Contractor
                (&ldquo;SLBBC&rdquo;, &ldquo;we&rdquo;). The app is a workplace tool for
                people employed or engaged by SLBBC. It is not a consumer app and
                is not intended for the general public.
              </p>
              <p className="mt-3">
                Accounts are created by SLBBC from its own employment records.
                You cannot register yourself in the app. The privacy policy for
                the SLBBC website is separate and available at{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  slbbc.in/privacy
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="app-collect-heading">
              <h2 id="app-collect-heading" className="text-xl font-semibold text-text mb-2">
                2. What the app collects from your phone
              </h2>
              <p>The app sends the following to our servers:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>Your mobile number</strong> — used only to sign you in.
                  We send a one-time code to it and match it against the number
                  held in your employment record.
                </li>
                <li>
                  <strong>Location, when you record attendance</strong> — the
                  latitude, longitude and accuracy of your phone at the moment
                  you scan an attendance code, so that a shift can be confirmed
                  as recorded at the workplace. Location is read{" "}
                  <strong>only at that moment</strong>. The app does not track
                  you, does not run in the background, and does not request
                  background-location permission.
                </li>
                <li>
                  <strong>Photographs and documents you choose to upload</strong>{" "}
                  — for example a copy of an identity or training document. The
                  camera is used only when you open the scanner or take a
                  photograph for an upload. The app never opens the camera on its
                  own.
                </li>
                <li>
                  <strong>Basic device information</strong> — an app-generated
                  device identifier, the app version, and the Android version.
                  These are used to detect duplicate or fraudulent attendance
                  records and to diagnose faults. They are not advertising
                  identifiers.
                </li>
              </ul>
            </section>

            <section aria-labelledby="app-shows-heading">
              <h2 id="app-shows-heading" className="text-xl font-semibold text-text mb-2">
                3. What the app shows you from your employment record
              </h2>
              <p>
                The app displays information SLBBC already holds about you as
                your employer: your name and employee code, designation, the
                company you are deployed to, attendance and week-off, payslips
                and wage details, PF, ESI and UAN numbers, bank details, and
                personal details such as date of birth and blood group.
              </p>
              <p className="mt-3">
                <strong>Sensitive identifiers are masked.</strong> Where the app
                shows an Aadhaar number, PAN, or bank account number, it receives
                and displays only a partially hidden value. The full numbers are
                never sent to the phone and are never stored on it.
              </p>
            </section>

            <section aria-labelledby="app-use-heading">
              <h2 id="app-use-heading" className="text-xl font-semibold text-text mb-2">
                4. How this information is used
              </h2>
              <p>
                Solely to run the employment relationship: to sign you in, to
                record and verify attendance, to calculate and issue wages and
                statutory contributions, to issue letters and payslips, and to
                meet our obligations under labour, PF, ESI and tax law.
              </p>
            </section>

            <section aria-labelledby="app-not-heading">
              <h2 id="app-not-heading" className="text-xl font-semibold text-text mb-2">
                5. What we do not do
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>We do not sell or rent your personal information to anyone.</li>
                <li>
                  We do not use your information for advertising, and the app
                  contains no advertising.
                </li>
                <li>
                  The app contains <strong>no analytics, tracking or
                  crash-reporting software</strong> from any third party. It
                  communicates only with SLBBC&rsquo;s own servers.
                </li>
                <li>We do not read your SMS messages, contacts, or files.</li>
                <li>We do not track your location outside the moment of a punch.</li>
              </ul>
            </section>

            <section aria-labelledby="app-share-heading">
              <h2 id="app-share-heading" className="text-xl font-semibold text-text mb-2">
                6. Who your information is shared with
              </h2>
              <p>
                Your information is shared only where it is necessary to employ
                and pay you: with the client company whose site you are deployed
                to, where they require attendance or statutory records; with
                government authorities for PF, ESI, professional tax and income
                tax; with our bank for salary payment; and with our hosting and
                database providers, who store the data on our behalf under
                contract and may not use it for their own purposes.
              </p>
              <p className="mt-3">
                We also disclose information where the law requires it, or where
                it is needed to establish or defend a legal claim.
              </p>
            </section>

            <section aria-labelledby="app-retention-heading">
              <h2 id="app-retention-heading" className="text-xl font-semibold text-text mb-2">
                7. How long it is kept
              </h2>
              <p>
                Employment, wage and statutory records are retained for as long
                as Indian labour, PF, ESI and tax law requires us to keep them,
                which is generally up to eight years after your employment ends.
                Attendance location readings are retained with the attendance
                record they belong to. Sign-in tokens on your phone are deleted
                when you sign out.
              </p>
            </section>

            <section aria-labelledby="app-security-heading">
              <h2 id="app-security-heading" className="text-xl font-semibold text-text mb-2">
                8. Security
              </h2>
              <p>
                All communication between the app and our servers is encrypted in
                transit using HTTPS. Sign-in tokens are held in Android&rsquo;s
                encrypted storage on your device. Access to employment records is
                restricted by role, so a supervisor can see only the employees
                and sites assigned to him.
              </p>
            </section>

            <section aria-labelledby="app-rights-heading">
              <h2 id="app-rights-heading" className="text-xl font-semibold text-text mb-2">
                9. Your rights, and deleting your data
              </h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023, you may ask
                us for a copy of the personal information we hold about you, ask
                us to correct anything inaccurate, or ask us to erase it.
              </p>
              <p className="mt-3">
                To request erasure of your account and the data associated with
                it, email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                from any address, or speak to your supervisor. We will confirm
                your identity and act within 30 days.
              </p>
              <p className="mt-3">
                Please note that we are legally required to retain certain
                employment, wage and statutory records even after a deletion
                request, for the periods described in section 7. Where that is
                the case, we will delete everything not covered by that
                obligation and tell you what has been retained and why.
              </p>
            </section>

            <section aria-labelledby="app-children-heading">
              <h2 id="app-children-heading" className="text-xl font-semibold text-text mb-2">
                10. Children
              </h2>
              <p>
                The app is for adults in employment. We do not knowingly collect
                information from anyone under 18.
              </p>
            </section>

            <section aria-labelledby="app-changes-heading">
              <h2 id="app-changes-heading" className="text-xl font-semibold text-text mb-2">
                11. Changes to this policy
              </h2>
              <p>
                If we change this policy we will update the effective date above
                and, where the change is significant, tell you in the app.
              </p>
            </section>

            <section aria-labelledby="app-contact-heading">
              <h2 id="app-contact-heading" className="text-xl font-semibold text-text mb-2">
                12. Contact
              </h2>
              <p>
                Sri Lakshmi Balaji Boiler Contractor
                <br />
                For any privacy question, or to exercise a right described above,
                contact{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
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
