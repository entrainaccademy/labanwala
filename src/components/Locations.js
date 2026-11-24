import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { contactInfo } from "@/lib/data";

const icons = {
  pin: <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-8.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />,
  clock: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-.8 4h1.6v4.6l3 1.8-.8 1.3-3.8-2.3V7Z" />,
  phone: <path d="M6.6 3h3l1.4 4-2 1.4a11 11 0 0 0 5.6 5.6l1.4-2 4 1.4v3c0 1-.8 1.8-1.8 1.8A15.6 15.6 0 0 1 4.8 4.8C4.8 3.8 5.6 3 6.6 3Z" />,
};

// A centered contact tile: big icon, label, value. Fills with blue on hover.
function Tile({ icon, label, children }) {
  return (
    <StaggerItem as="li" className="group flex items-start gap-5 lg:flex-1 lg:items-center rounded-[1.75rem] border-2 border-royal/15 bg-white p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-royal hover:bg-royal hover:shadow-lift">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist transition-colors duration-500 group-hover:bg-white/15">
        <svg viewBox="0 0 24 24" aria-hidden="true" fillRule="evenodd" className="h-8 w-8 fill-royal transition-colors duration-500 group-hover:fill-white">
          {icons[icon]}
        </svg>
      </span>
      <div>
      <h3 className=" text-sm font-bold uppercase tracking-[0.14em] text-azure transition-colors duration-500 group-hover:text-sky">{label}</h3>
      <div className="mt-1 font-display text-xl font-medium leading-snug text-navy transition-colors duration-500 group-hover:text-white">{children}</div>
      </div>
    </StaggerItem>
  );
}

// Three contact tiles in a row, then optional action buttons.
export default function Locations() {
  const hasPhone = contactInfo.phone && !contactInfo.phone.startsWith("[");
  const tel = `tel:${(contactInfo.phone || "").replace(/\s/g, "")}`;
  const hasAddress = Boolean(contactInfo.address) && !contactInfo.address.startsWith("["); // real address => show map
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&z=15&output=embed`;
  const directions = contactInfo.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;
  return (
    <section id="locations" aria-labelledby="locations-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading title="Our" accent="Locations" subtitle="Come and say hello." id="locations-title" />
      </Reveal>

      <div className={`mt-12 grid items-stretch gap-6 ${hasAddress ? "lg:grid-cols-[1fr_1.25fr] lg:gap-8" : "mx-auto max-w-2xl"}`}>
        <Stagger as="ul" gap={0.12} className="flex flex-col gap-4">
          <Tile icon="pin" label="Address">
            <address className="not-italic">{contactInfo.address}</address>
          </Tile>
          <Tile icon="clock" label="Opening hours">{contactInfo.hours}</Tile>
          <Tile icon="phone" label="Phone">
            {hasPhone ? <a href={tel}>{contactInfo.phone}</a> : contactInfo.phone}
          </Tile>
        </Stagger>

        {hasAddress && (
        <Reveal delay={0.15} className="flex flex-col gap-4">
          <div className="relative min-h-[20rem] flex-1 overflow-hidden shadow-lift lg:min-h-[28rem]">
            <iframe
              title="Map showing The Laban Wala location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={directions}>Get Directions</Button>
            {hasPhone && <Button href={tel} variant="outline">Call Now</Button>}
          </div>
        </Reveal>
        )}
      </div>
    </section>
  );
}
