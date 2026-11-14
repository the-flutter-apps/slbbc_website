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
 * A figure. It does not count up: a number that animates from zero is, for
 * most of a second, a wrong number — "85+ employees" read "16+" in a
 * screenshot of an old version of the site.
 */
export function StatCard({ value, suffix = "", prefix = "", label, className, light }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className={cn("text-xl font-bold tabular sm:text-2xl", light ? "text-white" : "text-slate-900")}>
        {prefix}
        {value}
        {suffix}
      </p>
      <p className={cn("mt-0.5 text-xs", light ? "text-white/60" : "text-slate-500")}>{label}</p>
    </div>
  );
}
