import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MenuHero from "@/components/MenuHero";
import MenuGrid from "@/components/MenuGrid";

export const metadata = {
  title: "Menu — The Laban Wala",
  description: "Browse the full menu of Egyptian laban desserts.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <MenuHero />
      <main id="main" className="mx-auto w-full max-w-7xl px-5 pb-24 pt-4 sm:px-8 lg:pb-32">
        <Reveal delay={0.1}>
          <MenuGrid />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
