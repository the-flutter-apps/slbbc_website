import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  /** On the navy ground. */
  light?: boolean;
  id?: string;
}

/** A section of the file: its index label, its title, one line of context. */
export function SectionHeader({ label, title, subtitle, centered, className, light, id }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {label && <p className={cn("section-label", light && "text-accent-100")}>{label}</p>}
      <h2
        id={id}
        className={cn("mt-3 text-display-md font-bold", light ? "text-white" : "text-primary")}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-body-lg text-pretty", light ? "text-white/70" : "text-text-muted")}>{subtitle}</p>
      )}
    </div>
  );
}
