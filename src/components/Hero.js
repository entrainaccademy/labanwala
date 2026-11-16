"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import DessertPlaceholder from "./DessertPlaceholder";
import { whatsappUrl } from "@/lib/data";
import { useSplashDone } from "@/lib/splash";

const ease = [0.22, 1, 0.36, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const rise = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } };
const photo = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1, ease, delay: 0.15 } },
};

export default function Hero() {
  const ready = useSplashDone();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-16"
      >
        <div className="text-center lg:text-left">
          <motion.p variants={rise} className="text-sm font-extrabold uppercase tracking-[0.2em] text-royal">
            Egyptian Laban Desserts
          </motion.p>

          <h1
            id="hero-title"
            className="mt-5 font-display text-[3.5rem] font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.75rem]"
          >
            <motion.span variants={rise} className="block">
              Creamy. Cool.
            </motion.span>
            <motion.span variants={rise} className="block font-serif text-[1.12em] font-normal italic text-royal">
              Egyptian.
            </motion.span>
          </h1>

          <motion.p
            variants={rise}
            className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-navy/70 sm:text-xl lg:mx-0"
          >
            Laban-based desserts rooted in Egyptian tradition. Pick your favourites from the menu, or send us your
            order on WhatsApp.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/menu">View the Menu</Button>
            <Button href={whatsappUrl()} variant="outline">
              Order on WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div variants={photo} className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* soft circle behind the photo */}
          <div aria-hidden="true" className="absolute -right-16 -top-10 h-80 w-80 rounded-full bg-mist sm:h-[26rem] sm:w-[26rem]" />

          {/* gently floating dessert photo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="group relative"
          >
            <DessertPlaceholder
              tint="sky"
              label="Signature laban dessert"
              className="aspect-[4/5] rounded-[2rem] shadow-soft"
            />
          </motion.div>

          {/* logo seal */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-6 -left-3 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-soft sm:-left-8 sm:h-32 sm:w-32"
          >
            <Image src="/logo.png" alt="" width={96} height={97} className="h-auto w-20 sm:w-24" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
