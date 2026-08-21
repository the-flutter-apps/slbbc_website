import Link from "next/link";
import {
  Flame,
  Wrench,
  Users,
  ClipboardCheck,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Flame,
  Wrench,
  Users,
  ClipboardCheck,
  Lightbulb,
} as const;

type IconName = keyof typeof iconMap;

/**
 * Each card gets its own gradient plate so a row reads as a set of distinct
 * services rather than a repeated template. Ordered so no two cards sitting
 * next to each other — across or down a 3-column grid — share a temperature.
 */
const gradients = [
  "from-accent-light via-accent to-accent-600",
  "from-primary-400 via-primary-600 to-primary-800",
  "from-[#9FD6C6] via-[#5CAF9A] to-[#2E7D6B]",
  "from-[#B3AEE8] via-[#7C74CC] to-[#4E45A0]",
  "from-[#F2A98C] via-[#E5825E] to-[#C25C34]",
] as const;

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  index,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon as IconName] ?? Flame;
  const gradient = gradients[((index ?? 1) - 1) % gradients.length];

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card",
        "transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-card-hover",
        className
      )}
      aria-label={`Learn more about ${title}`}
    >
      {/* Gradient plate */}
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          gradient
        )}
      >
        {/* Radial bloom — without it the gradient reads flat */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120px_90px_at_50%_-10%,rgba(255,255,255,0.85),transparent_70%)]"
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-sm transition-transform duration-500 ease-out-expo group-hover:scale-105">
          <Icon size={24} strokeWidth={1.75} className="text-text" aria-hidden="true" />
        </span>
        {typeof index === "number" && (
          <span className="absolute right-4 top-4 font-display text-xs font-bold tabular-nums text-white/70">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-text">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">{description}</p>

        <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-background-muted px-3.5 py-1.5 text-[13px] font-semibold text-text transition-colors duration-300 group-hover:bg-accent-50">
          Explore
          <ArrowUpRight
            size={14}
            className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
