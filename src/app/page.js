import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureDesserts from "@/components/SignatureDesserts";
import OurStory from "@/components/OurStory";
import VisionMission from "@/components/VisionMission";
import PartnerBanner from "@/components/PartnerBanner";
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
        <VisionMission />
        <PartnerBanner />
        <Locations />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
