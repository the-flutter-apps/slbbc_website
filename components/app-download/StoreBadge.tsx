import Image from "next/image";

/**
 * Official "Get it on Google Play" badge.
 *
 * Google's brand guidelines require the artwork to be used unmodified — do not
 * recolour, rotate, or apply effects to it. The source PNG ships with its own
 * clear space, so it only ever needs scaling.
 * https://play.google.com/intl/en_us/badges/
 */
export function StoreBadge({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/badges/google-play-badge.png"
      alt="Get it on Google Play"
      width={646}
      height={250}
      priority
      className={`h-auto w-[200px] sm:w-[220px] ${className}`}
    />
  );
}
