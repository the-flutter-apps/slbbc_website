import Link from "next/link";
import {
  Flame,
  Wrench,
  Users,
  ClipboardCheck,
  Lightbulb,
  ArrowRight,
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
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon as IconName] ?? Flame;

  return (
    <div
      className={cn(
        "group card flex flex-col gap-4 border border-border/50",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/10">
        <Icon
          size={24}
          className="text-primary transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors mt-auto pt-2"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
