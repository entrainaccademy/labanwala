"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import Wave from "./Wave";
import { products } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

// Each line rises out of a mask, one after another.
function Line({ children, delay = 0, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

// Text on the left, one tilted photo on the right.
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-36 lg:pt-16">
        <div className="text-center lg:text-left">
          <motion.p {...fadeUp(0.05)} className="inline-block rounded-full bg-mist px-5 py-2 text-sm font-bold text-royal">
            Egyptian Laban Desserts
          </motion.p>

          <h1 id="hero-title" className="mt-6 font-display text-[2.75rem] font-medium leading-[1.08] text-navy sm:text-6xl lg:text-[4.25rem]">
            <Line delay={0.15}>Creamy. Cool.</Line>
            <Line delay={0.3} className="font-script text-[1.15em] font-normal italic text-royal">Egyptian.</Line>
          </h1>

          <motion.p {...fadeUp(0.8)} className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-ink/75 lg:mx-0">
            Laban-based desserts rooted in Egyptian tradition. Spoon in, cool down and discover what makes us unique.
          </motion.p>

          <motion.div {...fadeUp(0.95)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/menu">Our Menu</Button>
            <Button href="/#story" variant="outline">Our Story</Button>
          </motion.div>
        </div>

        {/* tilted photo */}
        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <motion.div
            initial={{ opacity: 0, rotate: 8, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, rotate: 2.5, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_40px_70px_-30px_rgba(27,52,112,0.55)]"
          >
            <Image
              src={products.duoCups.src}
              alt="Two Laban Wala laban cups, chocolate with pistachio and strawberry, served on a tray"
              fill
              preload
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 62%" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <Wave className="absolute inset-x-0 bottom-[-1px]" />
    </section>
  );
}
