import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found | SLBBC",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-36" aria-labelledby="notfound-heading">
      <Container>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div
            className="text-8xl font-bold text-primary/10 leading-none"
            aria-hidden="true"
          >
            404
          </div>
          <h1 id="notfound-heading" className="text-2xl md:text-3xl font-bold text-text">
            Page not found
          </h1>
          <p className="text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Try one of the links below.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium border border-border text-text hover:border-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/" className="btn-primary inline-flex mt-4">
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
