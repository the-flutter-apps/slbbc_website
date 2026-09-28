import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  light?: boolean;
}

/**
 * A figure in the file. It does not count up: a number that animates from zero
 * is, for most of a second, a wrong number — "85+ employees" read "16+" in a
 * screenshot of the old site.
 */
export function StatCard({ value, suffix = "", prefix = "", label, className, light }: StatCardProps) {
  return (
    <div className={cn("py-2", className)}>
      <p className={cn("font-display text-5xl font-bold tabular", light ? "text-white" : "text-primary")}>
        {prefix}
        {value}
        <span className="text-accent-500">{suffix}</span>
      </p>
      <p className={cn("mt-2 spec-label", light && "text-white/60")}>{label}</p>
    </div>
  );
}
