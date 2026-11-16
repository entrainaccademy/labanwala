"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { contactInfo, whatsappUrl } from "@/lib/data";

const inputClass =
  "mt-2 block min-h-13 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 transition-colors duration-200 placeholder:text-navy/40 hover:border-navy/30 focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/10";

export default function Contact() {
  // No backend yet: the enquiry opens WhatsApp with the message pre-filled.
  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hi! I'm ${f.get("name")} (${f.get("phone")}).\n${f.get("message")}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  const details = [
    ["Address", contactInfo.address],
    ["Hours", contactInfo.hours],
    ["Phone", contactInfo.phone],
    ["WhatsApp", contactInfo.whatsapp],
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Visit and Order" title="Come say hello." id="contact-title" />

          <Reveal delay={0.1}>
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {details.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm font-extrabold uppercase tracking-[0.16em] text-royal">{k}</dt>
                  <dd className="mt-1.5 text-lg text-navy/80">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()}>Order on WhatsApp</Button>
              <Button href={contactInfo.directionsUrl} variant="outline">
                Get Directions
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-mist p-7 sm:p-10">
            <div className="space-y-5">
              <div>
                <label htmlFor="enq-name" className="font-bold">
                  Name
                </label>
                <input id="enq-name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="enq-phone" className="font-bold">
                  Phone
                </label>
                <input id="enq-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
              </div>
              <div>
                <label htmlFor="enq-message" className="font-bold">
                  Message
                </label>
                <textarea id="enq-message" name="message" rows={4} required className={inputClass} />
              </div>
            </div>
            <Button type="submit" className="mt-7 w-full">
              Send Enquiry
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
