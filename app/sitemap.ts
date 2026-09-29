import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

/**
 * The pages worth finding in search, at the exact addresses the site serves —
 * trailing slash included, the home page too.
 *
 * No lastModified: it used to be the build time on every page, every deploy,
 * which tells Google nothing and teaches it to ignore the field. Google also
 * ignores changefreq and priority, so they are left out rather than guessed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return ["/", "/about/", "/services/", "/careers/", "/contact/"].map((path) => ({
    url: `${base}${path}`,
  }));
}
