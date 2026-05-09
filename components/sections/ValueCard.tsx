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
        "flex flex-col gap-3 p-6 rounded-xl border border-border/50 bg-white",
        accent && "border-accent/20 bg-accent/5",
        className
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
          accent ? "bg-accent/15" : "bg-primary/10"
        )}
      >
        <Icon
          size={20}
          className={accent ? "text-accent" : "text-primary"}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-semibold text-text">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
