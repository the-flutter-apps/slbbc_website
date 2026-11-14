"use client";

import { MotionConfig, motion } from "framer-motion";

/**
 * The scroll and hover motion of the site, in client components so the pages
 * that use them can stay server components.
 *
 * Values follow one rule set: a block rises 30px and fades in the first time it
 * scrolls into view; items in a row follow 0.1s apart; a card lifts 8px under
 * the pointer. With no transition given, framer-motion springs the movement
 * and eases the fade, which is the feel we want.
 *
 * Visitors who ask their system for reduced motion get none of it
 * (MotionProvider), and visitors without JavaScript still see everything
 * (the <noscript> rule in the root layout).
 */

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Tag = "div" | "li" | "section" | "figure" | "article";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds before this block starts, e.g. index * 0.1 in a row. */
  delay?: number;
  /** How far it rises, in px. */
  y?: number;
  /** Scale up from 0.95 as well — for the closing call-to-action band. */
  zoom?: boolean;
  /** Lift this far (px) under the pointer. */
  lift?: number;
  as?: Tag;
  id?: string;
}

export function Reveal({ children, className, delay = 0, y = 30, zoom, lift, as = "div", id }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      id={id}
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y, ...(zoom ? { scale: 0.95 } : {}) }}
      // The delay lives on the entrance only, so a card in a row does not
      // wait its turn to settle back after the pointer leaves it.
      whileInView={{ opacity: 1, y: 0, ...(zoom ? { scale: 1 } : {}), transition: delay ? { delay } : undefined }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={lift ? { y: -lift } : undefined}
    >
      {children}
    </Component>
  );
}
