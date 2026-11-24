"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

// Shared white header with the brand logo and page links.
export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]">
        <Logo size={52} priority />

        <Nav className="hidden lg:block" />

        <div className="flex items-center gap-2">
          <Button href="/#locations" variant="primary" size="sm" className="hidden rounded-xl sm:inline-flex">
            Find Us
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center bg-royal lg:hidden"
          >
            <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>

      {/* thin progress line that fills as you scroll */}
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-azure" />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="px-5 pb-7 pt-2 sm:px-8">
              <Nav orientation="col" onNavigate={() => setOpen(false)} />
              <Button href="/#locations" variant="primary" className="mt-6 w-full rounded-xl sm:hidden">
                Find Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
