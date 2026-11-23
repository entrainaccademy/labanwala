import SectionHeading from "./SectionHeading";
import DessertCard from "./DessertCard";
import Button from "./Button";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { signatureDesserts } from "@/lib/data";

// Homepage showcase: our four signature desserts (no filters), then a link to the full menu.
export default function SignatureDesserts() {
  return (
    <section id="menu" aria-labelledby="signature-title" className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-20">
      <Reveal>
        <SectionHeading title="Signature" accent="Desserts" subtitle="The ones everyone asks for." id="signature-title" />
      </Reveal>

      <Stagger as="ul" gap={0.12} className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {signatureDesserts.map((d, i) => (
          <StaggerItem as="li" key={d.id}>
            <DessertCard name={d.name} price={d.price} description={d.description} image={d.image} number={i + 1} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mt-12 text-center">
        <Button href="/menu">See the Full Menu</Button>
      </Reveal>
    </section>
  );
}
