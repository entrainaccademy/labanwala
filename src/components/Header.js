"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

// Cream sticky header with pill navigation.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-royal/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo size={54} priority />

        <Nav className="hidden lg:block" />

        <div className="flex items-center gap-2">
          <Button href="/#locations" variant="azure" size="sm" className="hidden sm:inline-flex">
            Find Us
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-royal lg:hidden"
          >
            <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`} />
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="px-5 pb-7 pt-2 sm:px-8">
              <Nav orientation="col" onNavigate={() => setOpen(false)} />
              <Button href="/#locations" variant="azure" className="mt-6 w-full sm:hidden">
                Find Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
