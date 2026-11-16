import { Stagger, StaggerItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import DessertPlaceholder from "./DessertPlaceholder";

// 8 tiles: one large feature tile first and one wide tile near the end.
const tiles = [
  { tint: "sky", span: "col-span-2 row-span-2" },
  { tint: "ice", span: "" },
  { tint: "azure", span: "" },
  { tint: "royal", span: "" },
  { tint: "ice", span: "" },
  { tint: "azure", span: "col-span-2" },
  { tint: "sky", span: "" },
  { tint: "ice", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading eyebrow="Gallery" title="Look before you scoop." id="gallery-title" />
      <Stagger
        as="ul"
        gap={0.07}
        className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-4"
      >
        {tiles.map((t, i) => (
          <StaggerItem as="li" key={i} className={`group ${t.span}`}>
            <DessertPlaceholder
              tint={t.tint}
              label={`Gallery photo ${i + 1}`}
              className="h-full w-full rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:rounded-3xl"
            />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
