import Splash from "@/components/Splash";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SignatureDesserts from "@/components/SignatureDesserts";
import OurStory from "@/components/OurStory";
import HowToOrder from "@/components/HowToOrder";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <SignatureDesserts />
        <OurStory />
        <HowToOrder />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
