import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { contactInfo } from "@/lib/data";

export default function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="bg-mist px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Visit us" title="Our locations" id="locations-title" />
        <div className="mt-12 max-w-2xl rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
          <h3 className="font-display text-2xl font-medium">The Laban Wala</h3>
          <address className="mt-5 not-italic text-lg leading-relaxed text-navy/75">{contactInfo.address}</address>
          <p className="mt-2 text-navy/70">{contactInfo.hours}</p>
          {contactInfo.phone && <p className="mt-2 text-navy/70">{contactInfo.phone}</p>}
          {contactInfo.directionsUrl && <div className="mt-8"><Button href={contactInfo.directionsUrl} variant="outline">Get Directions</Button></div>}
        </div>
      </div>
    </section>
  );
}
