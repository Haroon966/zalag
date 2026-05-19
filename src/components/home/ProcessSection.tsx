import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "Map opportunities, data readiness, and success metrics with your stakeholders.",
  },
  {
    num: "02",
    title: "Design",
    body: "Prototype flows, agent behaviors, and control surfaces aligned to real outcomes.",
  },
  {
    num: "03",
    title: "Deploy",
    body: "Ship with observability, human review loops, and MLOps that scale with your data.",
  },
  {
    num: "04",
    title: "Evolve",
    body: "Iterate with evaluation harnesses so your AI stays resilient as requirements change.",
  },
];

export default function ProcessSection() {
  return (
    <Reveal className="section-padding bg-ink">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined path from insight to production"
          description="Every engagement is structured to reduce risk while maintaining velocity."
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.num}
              className="cursor-target relative rounded-2xl border border-border p-6 transition hover:border-gold/20"
            >
              <span className="font-display text-4xl text-gold/40">{step.num}</span>
              <h3 className="mt-4 font-display text-xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
