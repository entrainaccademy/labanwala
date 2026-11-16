"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DessertCard from "./DessertCard";
import { menuCategories, menuItems } from "@/lib/data";

export default function MenuGrid() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter menu by category" className="flex flex-wrap justify-center gap-2.5">
        {menuCategories.map((c) => {
          const on = c === active;
          return (
            <motion.button
              key={c}
              type="button"
              aria-pressed={on}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(c)}
              className={`relative min-h-11 rounded-full px-6 font-bold transition-colors duration-200 ${
                on ? "text-white" : "bg-mist text-navy hover:bg-sky/60"
              }`}
            >
              {/* blue pill that slides between chips */}
              {on && (
                <motion.span
                  layoutId="chip-active"
                  className="absolute inset-0 rounded-full bg-royal"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{c}</span>
            </motion.button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {items.length} items in {active}
      </p>

      <ul className="mt-14 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
            >
              <DessertCard {...item} rotate={i % 2 ? -0.6 : 0.6} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
