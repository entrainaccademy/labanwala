import { commitments } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function DessertLineArt() {
  return (
    <svg viewBox="0 0 640 520" fill="none" className="h-full w-full text-royal" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M45 163c0-24 47-43 106-43s106 19 106 43-47 43-106 43S45 187 45 163Z" />
      <path d="m45 163 21 108c6 29 39 45 85 45s79-16 85-45l21-108M65 248c44 18 128 18 172 0" />
      <path d="M73 158c19-13 48-20 78-20s59 7 78 20M85 173c22 11 43 6 66-1 24-7 48-10 67 1" strokeWidth="2" />
      <path d="m127 103 43-12 10 35-43 12-10-35Z" stroke="#3fa7e0" />
      <path d="m86 157 10-7 12 6-9 8-13-7Zm90-4 11-8 13 7-11 8-13-7Z" stroke="#3fa7e0" strokeWidth="2" />

      <path d="M383 163c0-24 47-43 106-43s106 19 106 43-47 43-106 43-106-19-106-43Z" />
      <path d="m383 163 21 108c6 29 39 45 85 45s79-16 85-45l21-108M403 248c44 18 128 18 172 0" />
      <path d="m408 158 21-9 16 9 20-12 23 10 21-13 19 11 21-8 22 12M420 175l16-8 20 10 22-9 20 10 20-9 22 9 16-7" stroke="#3fa7e0" strokeWidth="2.5" />
      <path d="m453 138 8-6 9 6-8 6-9-6Zm64 24 8-6 9 6-8 6-9-6Z" strokeWidth="2" />

      <path d="m117 355 270-35 139 54-272 40-137-59Z" />
      <path d="M117 355v87l137 52v-80m0 0 272-40v86l-272 34M117 391l137 51 272-39M117 421l137 51 272-39" />
      <path d="m161 352 225-28 95 36-228 33-92-41Z" strokeWidth="2" />
      <path d="m198 350 33 9 24-8 38 11 25-8 40 13 27-9 34 11M216 375l33-8 29 11 31-8 32 12 29-8" stroke="#3fa7e0" strokeWidth="2.5" />
      <path d="m309 347 10-8 11 6-10 8-11-6Zm76 20 10-8 11 6-10 8-11-6Z" strokeWidth="2" />
    </svg>
  );
}

export default function Unique() {
  return (
    <section id="unique" aria-labelledby="unique-title" className="relative isolate overflow-hidden bg-[#f7f5ee] text-navy">
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal y={24}>
          <SectionHeading title="What makes us" accent="unique" id="unique-title" />
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-full w-[440px] -translate-x-1/2 opacity-[0.09] lg:w-[560px] lg:opacity-[0.2]">
            <DessertLineArt />
          </div>
          <ul className="relative grid gap-y-14 lg:grid-cols-2 lg:gap-x-[32%] lg:gap-y-24">
            {commitments.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.08} y={18} className={index % 2 === 0 ? "lg:text-right" : "lg:text-left"}>
                <h3 className="font-display text-2xl font-medium text-navy">{item.title}</h3>
                <p className={`mt-3 max-w-sm text-lg leading-relaxed text-navy/70 ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
