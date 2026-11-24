import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { products, socials } from "@/lib/data";

const thumbs = [products.pistachioBox, products.lotusCups, products.oreo, products.paris];

export default function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-8 lg:pb-32">
      <Reveal>
        <SectionHeading title="Follow us on" accent="Instagram" id="instagram-title" />
      </Reveal>

      <Stagger as="ul" gap={0.1} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {thumbs.map((p, i) => (
          <StaggerItem as="li" key={i}>
            <div className="group relative aspect-square overflow-hidden bg-sky transition-transform duration-500 hover:-translate-y-2">
              <Image src={p.src} alt="" fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" style={{ objectPosition: p.pos }} />
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {socials.instagram && (
        <Reveal className="mt-14 text-center">
          <Button href={socials.instagram}>Visit Instagram</Button>
        </Reveal>
      )}
    </section>
  );
}
