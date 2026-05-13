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
        "group/logo inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm",
        className
      )}
      aria-label="Sri Lakshmi Balaji Boiler Contractor — Home"
    >
      <span
        className={cn(
          "relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white transition-all duration-500",
          isDark
            ? "ring-1 ring-primary-100 group-hover/logo:ring-accent/40"
            : "ring-1 ring-white/40 shadow-sm group-hover/logo:ring-accent/60"
        )}
      >
        <Image
          src="/images/logo.svg"
          alt=""
          width={28}
          height={28}
          className="shrink-0"
          aria-hidden="true"
        />
      </span>

      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display font-bold text-[15px] tracking-tight leading-none",
            isDark ? "text-primary" : "text-white"
          )}
        >
          Sri Lakshmi Balaji
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-[0.06em] leading-tight mt-1",
            isDark ? "text-text-muted" : "text-white/70"
          )}
        >
          Boiler Contractor
        </span>
      </span>
    </Link>
  );
}
