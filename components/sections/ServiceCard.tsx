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

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
  feature?: boolean;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  index,
  feature = false,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon as IconName] ?? Flame;

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex flex-col gap-5 rounded-2xl border border-border bg-white p-6 overflow-hidden",
        "transition-all duration-500 ease-out-expo hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1",
        feature && "md:p-8 md:gap-6",
        className
      )}
      aria-label={`Learn more about ${title}`}
    >
      {/* Hover gradient wash */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]"
      />

      {/* Header row: icon + number */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "relative h-12 w-12 rounded-xl flex items-center justify-center shrink-0",
            "bg-primary/8 ring-1 ring-primary/10",
            "transition-all duration-500 group-hover:bg-accent/12 group-hover:ring-accent/30"
          )}
        >
          <Icon
            size={22}
            strokeWidth={1.75}
            className="text-primary transition-colors duration-500 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        {typeof index === "number" && (
          <span className="font-display text-sm font-semibold tabular-nums text-text-subtle tracking-wide">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="space-y-2 flex-1">
        <h3 className={cn("font-display tracking-tight text-text", feature ? "text-2xl" : "text-lg")}>
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>

      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent mt-auto pt-2"
      >
        Learn more
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
