import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" ink for light grounds (the header); "light" for the navy footer. */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * The mark and the trade name, set like a letterhead. One version per ground,
 * never switching as the page scrolls — the old header flipped the name to
 * navy over a navy bar mid-scroll and it vanished.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 rounded-sm", className)}
      aria-label="Sri Lakshmi Balaji Boiler Contractor — Home"
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-border">
        <Image src="/images/logo.svg" alt="" width={30} height={30} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[17px] font-bold tracking-tight", light ? "text-white" : "text-primary")}>
          Sri Lakshmi Balaji
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em]",
            light ? "text-accent-100/80" : "text-text-muted"
          )}
        >
          Boiler Contractor
        </span>
      </span>
    </Link>
  );
}
