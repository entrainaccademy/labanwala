"use client";

import { motion } from "framer-motion";

// The one heading style for every section: rounded Fredoka title with a single italic-serif accent word.
// tone="dark" is for blue backgrounds. align="left" for split layouts.
export default function SectionHeading({ title, accent, subtitle, id, align = "center", tone = "light", className = "" }) {
  const dark = tone === "dark";
  const left = align === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${left ? "" : "mx-auto text-center"} max-w-3xl ${className}`}
    >
      <h2
        id={id}
        className={`font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className={`font-script text-[1.12em] font-normal italic tracking-normal ${dark ? "text-sky" : "text-royal"}`}>{accent}</span>
          </>
        )}
      </h2>
      {subtitle && <p className={`mt-3 text-lg font-semibold ${dark ? "text-sky" : "text-azure"}`}>{subtitle}</p>}
    </motion.div>
  );
}
