import {
  Shield,
  Clock,
  ClipboardCheck,
  Handshake,
  Star,
  Users,
  IndianRupee,
  GraduationCap,
  MapPin,
  Lightbulb,
  Wrench,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Shield,
  Clock,
  ClipboardCheck,
  Handshake,
  Star,
  Users,
  IndianRupee,
  GraduationCap,
  MapPin,
  Lightbulb,
  Wrench,
  Flame,
  CheckCircle2,
} as const;

type IconName = keyof typeof iconMap;

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  accent?: boolean;
}

export function ValueCard({
  icon,
  title,
  description,
  className,
  accent = false,
}: ValueCardProps) {
  const Icon = iconMap[icon as IconName] ?? CheckCircle2;

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-border transition-all duration-500 ease-out-expo",
        "hover:border-primary/25 hover:-translate-y-1 hover:shadow-card-hover",
        accent && "border-accent/30 bg-gradient-to-br from-accent/5 to-transparent",
        className
      )}
    >
      {/* Icon orb */}
      <div
        className={cn(
          "relative h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ring-1 transition-colors duration-500",
          accent
            ? "bg-accent/15 ring-accent/30"
            : "bg-primary/8 ring-primary/10 group-hover:bg-accent/12 group-hover:ring-accent/25"
        )}
      >
        <Icon
          size={22}
          strokeWidth={1.75}
          className={cn(
            "transition-colors duration-500",
            accent ? "text-accent" : "text-primary group-hover:text-accent"
          )}
          aria-hidden="true"
        />
      </div>

      <h3 className="font-display text-base font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>

      {/* Bottom accent line on hover */}
      <span
        aria-hidden="true"
        className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}
