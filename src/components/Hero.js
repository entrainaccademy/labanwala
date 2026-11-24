"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    label: "Rich & Creamy",
    icon: <><path d="M4 13h24l-2.2 9a4 4 0 0 1-3.9 3H10.1a4 4 0 0 1-3.9-3L4 13Z" /><path d="M8 13c0-4 3.5-6 8-6s8 2 8 6M21 7l4-5M13 25v3h6v-3" /></>,
  },
  {
    label: "Authentic Recipe",
    icon: <><path d="M27 4C13 4 5 10 5 21c0 4 3 7 7 7 11 0 17-8 15-24Z" /><path d="M6 28c5-9 11-14 18-18M14 20l-2-6M19 15l6 2" /></>,
  },
  {
    label: "Served Chilled",
    icon: <><path d="M16 2v28M4 9l24 14M4 23 28 9M12 5l4 4 4-4M12 27l4-4 4 4M5 13l5 1-1-5M27 19l-5-1 1 5M9 23l1-5-5 1M23 9l-1 5 5-1" /></>,
  },
];

const ease = [0.22, 1, 0.36, 1];
const up = (d) => ({ initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease, delay: d } });

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute right-0 top-0 -z-20 hidden h-[440px] w-[56%] opacity-35 lg:block">
        <Image src="/images/hero-leaf-shadow.png" alt="" fill sizes="56vw" className="object-contain object-top" />
      </div>
      <motion.div initial={{ opacity: 0, x: 60, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.2, ease, delay: 0.2 }} className="absolute inset-y-0 right-0 -z-10 hidden w-[53%] lg:block">
        <Image src="/images/hero-pistachio-leaf.png" alt="" fill preload sizes="53vw" className="object-cover object-bottom" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:min-h-[790px] lg:pb-32 lg:pt-28">
        <div className="max-w-[680px]">
          <h1 id="hero-title" className="font-display text-[clamp(3.5rem,5.5vw,6.5rem)] font-semibold leading-[0.96] tracking-tight text-navy">
            <span className="block overflow-hidden pb-[0.08em]"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }}>Creamy. Cool.</motion.span></span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.3 }} className="relative inline-block font-script text-[1.12em] font-normal italic tracking-normal text-royal">
              Egyptian.
              <svg aria-hidden="true" viewBox="0 0 230 14" preserveAspectRatio="none" className="absolute -bottom-2 left-[28%] h-3 w-[64%] text-royal"><motion.path d="M2 11C65-4 160-1 228 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease, delay: 1 }} /></svg>
            </motion.span>
          </h1>
          <motion.p {...up(0.55)} className="mt-12 max-w-[510px] text-lg leading-relaxed text-navy/75 sm:text-xl">
            Laban-based desserts rooted in Egyptian tradition. Explore the flavours and find your favourite.
          </motion.p>
          <motion.div {...up(0.7)} className="mt-9 flex flex-wrap gap-4">
            <Link href="/menu" className="inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-royal px-8 font-bold text-white shadow-card transition-colors hover:bg-navy">View the Menu <span aria-hidden="true" className="text-2xl leading-none">→</span></Link>
            <Link href="/#story" className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-royal bg-white px-9 font-bold text-royal transition-colors hover:bg-mist">Our Story</Link>
          </motion.div>
        </div>

        <motion.div {...up(0.9)} className="mt-16 grid max-w-[640px] grid-cols-3 divide-x divide-royal/25 text-center sm:mt-20">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center gap-2 px-2 text-royal sm:px-5">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{feature.icon}</svg>
              <span className="text-xs font-extrabold sm:text-base">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.3 }} className="relative aspect-[4/3] w-full lg:hidden">
        <Image src="/images/hero-leaf-shadow.png" alt="" fill sizes="100vw" className="object-contain object-top opacity-30" />
        <Image src="/images/hero-pistachio-leaf.png" alt="Layered pistachio and chocolate Laban Wala dessert on a cream podium" fill sizes="100vw" className="object-contain object-bottom" />
      </motion.div>
      <svg aria-hidden="true" viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-10 w-full text-royal sm:h-16"><path d="M0 25C180 4 330 62 500 51c160-10 215-50 380-28 190 27 350 9 560-23v70H0Z" fill="currentColor" /></svg>
    </section>
  );
}
