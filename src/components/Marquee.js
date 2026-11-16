const phrases = ["Creamy", "Cool", "Egyptian", "Laban Desserts", "Made to be shared"];

// Slim looping banner. Pauses on hover/focus (see .marquee in globals.css).
// Content is repeated for a seamless -50% loop; the copies are hidden from screen readers.
export default function Marquee() {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {phrases.map((p) => (
        <li key={p} className="flex items-center whitespace-nowrap text-sm font-extrabold uppercase tracking-[0.22em] text-white">
          <span className="px-8">{p}</span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Brand banner" className="marquee overflow-hidden bg-royal py-4">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </section>
  );
}
