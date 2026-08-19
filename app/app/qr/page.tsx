import type { Metadata } from "next";
import Image from "next/image";
import { Download, Info, Printer } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { appDownload } from "@/content/app-download";

export const metadata: Metadata = {
  title: "Attendance Card QR — Print Assets",
  robots: { index: false, follow: false },
};

const variants = [
  {
    src: "/qr/slbbc-app-qr.svg",
    name: "Plain",
    tag: "Recommended for the card",
    detail: "Version 2 · 25 x 25 modules · error correction Q",
  },
  {
    src: "/qr/slbbc-app-qr-logo.svg",
    name: "SLB logo in centre",
    tag: "Best for posters and notices",
    detail: "Version 3 · 29 x 29 modules · error correction H",
  },
];

const assets = [
  {
    file: "/qr/slbbc-app-card-back.svg",
    name: "slbbc-app-card-back.svg",
    desc: "Card-back block, 40 x 56 mm, plain QR plus caption. Send this to the printer.",
  },
  {
    file: "/qr/slbbc-app-card-back-logo.svg",
    name: "slbbc-app-card-back-logo.svg",
    desc: "Same block with the SLB mark in the centre of the code.",
  },
  {
    file: "/qr/slbbc-app-qr.svg",
    name: "slbbc-app-qr.svg",
    desc: "Bare plain QR, vector, 25 mm.",
  },
  {
    file: "/qr/slbbc-app-qr-logo.svg",
    name: "slbbc-app-qr-logo.svg",
    desc: "Bare QR with the logo centred, vector, 25 mm.",
  },
  {
    file: "/qr/slbbc-app-qr.png",
    name: "slbbc-app-qr.png",
    desc: "2048 px raster, plain. For slides and WhatsApp — not for printing.",
  },
  {
    file: "/qr/slbbc-app-qr-logo.png",
    name: "slbbc-app-qr-logo.png",
    desc: "2048 px raster with the logo. For slides and WhatsApp — not for printing.",
  },
];

const specs = [
  ["Encoded URL", appDownload.qrTarget],
  ["Printed size", "25 mm x 25 mm minimum (bigger is safer)"],
  ["Quiet zone", "Clear white margin all around, already built into the files"],
  ["Colour", "Pure black on pure white — never inverted, never over artwork"],
  ["Error correction", "Level Q (25% recovery)"],
  ["Lamination", "Matte preferred — gloss causes glare under tubelights"],
  ["File to supply", "SVG or PDF, never a JPEG"],
];

export default function QrAssetsPage() {
  return (
    <div className="bg-background-muted pt-24 pb-12 sm:pt-32 sm:pb-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Internal
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-primary">
          Attendance Card QR — Print Assets
        </h1>
        <p className="mt-3 text-text-muted">
          The QR below is printed on the back of the SLBBC attendance card. It points at a fixed
          URL on this website, so the app download destination can be changed at any time without
          reprinting a single card.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {variants.map((v) => (
            <div key={v.src} className="rounded-xl border border-border bg-white p-6 text-center">
              <Image
                src={v.src}
                alt={`QR code linking to ${appDownload.qrTarget}`}
                width={200}
                height={200}
                className="mx-auto h-[180px] w-[180px] sm:h-[200px] sm:w-[200px]"
                unoptimized
              />
              <p className="mt-4 font-display text-sm font-semibold text-primary">{v.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {v.tag}
              </p>
              <p className="mt-2 text-xs text-text-muted">{v.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 rounded-lg border border-border bg-white p-4 text-sm text-text-muted">
          Both encode the same URL and both were verified to scan down to 150 dpi. The logo
          version needs a denser code to carry the extra error correction, so it has slightly
          less margin for wear — prefer the plain one at 25 mm on the card, and use the logo
          version where it prints larger.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-white p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-primary">
            <Printer className="h-4 w-4" />
            Print specification
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {specs.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
                  {label}
                </dt>
                <dd className="text-sm text-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-white p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-primary">
            <Download className="h-4 w-4" />
            Files
          </h2>
          <ul className="mt-4 space-y-4">
            {assets.map((a) => (
              <li key={a.file}>
                <a
                  href={a.file}
                  download
                  className="inline-block py-1.5 font-mono text-sm font-semibold text-primary underline underline-offset-2"
                >
                  {a.name}
                </a>
                <p className="mt-1 text-sm text-text-muted">{a.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-text-subtle">
            Regenerate with <code className="font-mono">npm run qr</code> after changing{" "}
            <code className="font-mono">content/app-download.ts</code>.
          </p>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border-strong bg-background-subtle p-6">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm text-text-muted">
            <p className="font-semibold text-text">
              Current destination: {appDownload.status}
            </p>
            <p className="mt-1">
              Set <code className="font-mono">status</code> in{" "}
              <code className="font-mono">content/app-download.ts</code> to{" "}
              <code className="font-mono">&quot;play&quot;</code> the day the app is published and
              deploy. Every printed card starts working immediately.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
