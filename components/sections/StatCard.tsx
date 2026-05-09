"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  light?: boolean;
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === 0) {
      setCount(target);
      return;
    }
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return count;
}

export function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  light = false,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, 1800, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center gap-1 p-6",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold tabular-nums",
          light ? "text-white" : "text-primary"
        )}
        aria-label={`${prefix}${value}${suffix} ${label}`}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <p
        className={cn(
          "text-sm font-medium uppercase tracking-wide",
          light ? "text-white/70" : "text-text-muted"
        )}
      >
        {label}
      </p>
    </div>
  );
}
