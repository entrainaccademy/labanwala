import Image from "next/image";

// Menu card: photo set in a royal-blue frame, numbered, with a poster-style name. Tilts on hover.
export default function DessertCard({ name, price, description, image, category, number }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative rounded-[1.75rem] bg-royal p-3 shadow-card transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-1">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-sky">
          <Image
            src={image.src}
            alt={name}
            fill
            sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
            style={{ objectPosition: image.pos }}
          />
        </div>
        {number && (
          <span className="absolute left-6 top-6 rounded-full bg-cream px-3 py-1 text-xs font-extrabold tracking-[0.14em] text-royal">
            No. {String(number).padStart(2, "0")}
          </span>
        )}
        {price && (
          <span className="absolute bottom-6 right-6 rounded-full bg-azure px-3 py-1 text-sm font-extrabold text-white">{price}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="font-display text-xl font-medium leading-tight text-navy">{name}</h3>
        {description && <p className="mt-3 leading-relaxed text-ink/70">{description}</p>}
        {category && (
          <span className="mt-4 inline-flex w-fit rounded-full border-2 border-royal px-3 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-royal">
            {category}
          </span>
        )}
      </div>
    </article>
  );
}
