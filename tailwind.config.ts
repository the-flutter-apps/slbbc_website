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
      colors: {
        primary: {
          DEFAULT: "#0B2E4F",
          foreground: "#FFFFFF",
          50: "#E8F0F8",
          100: "#C7DAEB",
          200: "#9BBBD9",
          300: "#6F9CC6",
          400: "#4D86B9",
          500: "#2E70AC",
          600: "#1F5A93",
          700: "#164574",
          800: "#0B2E4F",
          900: "#061B30",
          950: "#030F1C",
        },
        secondary: {
          DEFAULT: "#1F2A36",
          foreground: "#FFFFFF",
          light: "#3B4A55",
        },
        accent: {
          DEFAULT: "#FF6A1A",
          foreground: "#FFFFFF",
          light: "#FF8A4A",
          dark: "#D14E07",
          50: "#FFF1E6",
          100: "#FFDCC0",
          500: "#FF6A1A",
          600: "#E5570A",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F6FA",
          subtle: "#FAFBFD",
        },
        text: {
          DEFAULT: "#0F172A",
          muted: "#52606D",
          subtle: "#94A3B8",
        },
        border: {
          DEFAULT: "#E4E9F2",
          strong: "#CBD5E1",
        },
        input: "#E4E9F2",
        ring: "#0B2E4F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
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
        "hero-pattern":
          "radial-gradient(1200px 600px at 80% -10%, rgba(255, 106, 26, 0.18), transparent 60%), radial-gradient(800px 500px at 0% 100%, rgba(46, 112, 172, 0.35), transparent 60%), linear-gradient(135deg, #061B30 0%, #0B2E4F 45%, #0F3A66 100%)",
        "cta-pattern":
          "radial-gradient(900px 500px at 100% 0%, rgba(255, 106, 26, 0.22), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(46, 112, 172, 0.3), transparent 60%), linear-gradient(135deg, #061B30 0%, #0B2E4F 100%)",
        "grid-light":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(11,46,79,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,46,79,0.08) 1px, transparent 1px)",
        "shine":
          "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)",
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
