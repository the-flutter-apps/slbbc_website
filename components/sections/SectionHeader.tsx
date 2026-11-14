import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Motion";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  /** On a dark ground. */
  light?: boolean;
  id?: string;
}

/** A section's optional pill label, its title and one line of context; rises into view. */
export function SectionHeader({ label, title, subtitle, centered, className, light, id }: SectionHeaderProps) {
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {label && (
        <p className={cn("section-label mb-4", light && "bg-white/10 text-brand-100")}>{label}</p>
      )}
      <h2 id={id} className={cn("text-3xl font-bold sm:text-4xl", light ? "text-white" : "text-slate-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-pretty", light ? "text-white/70" : "text-slate-600")}>{subtitle}</p>
      )}
    </Reveal>
  );
}
