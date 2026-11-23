import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { contactInfo, products } from "@/lib/data";

// One info "ticket": cursive-less label in a blue pill, value in poster type.
function Info({ label, children, wide = false }) {
  return (
    <StaggerItem className={`${wide ? "sm:col-span-2" : ""} rounded-[1.75rem] border-2 border-royal bg-white p-6`}>
      <span className="inline-block rounded-full bg-royal px-4 py-1 text-sm font-bold text-white">{label}</span>
      <div className="mt-3 font-display text-lg font-medium leading-snug text-navy">{children}</div>
    </StaggerItem>
  );
}

export default function Locations() {
  const hasPhone = contactInfo.phone && !contactInfo.phone.startsWith("[");
  return (
    <section id="locations" aria-labelledby="locations-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading title="Our" accent="Locations" subtitle="Come and say hello." id="locations-title" />
      </Reveal>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Stagger gap={0.12} className="grid gap-4 sm:grid-cols-2">
          <Info label="Address" wide>
            <address className="not-italic">{contactInfo.address}</address>
          </Info>
          <Info label="Opening hours">{contactInfo.hours}</Info>
          <Info label="Phone">
            {hasPhone ? (
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                {contactInfo.phone}
              </a>
            ) : (
              contactInfo.phone
            )}
          </Info>
          {(contactInfo.directionsUrl || hasPhone) && (
            <StaggerItem className="flex flex-col justify-center gap-3">
              {contactInfo.directionsUrl && <Button href={contactInfo.directionsUrl}>Get Directions</Button>}
              {hasPhone && <Button href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} variant="outline">Call Now</Button>}
            </StaggerItem>
          )}
        </Stagger>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-royal shadow-lift">
            <Image
              src={products.lotusCups.src}
              alt="Laban cups served on a tray"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
          </div>
          <span className="absolute -left-2 bottom-10 -rotate-6 rounded-full bg-azure px-5 py-2 text-sm font-bold text-white shadow-card sm:-left-6">
            Served cold
          </span>
        </Reveal>
      </div>
    </section>
  );
}
