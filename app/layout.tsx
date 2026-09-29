import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ogImage, siteConfig } from "@/content/site";
import { businessGraph } from "@/content/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Headlines: Archivo, drawn semi-condensed — the stamped capitals of a boiler
// nameplate rather than a startup's rounded grotesk. The width axis is loaded so
// .font-display can set it; see globals.css.
const display = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["wdth"],
});

// Figures and registration numbers: the monospaced columns of a log sheet.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const defaultTitle = `${siteConfig.name} — Boiler O&M Contractor in Hyderabad & Vishakhapatnam`;

export const viewport: Viewport = {
  themeColor: "#0B2239",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | SLBBC`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Industrial services",
  keywords: [
    "boiler contractor Hyderabad",
    "boiler operation and maintenance contractor",
    "boiler O&M contract",
    "IBR boiler operator supply",
    "boiler contractor Visakhapatnam",
    "boiler contractor Parawada",
    "boiler contractor Jeedimetla",
    "boiler operator Hyderabad",
    "IBR certified boiler",
    "boiler maintenance Hyderabad",
    "boiler contractor Vishakhapatnam",
    "pharma boiler operations",
    "boiler manpower supply India",
    "Sri Lakshmi Balaji Boiler Contractor",
    "SLBBC",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    images: [ogImage.url],
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: true, email: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessGraph) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
