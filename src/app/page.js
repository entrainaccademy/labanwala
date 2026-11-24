import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureDesserts from "@/components/SignatureDesserts";
import OurStory from "@/components/OurStory";
import Unique from "@/components/Unique";
import Locations from "@/components/Locations";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SignatureDesserts />
        <OurStory />
        <Unique />
        <Locations />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
