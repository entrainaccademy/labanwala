"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { markSplashDone } from "@/lib/splash";

const SHOW_MS = 2200;

// Resets on every full page load/refresh, but survives client-side navigation.
let shownThisLoad = false;

// Loading splash: the logo on a clean white page, which then fades to reveal the site.
// Plays on every full load; skipped when navigating back to home from /menu.
export default function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = shownThisLoad;
    shownThisLoad = true;
    const t = setTimeout(
      () => {
        setVisible(false);
        markSplashDone(); // lets the hero start its entrance as the splash fades
      },
      seen ? 0 : SHOW_MS,
    );
    return () => clearTimeout(t);
  }, []);

  // Lock page scroll while the splash is up.
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label="Loading The Laban Wala"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo.png"
              alt="The Laban Wala"
              width={260}
              height={262}
              priority
              className="h-auto w-[190px] sm:w-[260px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
