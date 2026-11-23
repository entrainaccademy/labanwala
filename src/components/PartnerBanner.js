import Reveal from "./Reveal";
import Button from "./Button";

// Franchise call-to-action on a sky-blue band.
export default function PartnerBanner() {
  return (
    <section aria-labelledby="partner-title" className="bg-sky px-5 py-20 sm:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 id="partner-title" className="font-display text-3xl font-medium leading-[1.15] text-navy sm:text-5xl">
          Bring The Laban Wala to <span className="font-script whitespace-nowrap text-[1.15em] font-normal italic text-royal">your city.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy/80">
          We are growing with passionate franchise partners who share our love for creamy, authentic laban desserts.
        </p>
        <div className="mt-8">
          <Button href="/#locations">Partner With Us</Button>
        </div>
      </Reveal>
    </section>
  );
}
