"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Clock,
  Download,
  Loader2,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { StoreBadge } from "@/components/app-download/StoreBadge";
import { appDownload } from "@/content/app-download";

type Platform = "android" | "ios" | "desktop" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "desktop";
}

/** App identity block — icon, name, one-line description. */
function AppIdentity() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-border bg-white shadow-sm sm:h-24 sm:w-24">
        <Image
          src="/images/logo.svg"
          alt=""
          width={64}
          height={64}
          className="h-14 w-14 sm:h-16 sm:w-16"
        />
      </div>
      <h1 className="mt-5 font-display text-2xl font-bold text-primary sm:text-3xl">
        {appDownload.fullName}
      </h1>
      <p className="mt-2 max-w-sm text-sm text-text-muted sm:text-base">
        {appDownload.tagline}
      </p>
      <p className="mt-3 text-xs text-text-subtle">
        Android {appDownload.minAndroid}+ · Free · SLBBC staff only
      </p>
    </div>
  );
}

export function InstallPanel() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const isAndroid = platform === "android";
  const live = appDownload.status === "play";

  // Forward Android visitors straight to the Play listing once the app is live.
  useEffect(() => {
    if (!live || !appDownload.autoRedirect || !isAndroid) return;
    setRedirecting(true);
    const timer = window.setTimeout(
      () => window.location.replace(appDownload.playUrl),
      appDownload.redirectDelaySeconds * 1000
    );
    return () => window.clearTimeout(timer);
  }, [live, isAndroid]);

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-10">
      <AppIdentity />

      {/* ---- Store block: badge + primary action ---- */}
      <div className="mt-8 flex flex-col items-center">
        {live ? (
          <>
            <a
              href={appDownload.playUrl}
              rel="noopener"
              aria-label="Get it on Google Play"
              className="rounded-lg transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              <StoreBadge />
            </a>

            <a
              href={appDownload.playUrl}
              rel="noopener"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-[0.99] sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download the app
            </a>

            <p className="mt-4 flex items-center gap-2 text-sm text-text-muted">
              {redirecting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  Opening Google Play…
                </>
              ) : platform === "ios" || platform === "desktop" ? (
                <>
                  {platform === "ios" ? (
                    <Smartphone className="h-4 w-4" />
                  ) : (
                    <Monitor className="h-4 w-4" />
                  )}
                  Android phones only — scan the QR on your card with an Android phone
                </>
              ) : (
                "Then sign in with the mobile number registered with SLBBC"
              )}
            </p>
          </>
        ) : appDownload.status === "apk" ? (
          <>
            <a
              href={appDownload.apkUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-[0.99] sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download the app
            </a>
            <p className="mt-3 text-sm text-text-muted">
              {appDownload.apkVersion ? `Version ${appDownload.apkVersion}` : "Latest build"}
              {appDownload.apkSizeMb ? ` · ${appDownload.apkSizeMb} MB` : ""}
            </p>
            <div className="mt-8 flex flex-col items-center border-t border-border pt-8">
              <StoreBadge />
              <p className="mt-3 text-sm font-semibold text-text-muted">
                Coming soon to Google Play
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Not published yet: show the badge, but never as a dead link. */}
            <StoreBadge />
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-background-muted px-4 py-2 text-sm font-semibold text-primary">
              <Clock className="h-4 w-4" />
              Coming soon to Google Play
            </p>
            <button
              type="button"
              disabled
              className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-border-strong px-8 py-4 text-base font-semibold text-white opacity-70 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download the app
            </button>
            <p className="mt-4 max-w-md text-center text-sm text-text-muted">
              The app is not published yet. This page is its permanent home — the QR code on
              your attendance card will always bring you here, and this button goes live the
              day the app is released.
            </p>
          </>
        )}
      </div>

      {/* ---- Sideload instructions, only relevant for a hosted APK ---- */}
      {appDownload.status === "apk" && (
        <div className="mt-10 border-t border-border pt-8">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-text">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Android will ask for permission — this is normal
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-text-muted">
            {[
              "Tap Download. If Chrome warns about the file type, choose Download anyway.",
              "Open the downloaded file. Android will say installs from this source are blocked.",
              "Tap Settings, then turn on Allow from this source.",
              "Press Back and tap Install.",
              "Open the app and sign in with your registered mobile number.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 flex items-start gap-2 text-xs text-text-subtle">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Download this app only from slbbc.in. Do not install an SLBBC APK shared over
            WhatsApp or any other website.
          </p>
        </div>
      )}

      {/* ---- Until launch ---- */}
      {appDownload.status === "coming-soon" && (
        <div className="mt-8 rounded-xl border border-border bg-background-subtle p-5">
          <p className="text-sm font-semibold text-text">Until then</p>
          <p className="mt-1 text-sm text-text-muted">
            Mark your attendance with your site supervisor as usual. Your supervisor will tell
            you when the app is ready.
          </p>
        </div>
      )}
    </div>
  );
}
