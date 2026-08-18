import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { InstallPanel } from "@/components/app-download/InstallPanel";
import { appDownload } from "@/content/app-download";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Install the ${appDownload.name} App`,
  description: `Download the ${appDownload.fullName} Android app for SLBBC field staff.`,
  // Internal utility page for employees — kept out of search results.
  robots: { index: false, follow: false },
};

export default function AppDownloadPage() {
  return (
    <div className="bg-background-muted py-12 sm:py-16">
      <Container className="max-w-2xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {siteConfig.shortName} Staff App
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {appDownload.fullName}
          </h1>
          <p className="mt-3 text-text-muted">{appDownload.tagline}</p>
        </div>

        <div className="mt-10">
          <InstallPanel />
        </div>

        <div className="mt-8 rounded-xl border border-border bg-white p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Need help installing?
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Ask your site supervisor first. If you are still stuck, contact the SLBBC office —{" "}
            {siteConfig.officeHours}.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${appDownload.help.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-background-muted"
            >
              <Phone className="h-4 w-4 text-primary" />
              {appDownload.help.phone}
            </a>
            <a
              href={appDownload.help.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-background-muted"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-text-subtle">
          This page is linked from the QR code printed on your SLBBC attendance card.{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-text-muted">
            Back to {siteConfig.shortName}
          </Link>
        </p>
      </Container>
    </div>
  );
}
