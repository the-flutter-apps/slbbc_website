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
      <Image
        src="/images/logo.svg"
        alt="SLB logo"
        width={40}
        height={40}
        className="shrink-0"
        aria-hidden="true"
      />

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
