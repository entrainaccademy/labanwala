"use client";

import { motion } from "framer-motion";
import Wave from "./Wave";

const ease = [0.22, 1, 0.36, 1];

// Menu page hero: just a centred title on a soft pale band, with a wavy edge into the grid.
export default function MenuHero() {
  return (
    <section aria-labelledby="menu-title" className="relative overflow-hidden bg-mist">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 text-center sm:px-8 lg:pb-28 lg:pt-20">
        <h1 id="menu-title" className="font-display text-[clamp(3.5rem,8vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-navy">
          <span className="block overflow-hidden pb-[0.14em]">
            <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }}>
              Our <span className="font-script text-[1.12em] font-normal italic tracking-normal text-royal">Menu</span>
            </motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="mx-auto mt-2 h-1 w-24 origin-center rounded-full bg-azure"
        />
      </div>

      <Wave color="#ffffff" className="absolute inset-x-0 bottom-[-1px]" />
    </section>
  );
}
