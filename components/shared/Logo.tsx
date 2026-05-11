import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const isDark = variant === "dark";
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm",
        className
      )}
      aria-label="Sri Lakshmi Balaji Boiler Contractor — Home"
    >
      {/* SLB flame icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Blue circle background */}
        <circle cx="50" cy="50" r="50" fill="#1B8DC4" />

        {/* Boiler body — semicircle base */}
        <path
          d="M20 72 Q20 62 50 62 Q80 62 80 72 L80 80 Q80 85 75 85 L25 85 Q20 85 20 80 Z"
          fill="white"
        />

        {/* Chimney pipe */}
        <rect x="44" y="50" width="12" height="14" rx="2" fill="white" />

        {/* Left flame */}
        <path
          d="M44 50 C44 42 36 36 40 26 C38 32 42 35 41 42 C45 36 43 28 48 22 C47 30 52 34 50 42 C50 42 50 50 44 50 Z"
          fill="white"
        />

        {/* Right flame */}
        <path
          d="M56 50 C56 42 64 36 60 26 C62 32 58 35 59 42 C55 36 57 28 52 22 C53 30 48 34 50 42 C50 42 50 50 56 50 Z"
          fill="white"
        />

        {/* SLB text inside bottom of circle */}
        <text
          x="50"
          y="96"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
          fill="white"
          letterSpacing="1"
        >
          SLB
        </text>
      </svg>

      {/* Text lockup */}
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-bold text-lg tracking-tight leading-none",
            isDark ? "text-primary" : "text-white"
          )}
        >
          Sri Lakshmi Balaji
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide leading-tight mt-0.5",
            isDark ? "text-text-muted" : "text-white/75"
          )}
        >
          Boiler Contractor
        </span>
      </div>
    </Link>
  );
}
