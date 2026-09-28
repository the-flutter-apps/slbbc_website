import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-background-muted py-20 md:py-32" aria-labelledby="notfound-heading">
      <Container>
        <div className="mx-auto max-w-xl">
          <p className="section-label">Error 404</p>
          <h1 id="notfound-heading" className="mt-4 text-display-lg font-bold">
            This page isn&apos;t in the file.
          </h1>
          <p className="mt-5 text-body-lg text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one of these instead.
          </p>
          <ul className="card mt-8 divide-y divide-border">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-5 py-3.5 font-semibold text-primary transition-colors hover:bg-background-muted hover:text-accent"
                >
                  {link.label}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
