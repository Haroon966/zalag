import Link from "next/link";
import { ArrowRight, Bot, Layers, Radar } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Radar,
    title: "AI product discovery",
    description:
      "Frame the highest-ROI opportunities, align stakeholders, and quantify success before a single model ships.",
  },
  {
    icon: Bot,
    title: "Copilot & agent design",
    description:
      "Human-centered conversational and autonomous workflows with evaluation harnesses and safety guardrails.",
  },
  {
    icon: Layers,
    title: "Platform engineering",
    description:
      "Resilient infrastructure—from retrieval pipelines to inference orchestration and observability dashboards.",
  },
];

export default function ServicesPreview() {
  return (
    <Reveal className="section-padding bg-ink">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Capabilities"
          title="Strategy, product, and platform—delivered as one practice"
          description="We embed with your team in tight sprints so knowledge transfers alongside every system we ship."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href="/services"
              className="cursor-target group flex flex-col rounded-2xl border border-border bg-ink-muted/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-ink-muted hover:glow-gold"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold/20">
                <service.icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-xl text-cream">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-muted">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold">
                Learn more
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
