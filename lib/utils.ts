import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/*
 * tailwind-merge only knows Tailwind's stock scale. Without this it reads
 * `text-display-md` as a text colour, and `text-primary` after it silently
 * removes the heading size. Keep in step with fontSize in tailwind.config.ts.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-lg",
            "display-md",
            "h1-desktop",
            "h1-mobile",
            "h2-desktop",
            "h2-mobile",
            "body-lg",
            "body",
            "eyebrow",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3");
}
