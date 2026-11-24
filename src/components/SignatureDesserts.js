import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { menuItems } from "@/lib/data";

const mustTryDesserts = [3, 2, 6].map((id) => menuItems.find((item) => item.id === id));

export default function SignatureDesserts() {
  return (
    <section id="menu" aria-labelledby="signature-title" className="bg-white text-navy">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">
        <SectionHeading title="Must" accent="try" id="signature-title" />

        <Stagger gap={0.15} className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {mustTryDesserts.map((dessert) => (
            <StaggerItem key={dessert.id}><article>
              <Link href="/menu" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f7f7f5]">
                  <Image
                    src={dessert.image.src}
                    alt={dessert.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    style={{ objectPosition: dessert.image.pos }}
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-navy">{dessert.name}</h3>
              </Link>
              <p className="mt-2 text-base leading-relaxed text-navy/65">{dessert.description}</p>
            </article></StaggerItem>
          ))}
        </Stagger>

        <Reveal y={20} className="mt-12 text-center sm:mt-16">
          <Link href="/menu" className="inline-flex min-h-14 items-center justify-center bg-royal px-9 font-bold text-white transition-colors hover:bg-navy">
            View the full menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
