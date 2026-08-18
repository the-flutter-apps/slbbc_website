import { siteConfig } from "./site";

/**
 * Distribution stage for the SLBBC Android app.
 *
 *  "coming-soon" — app not published yet. The page explains what to do meanwhile.
 *  "apk"         — hosted APK download (sideload) with step-by-step instructions.
 *  "play"        — live on Google Play. Android devices are redirected to the listing.
 *
 * Change ONLY this value when the app goes live. The printed QR code never changes.
 */
export type AppDistributionStatus = "coming-soon" | "apk" | "play";

const packageName = "in.slbbc.attendance";

export const appDownload = {
  status: "coming-soon" as AppDistributionStatus,

  name: "SLBBC",
  fullName: "SLBBC Attendance",
  tagline: "Daily attendance and muster for SLBBC field staff",
  packageName,

  /** Google Play listing. Valid the moment the app is published under this package name. */
  playUrl: `https://play.google.com/store/apps/details?id=${packageName}`,

  /** Used only when status is "apk". Place the file at public/downloads/. */
  apkUrl: "/downloads/slbbc-attendance-latest.apk",
  apkVersion: "",
  apkSizeMb: "",

  minAndroid: "8.0",

  /** The exact string encoded in the printed QR code. Do not change after cards are printed. */
  qrTarget: `${siteConfig.url}/app`,

  /** Auto-forward Android visitors to Play once status is "play". */
  autoRedirect: true,
  redirectDelaySeconds: 2,

  help: {
    phone: siteConfig.phone,
    whatsapp: siteConfig.social.whatsapp,
    email: siteConfig.email,
  },
} as const;
