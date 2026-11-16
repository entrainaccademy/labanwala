import SectionHeading from "./SectionHeading";

const highlights = [
  { number: "01", title: "Egyptian roots", body: "Desserts inspired by the flavours and traditions of Egyptian laban." },
  { number: "02", title: "Creamy by nature", body: "Laban is at the heart of the menu, bringing a cool, creamy finish to every spoonful." },
  { number: "03", title: "Made to share", body: "From individual favourites to sharing boxes, there is something for every table." },
];

export default function Unique() {
  return (
    <section id="unique" aria-labelledby="unique-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading eyebrow="The Laban Wala" title="What makes us unique" id="unique-title" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.number} className="rounded-[2rem] bg-mist p-8 sm:p-10">
            <span className="font-display text-4xl text-royal/35">{item.number}</span>
            <h3 className="mt-8 font-display text-2xl font-medium">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-navy/70">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
