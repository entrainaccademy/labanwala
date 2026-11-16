import Reveal from "./Reveal";

// Small uppercase eyebrow + large headline. tone="dark" is for blue backgrounds.
export default function SectionHeading({ eyebrow, title, id, align = "left", tone = "light", className = "" }) {
  const dark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p className={`text-sm font-extrabold uppercase tracking-[0.18em] ${dark ? "text-sky" : "text-royal"}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem] ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
