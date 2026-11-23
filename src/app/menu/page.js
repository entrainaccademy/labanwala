import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MenuGrid from "@/components/MenuGrid";

export const metadata = {
  title: "Menu — The Laban Wala",
  description: "Browse the full menu of Egyptian laban desserts.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-royal px-5 pb-28 pt-16 sm:px-8 lg:pt-24">
        <Wave className="absolute inset-x-0 bottom-[-1px]" />
        <Reveal className="relative">
          <h1 className="sr-only">Menu</h1>
          <SectionHeading title="Our" accent="Menu" subtitle="Pick your favourites." tone="dark" />
        </Reveal>
      </section>
      <main id="main" className="mx-auto w-full max-w-7xl px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
        <Reveal delay={0.1}>
          <MenuGrid />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
