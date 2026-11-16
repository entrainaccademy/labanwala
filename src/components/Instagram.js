import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { socials } from "@/lib/data";

export default function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="rounded-[2.5rem] bg-royal px-7 py-14 text-center sm:px-12 sm:py-20">
        <SectionHeading eyebrow="Stay connected" title="Follow us on Instagram" id="instagram-title" tone="dark" align="center" />
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80">See the latest from The Laban Wala.</p>
        {socials.instagram && <div className="mt-8"><Button href={socials.instagram} variant="white">Visit Instagram</Button></div>}
      </div>
    </section>
  );
}
