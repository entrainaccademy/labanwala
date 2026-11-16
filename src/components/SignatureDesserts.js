import Link from "next/link";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import DessertCard from "./DessertCard";
import { signatureDesserts } from "@/lib/data";

export default function SignatureDesserts() {
  return (
    <section aria-labelledby="signature-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Signature Desserts" title="The ones everyone asks for." id="signature-title" />
        <Reveal delay={0.1}>
          <Link
            href="/menu"
            className="group inline-flex min-h-11 items-center gap-2 font-bold text-royal transition-colors duration-200 hover:text-navy"
          >
            View the Menu
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <Stagger as="ul" className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {signatureDesserts.map((d, i) => (
          <StaggerItem as="li" key={d.name}>
            <DessertCard {...d} rotate={i % 2 ? -0.6 : 0.6} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
