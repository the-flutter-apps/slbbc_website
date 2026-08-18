"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Download,
  Loader2,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { appDownload } from "@/content/app-download";

type Platform = "android" | "ios" | "desktop" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "desktop";
}

function Panel({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "success" | "warning";
  children: React.ReactNode;
}) {
  const tones = {
    neutral: "border-border bg-background-subtle",
    success: "border-accent-100 bg-accent-50",
    warning: "border-border-strong bg-background-muted",
  };
  return (
    <div className={`rounded-xl border p-6 sm:p-8 ${tones[tone]}`}>{children}</div>
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

  // Forward Android users straight to the Play listing once the app is live.
  useEffect(() => {
    if (!live || !appDownload.autoRedirect || !isAndroid) return;
    setRedirecting(true);
    const timer = window.setTimeout(
      () => window.location.replace(appDownload.playUrl),
      appDownload.redirectDelaySeconds * 1000
    );
    return () => window.clearTimeout(timer);
  }, [live, isAndroid]);

  // ---- Live on Google Play -------------------------------------------------
  if (live) {
    return (
      <Panel tone="success">
        {redirecting ? (
          <div className="flex items-start gap-4">
            <Loader2 className="mt-0.5 h-6 w-6 shrink-0 animate-spin text-accent" />
            <div>
              <h2 className="font-display text-xl font-semibold text-primary">
                Taking you to Google Play…
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                If nothing happens in a few seconds, tap the button below.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 className="font-display text-xl font-semibold text-primary">
                {appDownload.fullName} is available on Google Play
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                {platform === "ios"
                  ? "This app is for Android phones only. Open this page on your Android phone to install it."
                  : "Install it on your Android phone, then sign in with the mobile number registered with SLBBC."}
              </p>
            </div>
          </div>
        )}
        <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
          <a href={appDownload.playUrl} rel="noopener">
            <Download className="h-4 w-4" />
            Get it on Google Play
          </a>
        </Button>
      </Panel>
    );
  }

  // ---- Hosted APK ----------------------------------------------------------
  if (appDownload.status === "apk") {
    return (
      <Panel>
        <div className="flex items-start gap-4">
          <Smartphone className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
          <div>
            <h2 className="font-display text-xl font-semibold text-primary">
              Download {appDownload.fullName}
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              {appDownload.apkVersion ? `Version ${appDownload.apkVersion}` : "Latest build"}
              {appDownload.apkSizeMb ? ` · ${appDownload.apkSizeMb} MB` : ""} · Requires Android{" "}
              {appDownload.minAndroid} or newer
            </p>
          </div>
        </div>

        {platform === "ios" || platform === "desktop" ? (
          <p className="mt-6 flex items-start gap-3 rounded-lg bg-background-muted p-4 text-sm text-text-muted">
            {platform === "ios" ? (
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <Monitor className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            This app runs on Android only. Scan the QR code on your attendance card with an
            Android phone.
          </p>
        ) : (
          <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
            <a href={appDownload.apkUrl} download>
              <Download className="h-4 w-4" />
              Download APK
            </a>
          </Button>
        )}

        <div className="mt-8 border-t border-border pt-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Android will ask for permission — this is normal
          </h3>
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
      </Panel>
    );
  }

  // ---- Not published yet ---------------------------------------------------
  return (
    <Panel tone="warning">
      <div className="flex items-start gap-4">
        <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
        <div>
          <h2 className="font-display text-xl font-semibold text-primary">
            {appDownload.fullName} is launching soon
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            The app is not published yet. This page is the permanent home for the download — the
            QR code on your attendance card will always bring you here, and the install link will
            appear on this page the day the app goes live.
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-border bg-white p-4">
        <p className="text-sm font-semibold text-text">Until then</p>
        <p className="mt-1 text-sm text-text-muted">
          Mark your attendance with your site supervisor as usual. Your supervisor will tell you
          when the app is ready.
        </p>
      </div>
    </Panel>
  );
}
