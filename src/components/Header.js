"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import { whatsappUrl } from "@/lib/data";

// Sticky header used on every page. Gains a soft shadow once the page scrolls.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_10px_30px_-20px_rgba(27,52,112,0.45)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo size={52} priority />

        <Nav className="hidden lg:block" />

        <div className="flex items-center gap-2">
          <Button href={whatsappUrl()} size="sm" className="hidden sm:inline-flex">
            Order on WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-6 rounded-full bg-navy transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-6 rounded-full bg-navy transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="px-5 pb-7 pt-2 sm:px-8">
              <Nav orientation="col" onNavigate={() => setOpen(false)} />
              <Button href={whatsappUrl()} className="mt-5 w-full sm:hidden">
                Order on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
