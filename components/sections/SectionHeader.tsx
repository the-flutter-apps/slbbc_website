import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
  id?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className,
  light = false,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        centered && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "section-label",
            light && "text-accent-light"
          )}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-balance",
          light ? "text-white" : "text-text"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg max-w-2xl",
            light ? "text-white/75" : "text-text-muted",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
