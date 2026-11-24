"use client";

import { motion, useReducedMotion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

// Fade-up on scroll. Wrap any block.
export default function Reveal({ as = "div", delay = 0, y = 32, className, children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  const reducedMotion = useReducedMotion();
  return (
    <Tag
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Parent that reveals its <StaggerItem> children one after another.
export function Stagger({ as = "div", gap = 0.1, className, children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className, children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y: 32, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
