"use client";

import DessertCard from "./DessertCard";
import { Stagger, StaggerItem } from "./Reveal";
import { menuItems } from "@/lib/data";

// The full menu: every dessert in one grid, appearing one after another as you scroll.
export default function MenuGrid() {
  return (
    <Stagger as="ul" gap={0.1} className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {menuItems.map((item) => (
        <StaggerItem as="li" key={item.id}>
          <DessertCard name={item.name} price={item.price} description={item.description} image={item.image} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
