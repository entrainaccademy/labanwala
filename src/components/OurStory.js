"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import Button from "./Button";
import Wave from "./Wave";
import { products, story } from "@/lib/data";

// A small tilted "print" photo that drifts at its own speed as you scroll.
function Print({ image, alt, className, rotate, y }) {
  return (
    <motion.div
      style={{ y, rotate }}
      className={`absolute hidden overflow-hidden rounded-2xl border-4 border-cream shadow-lift lg:block ${className}`}
    >
      <Image src={image.src} alt={alt} fill sizes="220px" className="object-cover" style={{ objectPosition: image.pos }} />
    </motion.div>
  );
}

// Royal-blue statement section, in the spirit of a poster: big uppercase words, cursive lead-in, photos pinned around.
export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const down = useTransform(scrollYProgress, [0, 1], [-40, 70]);

  return (
    <section id="story" ref={ref} aria-labelledby="story-title" className="relative overflow-hidden bg-royal text-cream">
      <Wave flip className="absolute inset-x-0 top-[-1px] z-10" />
      <Wave className="absolute inset-x-0 bottom-[-1px] z-10" />

      <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-24 sm:px-8 lg:pb-44 lg:pt-36">
        <Print image={products.poster} alt="A spoonful of chocolate and strawberry laban dessert above a Laban Wala cup" className="left-[3%] top-20 h-64 w-52" rotate={-7} y={up} />
        <Print image={products.oreo} alt="Oreo laban cup" className="right-[3%] top-14 h-44 w-36 lg:right-[7%] lg:h-56 lg:w-44" rotate={6} y={down} />
        <Print image={products.pistachioBox} alt="Pistachio chocolate box" className="bottom-16 left-[5%] h-40 w-32 lg:left-[10%] lg:h-48 lg:w-40" rotate={-4} y={up} />

        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 id="story-title" className="font-display text-4xl font-medium leading-[1.1] sm:text-5xl">
              Our <span className="font-script text-[1.15em] font-normal italic text-sky">Story</span>
            </h2>
            <p className="mt-3 text-lg font-semibold text-sky">{story.subtitle}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 font-display text-xl font-medium leading-[1.45] sm:text-2xl">{story.paragraphs[0]}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/85">{story.paragraphs[1]}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <Button href="/menu" variant="white">Taste the Menu</Button>
          </Reveal>
        </div>

        {/* phones: photos sit in a row under the text instead of floating */}
        <div className="mt-14 flex justify-center gap-3 lg:hidden">
          {[products.poster, products.oreo, products.pistachioBox].map((p, i) => (
            <div key={i} className={`relative h-40 w-28 overflow-hidden rounded-xl border-4 border-cream shadow-lift ${["-rotate-6", "rotate-2", "rotate-6"][i]}`}>
              <Image src={p.src} alt="" fill sizes="120px" className="object-cover" style={{ objectPosition: p.pos }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
