// Headline with one italic-serif accent word, plus a sub-line. tone="dark" is for blue backgrounds.
export default function SectionHeading({ title, accent, subtitle, id, align = "center", tone = "light", className = "" }) {
  const dark = tone === "dark";
  const left = align !== "center";
  return (
    <div className={`${left ? "" : "mx-auto text-center"} max-w-2xl ${className}`}>
      <h2
        id={id}
        className={`font-display text-4xl font-medium leading-[1.1] sm:text-5xl ${dark ? "text-cream" : "text-navy"}`}
      >
        {title}{" "}
        {accent && (
          <span className={`font-script text-[1.15em] font-normal italic ${dark ? "text-sky" : "text-royal"}`}>{accent}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg font-semibold ${dark ? "text-sky" : "text-azure"}`}>{subtitle}</p>
      )}
    </div>
  );
}
