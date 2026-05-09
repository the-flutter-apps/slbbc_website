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
      colors: {
        primary: {
          DEFAULT: "#0E3A5F",
          foreground: "#FFFFFF",
          50: "#e6eff7",
          100: "#c0d6ea",
          200: "#97badb",
          300: "#6d9ecc",
          400: "#4d88c1",
          500: "#2d73b6",
          600: "#1f5f9a",
          700: "#164b7c",
          800: "#0E3A5F",
          900: "#072340",
        },
        secondary: {
          DEFAULT: "#3B4A55",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F26B1F",
          foreground: "#FFFFFF",
          light: "#F5894A",
          dark: "#C4510A",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
        },
        text: {
          DEFAULT: "#1A1F2A",
          muted: "#5C6772",
        },
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#0E3A5F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1-desktop": ["52px", { lineHeight: "1.15", fontWeight: "700" }],
        "h1-mobile": ["34px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2-desktop": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2-mobile": ["26px", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["17px", { lineHeight: "1.65" }],
        body: ["16px", { lineHeight: "1.6" }],
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "count-up": "count-up 2s ease-out forwards",
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
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, #0E3A5F 0%, #1a5285 50%, #3B4A55 100%)",
        "cta-pattern":
          "linear-gradient(135deg, #0E3A5F 0%, #0a2d4a 100%)",
      },
      boxShadow: {
        card: "0 2px 16px rgba(14, 58, 95, 0.08)",
        "card-hover": "0 8px 32px rgba(14, 58, 95, 0.15)",
        header: "0 2px 16px rgba(14, 58, 95, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
