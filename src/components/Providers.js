"use client";

import { MotionConfig } from "framer-motion";

// Respect the visitor's "reduce motion" OS setting across every animation.
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
