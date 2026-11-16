import Image from "next/image";
import Button from "./Button";
import DessertPlaceholder from "./DessertPlaceholder";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-16">
        <div className="text-center lg:text-left">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-royal">Egyptian Laban Desserts</p>
          <h1 id="hero-title" className="mt-5 font-display text-[3.5rem] font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.75rem]">
            <span className="block">Creamy. Cool.</span>
            <span className="block font-serif text-[1.12em] font-normal italic text-royal">Egyptian.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-navy/70 sm:text-xl lg:mx-0">
            Laban-based desserts rooted in Egyptian tradition. Explore the menu and discover what makes us unique.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/menu">View the Menu</Button>
            <Button href="/#locations" variant="outline">Our Locations</Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -right-16 -top-10 h-80 w-80 rounded-full bg-mist sm:h-[26rem] sm:w-[26rem]" />
          <DessertPlaceholder tint="sky" label="Signature laban dessert" className="relative aspect-[4/5] rounded-[2rem] shadow-soft" />
          <div className="absolute -bottom-6 -left-3 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-soft sm:-left-8 sm:h-32 sm:w-32">
            <Image src="/logo.png" alt="" width={96} height={97} className="h-auto w-20 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
