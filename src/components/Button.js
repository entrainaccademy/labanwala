"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const variants = {
  primary: "bg-royal text-white hover:bg-navy",
  azure: "bg-azure text-white hover:bg-royal",
  outline: "border-2 border-royal text-royal hover:bg-royal hover:text-white",
  white: "bg-cream text-royal hover:bg-sky hover:text-navy",
  ghost: "border-2 border-cream/80 text-cream hover:bg-cream hover:text-royal",
};

const sizes = {
  md: "min-h-13 px-8 text-base",
  sm: "min-h-11 px-6 text-sm",
};

// Pill button: springy hover lift, press-down on click.
export default function Button({ href, variant = "primary", size = "md", className = "", children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 font-bold transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`;
  const motionProps = {
    whileHover: { y: -3 },
    whileTap: { scale: 0.96, y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
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
