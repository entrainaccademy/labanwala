"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DessertCard from "./DessertCard";
import { menuCategories, menuItems } from "@/lib/data";

// Category tabs + product grid. `limit` trims the grid (used on the homepage preview).
export default function MenuGrid({ limit }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

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
              whileTap={{ scale: 0.94 }}
              onClick={() => setActive(c)}
              className={`relative min-h-11 rounded-full px-6 font-semibold transition-colors duration-300 ${
                on ? "text-white" : "border-2 border-royal text-royal hover:bg-sky"
              } text-base font-bold`}
            >
              {/* blue pill slides between tabs */}
              {on && (
                <motion.span
                  layoutId={`tab-${limit ?? "all"}`}
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

      <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            >
              <DessertCard {...item} number={item.id} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
