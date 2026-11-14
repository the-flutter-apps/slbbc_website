import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" ink for light grounds (the header); "light" for the slate footer. */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * The round SLB mark and the trade name beside it. The mark tips 15° under
 * the pointer.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const light = variant === "light";
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5 rounded-xl", className)}>
      <span className="inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-lg shadow-brand-300/60 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[15deg]">
        {/* The PNG, not /images/logo.svg: the SVG is a 311 KB trace of the
            mark, which next/image cannot shrink; this is served at 40/80px. */}
        <Image src="/icon.png" alt="" width={40} height={40} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold sm:text-xl",
            light ? "text-white" : "bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent"
          )}
        >
          Sri Lakshmi Balaji
        </span>
        <span className={cn("mt-1 text-xs font-medium", light ? "text-slate-400" : "text-slate-500")}>
          Boiler Contractor
        </span>
      </span>
      {/* The visible name is the link's name, so a screen reader and a voice
          command ("click Sri Lakshmi Balaji") agree; this says where it goes. */}
      <span className="sr-only">, home</span>
    </Link>
  );
}
