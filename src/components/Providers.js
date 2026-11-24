"use client";

import { MotionConfig } from "framer-motion";

// Animations always play (including on phones that have "reduce motion" switched on).
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
