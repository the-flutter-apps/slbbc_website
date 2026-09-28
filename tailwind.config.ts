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
      // The SLBBC palette — the same navy and teal as the SLBBC Connect app, the
      // Play listing and the printed QR cards, so the company looks like one
      // company wherever it is met. Token names are unchanged from the previous
      // design, so every page picks the new values up without edits.
      colors: {
        primary: {
          DEFAULT: "#0B2239",
          foreground: "#FFFFFF",
          50: "#EEF3F7",
          100: "#D8E3EC",
          200: "#B3C7D7",
          300: "#8BA8BF",
          400: "#5E86A3",
          500: "#3B6888",
          600: "#1F5577",
          700: "#123B56",
          800: "#0B2239",
          900: "#081A2C",
          950: "#04101C",
        },
        secondary: {
          DEFAULT: "#132234",
          foreground: "#FFFFFF",
          light: "#3B4A55",
        },
        // Teal. DEFAULT is the text-safe 700 (5.0:1 on white); 500 is the brand
        // teal, 3.9:1, for rules, ticks and large marks only — never small text.
        accent: {
          DEFAULT: "#06799A",
          foreground: "#FFFFFF",
          light: "#078BAF",
          dark: "#055F79",
          50: "#DFF5FB",
          100: "#BFEAF6",
          500: "#078BAF",
          600: "#06799A",
        },
        success: {
          DEFAULT: "#14966A",
          text: "#0E7552",
          bg: "#E5F6EF",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
          subtle: "#F9FBFC",
          sunk: "#EEF2F6",
        },
        text: {
          DEFAULT: "#132234",
          muted: "#647587",
          subtle: "#8D9AA7",
        },
        border: {
          DEFAULT: "#E4E9EE",
          strong: "#CFD8E0",
        },
        input: "#CFD8E0",
        ring: "#06799A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw + 1rem, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 4.5vw + 0.5rem, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["clamp(1.875rem, 3vw + 0.5rem, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
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
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
        "shine": "shine 2s linear infinite",
        "blob": "blob 14s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
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
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
      },
      backgroundImage: {
        // The ruled lines of a boiler log sheet. The only texture on the site,
        // used behind the vendor file and nowhere loud.
        ruled:
          "repeating-linear-gradient(to bottom, transparent 0 39px, rgba(11,34,57,0.06) 39px 40px)",
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
        "grid-md": "48px 48px",
        "grid-lg": "64px 64px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 46, 79, 0.04), 0 4px 16px rgba(11, 46, 79, 0.06)",
        "card-hover": "0 10px 40px rgba(11, 46, 79, 0.12), 0 2px 6px rgba(11, 46, 79, 0.05)",
        header: "0 1px 0 rgba(11, 46, 79, 0.06), 0 8px 24px rgba(11, 46, 79, 0.08)",
        "glow-accent": "0 12px 32px -8px rgba(255, 106, 26, 0.45)",
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
