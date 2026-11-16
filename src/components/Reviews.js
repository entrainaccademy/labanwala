import { Stagger, StaggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading eyebrow="Reviews" title="What our customers say." id="reviews-title" align="center" />
      <Stagger as="ul" gap={0.12} className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <StaggerItem as="li" key={i}>
            <figure className="flex h-full flex-col rounded-3xl border border-navy/10 p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-soft sm:p-10">
              <span aria-hidden="true" className="font-serif text-7xl italic leading-[0.6] text-royal">
                “
              </span>
              <blockquote className="mt-2 text-lg leading-relaxed sm:text-xl">{r.quote}</blockquote>
              <figcaption className="mt-auto pt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-navy/60">
                {r.name}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
