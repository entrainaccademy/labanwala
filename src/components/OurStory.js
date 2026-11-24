import Image from "next/image";
import { story } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Wave from "./Wave";

export default function OurStory() {
  return (
    <section id="story" aria-labelledby="story-title" className="relative overflow-hidden bg-royal text-white">
      <Wave color="#ffffff" flip className="absolute inset-x-0 top-[-1px] z-10" />
      <Wave color="#f7f5ee" className="absolute inset-x-0 bottom-[-1px] z-10" />

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-28 sm:px-8 lg:pb-40 lg:pt-36">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-14">
          <Reveal y={20}><SectionHeading title="A taste worth" accent="travelling for." id="story-title" align="left" tone="dark" /></Reveal>
          <Reveal delay={0.1} y={20} className="max-w-lg text-lg leading-relaxed text-white/85">
            <p>{story.paragraphs[0]}</p>
            <p className="mt-4">{story.paragraphs[1]}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          <Reveal delay={0.08} y={28} className="relative aspect-[4/5] w-full overflow-hidden border-4 border-white bg-cream shadow-lift">
            <Image src="/images/story-branded-spread.png" alt="Overhead assortment of Laban Wala desserts" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.18} y={28} className="relative aspect-[4/5] w-full overflow-hidden border-4 border-white bg-cream shadow-lift">
            <Image src="/images/story-sharing-cream.png" alt="Friends sharing a dessert from a Laban Wala box" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
