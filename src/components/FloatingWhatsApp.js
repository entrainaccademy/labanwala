"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { whatsappUrl } from "@/lib/data";

// Round "order" button that appears in the corner once the visitor scrolls past the hero.
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-royal shadow-soft transition-colors duration-200 hover:bg-navy"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1-4.9A8.5 8.5 0 1 1 21 12Z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
