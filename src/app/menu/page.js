import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MenuGrid from "@/components/MenuGrid";

export const metadata = {
  title: "Menu — The Laban Wala",
  description: "Browse the full menu of Egyptian laban desserts.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto w-full max-w-6xl px-5 pb-24 pt-12 sm:px-8 lg:pb-32 lg:pt-20">
        <Reveal className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-royal">The Menu</p>
          <h1 className="mt-4 font-display text-5xl font-medium leading-none tracking-tight sm:text-7xl">
            Pick your <span className="font-serif text-[1.1em] font-normal italic text-royal">favourites.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <MenuGrid />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
