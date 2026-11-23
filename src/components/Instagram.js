import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { products, socials } from "@/lib/data";

const thumbs = [products.pistachioBox, products.lotusCups, products.oreo, products.paris];
const tilts = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-3"];

export default function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-8 lg:pb-32">
      <Reveal>
        <SectionHeading title="Follow us on" accent="Instagram" subtitle="See the latest from The Laban Wala." id="instagram-title" />
      </Reveal>

      <Stagger as="ul" gap={0.1} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {thumbs.map((p, i) => (
          <StaggerItem as="li" key={i}>
            <div className={`group relative aspect-square overflow-hidden rounded-2xl border-4 border-royal shadow-card transition-transform duration-500 hover:rotate-0 hover:scale-105 ${tilts[i]}`}>
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
