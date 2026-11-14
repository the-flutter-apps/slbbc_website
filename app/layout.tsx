import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { MotionProvider } from "@/components/motion/Motion";
import { ogImage, siteConfig } from "@/content/site";
import { businessGraph } from "@/content/schema";

// Type is the platform's own UI face (see tailwind.config.ts), so there is no
// web font to load here.

const defaultTitle = `${siteConfig.name} — Boiler O&M Contractor in Hyderabad & Vishakhapatnam`;

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
    <html lang="en-IN">
      <head>
        {/* Blocks that rise into view start hidden; without JavaScript they
            would stay hidden, so show them outright. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-white via-brand-50/30 to-brand-50/40 text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessGraph) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-700 focus:shadow-lg"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Toaster />
      </body>
    </html>
  );
}
