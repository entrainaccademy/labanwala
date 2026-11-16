import Reveal from "./Reveal";
import Button from "./Button";
import DessertPlaceholder from "./DessertPlaceholder";

// A single blue panel: photo on one side, the story on the other.
export default function OurStory() {
  return (
    <section id="story" aria-labelledby="story-title" className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
      <Reveal className="grid overflow-hidden rounded-[2.5rem] bg-royal text-white lg:grid-cols-2">
        <div className="group">
          <DessertPlaceholder tint="azure" label="The Laban Wala kitchen" className="h-full min-h-72 sm:min-h-96" />
        </div>

        <div className="flex flex-col justify-center px-7 py-12 sm:px-14 sm:py-16 lg:py-24">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">Our Story</p>
          <h2
            id="story-title"
            className="mt-3 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            A taste of Egypt in every spoon.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">[brand story placeholder]</p>
          <div className="mt-9">
            <Button href="/#story" variant="white">
              Read Our Story
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
