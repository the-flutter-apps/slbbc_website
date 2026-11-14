import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        2: "0.02",
        3: "0.03",
        4: "0.04",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        15: "0.15",
        18: "0.18",
        22: "0.22",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      // Slate ink and the SLBBC brand blue: white and pale-brand grounds,
      // brand-600 → brand-800 gradients on whatever can be pressed. Token names
      // are unchanged from earlier designs, so a page that was not rewritten
      // still picks the new values up.
      colors: {
        // The brand blue, #0082B0 — the ground of the SLB mark and of the
        // company's printed quotations. 600 is the brand itself (4.4:1 on white:
        // large text, icons, fills); small text takes 700 (5.9:1) or darker.
        // Lighter steps are the brand mixed with white, darker with deep ink.
        brand: {
          50: "#F0F8FA",
          100: "#DBEEF4",
          200: "#B2DAE7",
          300: "#7ABED6",
          400: "#3DA0C3",
          500: "#178DB7",
          600: "#0082B0",
          700: "#016C93",
          800: "#025879",
          900: "#02445F",
          950: "#033248",
        },
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        secondary: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
          light: "#475569",
        },
        // The brand, as the older pages name it. DEFAULT is brand-700 because
        // pages use text-accent on small text; 500/600 are the brand itself, for
        // ticks, rules and large marks.
        accent: {
          DEFAULT: "#016C93",
          foreground: "#FFFFFF",
          light: "#0082B0",
          dark: "#025879",
          50: "#F0F8FA",
          100: "#DBEEF4",
          500: "#0082B0",
          600: "#0082B0",
        },
        success: {
          DEFAULT: "#16A34A",
          text: "#15803D",
          bg: "#DCFCE7",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F8FAFC",
          subtle: "#F8FAFC",
          sunk: "#F1F5F9",
        },
        text: {
          DEFAULT: "#334155",
          muted: "#475569",
          subtle: "#94A3B8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },
        input: "#CBD5E1",
        ring: "#0082B0",
      },
      // The platform's own UI face — SF Pro on Apple devices, Segoe UI on
      // Windows, Roboto on Android. No web font to download.
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        display: ["ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 3.4vw + 1.2rem, 3.75rem)", { lineHeight: "1.08", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 2vw + 1.5rem, 3rem)", { lineHeight: "1.12", fontWeight: "700" }],
        "display-md": ["clamp(1.875rem, 1vw + 1.5rem, 2.25rem)", { lineHeight: "1.2", fontWeight: "700" }],
        "h1-desktop": ["56px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "h1-mobile": ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2-desktop": ["40px", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" }],
        "h2-mobile": ["28px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.65" }],
        body: ["16px", { lineHeight: "1.65" }],
        eyebrow: ["12px", { lineHeight: "1.4", letterSpacing: "0.18em", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "96px",
        "section-sm": "64px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Entrances run in CSS so the hero paints at first frame, not after
      // hydration; the loops are the slow drifts behind and around the hero.
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-in-left": "slide-in-left 0.8s ease-in-out both",
        "slide-in-right": "slide-in-right 0.8s ease-in-out both",
        "slide-down": "slide-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "drift": "drift 6s ease-in-out infinite",
        "breathe": "breathe 8s ease-in-out infinite",
        "bob": "bob 5s ease-in-out infinite",
        "bob-up": "bob-up 4s ease-in-out 0.5s infinite",
        "blob": "blob 8s ease-in-out infinite",
        "blob-slow": "blob-reverse 10s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "shine": "shine 2s linear infinite",
      },
      keyframes: {
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "bob-up": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "blob-reverse": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(20px) rotate(-5deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
        "grid-md": "48px 48px",
        "grid-lg": "64px 64px",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgb(226 232 240 / 0.5), 0 4px 6px -4px rgb(226 232 240 / 0.5)",
        "card-hover": "0 20px 25px -5px rgb(178 218 231 / 0.5), 0 8px 10px -6px rgb(178 218 231 / 0.5)",
        header: "0 10px 15px -3px rgb(219 238 244 / 0.5), 0 4px 6px -4px rgb(219 238 244 / 0.5)",
        "inset-border": "inset 0 0 0 1px rgba(255,255,255,0.08)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
