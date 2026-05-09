import Link from "next/link";
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
      className={cn("inline-flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm", className)}
      aria-label="SLBBC Home"
    >
      <span
        className={cn(
          "font-bold tracking-tight leading-none",
          isDark ? "text-primary" : "text-white",
          "text-2xl"
        )}
      >
        SLBBC
      </span>
      <span
        className={cn(
          "text-[9px] font-semibold tracking-[0.18em] uppercase leading-tight mt-0.5",
          isDark ? "text-text-muted" : "text-white/70"
        )}
      >
        Boiler Contractor
      </span>
    </Link>
  );
}
