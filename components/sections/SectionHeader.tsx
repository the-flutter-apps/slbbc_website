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
        "flex flex-col gap-4",
        centered && "items-center text-center",
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
          "font-display text-display-md text-balance tracking-tight",
          light ? "text-white" : "text-text"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg max-w-2xl text-pretty",
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
