import { Stagger, StaggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/data";

export default function HowToOrder() {
  return (
    <section id="order" aria-labelledby="order-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading eyebrow="How to Order" title="Three taps to dessert." id="order-title" align="center" />

      <Stagger as="ol" gap={0.14} className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <StaggerItem
            as="li"
            key={s.title}
            className="rounded-3xl bg-mist p-8 transition-colors duration-300 hover:bg-sky/45 sm:p-10"
          >
            <span aria-hidden="true" className="font-serif text-6xl italic leading-none text-royal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl font-medium leading-snug">
              <span className="sr-only">Step {i + 1}: </span>
              {s.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-navy/70">{s.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
