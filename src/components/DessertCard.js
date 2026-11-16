"use client";

import { motion } from "framer-motion";
import DessertPlaceholder from "./DessertPlaceholder";
import Button from "./Button";
import { whatsappUrl } from "@/lib/data";

// Product card shared by the homepage grid and the menu page.
// Hover: the card lifts and tilts very slightly, and the photo eases in.
export default function DessertCard({ name, price, tint, description, rotate = 0.6 }) {
  return (
    <motion.article
      whileHover={{ y: -8, rotate }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col"
    >
      <DessertPlaceholder
        tint={tint}
        label={name}
        className="aspect-[4/5] rounded-3xl transition-shadow duration-500 group-hover:shadow-soft"
      />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl font-medium leading-snug sm:text-[1.35rem]">{name}</h3>
        <span className="whitespace-nowrap font-bold text-royal">{price}</span>
      </div>
      {description && <p className="mt-1.5 leading-relaxed text-navy/65">{description}</p>}
      <div className="mt-auto pt-4">
        <Button
          href={whatsappUrl(`Hi! I'd like to order: ${name}`)}
          variant="outline"
          size="sm"
          aria-label={`Order ${name} on WhatsApp`}
        >
          Order
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Button>
      </div>
    </motion.article>
  );
}
