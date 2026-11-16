"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const variants = {
  primary: "bg-royal text-white hover:bg-navy",
  outline: "border border-navy/20 bg-white text-navy hover:border-royal hover:text-royal",
  white: "bg-white text-royal hover:bg-sky hover:text-navy",
};

const sizes = {
  md: "min-h-13 px-7 text-base",
  sm: "min-h-11 px-5 text-sm",
};

// Pill button. Renders <a>/<Link> when given href, otherwise <button>.
// Quiet hover lift, slight press-down on click.
export default function Button({ href, variant = "primary", size = "md", className = "", children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.96, y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 24 },
  };

  if (!href) {
    return (
      <motion.button type="button" className={classes} {...motionProps} {...rest}>
        {children}
      </motion.button>
    );
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink href={href} className={classes} {...motionProps} {...rest}>
      {children}
    </MotionLink>
  );
}
