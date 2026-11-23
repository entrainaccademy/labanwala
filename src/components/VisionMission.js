import SectionHeading from "./SectionHeading";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { commitments, mission, vision } from "@/lib/data";

function Panel({ label, lead, body, className, pill }) {
  return (
    <div className={`rounded-[2rem] p-8 sm:p-10 ${className}`}>
      <span className={`inline-block rounded-full px-5 py-1.5 text-sm font-bold ${pill}`}>{label}</span>
      <p className="mt-6 font-display text-2xl font-medium leading-[1.25] sm:text-3xl">{lead}</p>
      <p className="mt-6 text-lg leading-relaxed opacity-85">{body}</p>
    </div>
  );
}

// Vision and mission as two poster panels, then four numbered commitments divided by rules.
export default function VisionMission() {
  return (
    <section id="vision" aria-labelledby="vision-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading title="Vision &" accent="Mission" subtitle="What drives every cup." id="vision-title" />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Panel label="Our vision" lead={vision.lead} body={vision.body} className="h-full bg-royal text-cream" pill="bg-cream text-royal" />
        </Reveal>
        <Reveal delay={0.12}>
          <Panel label="Our mission" lead={mission.lead} body={mission.body} className="h-full bg-sky text-navy" pill="bg-royal text-white" />
        </Reveal>
      </div>

      <Stagger as="ul" className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((c, i) => (
          <StaggerItem as="li" key={c.title}>
            <div className="group h-full border-t-4 border-royal pt-5">
              <span className="font-display text-4xl leading-none text-azure transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-royal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium leading-tight text-navy">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{c.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
