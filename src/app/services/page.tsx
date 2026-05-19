import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const services = [
  {
    title: "AI product discovery",
    description:
      "Frame the highest ROI opportunities, map data readiness, and align stakeholders on measurable outcomes before we build.",
    bullets: [
      "Executive and product workshops",
      "Opportunity sizing and ROI modeling",
      "Risk, compliance, and data readiness audits",
    ],
  },
  {
    title: "Copilot and agent design",
    description:
      "Prototype conversational and autonomous workflows that embed into your tools and respect human-in-the-loop checkpoints.",
    bullets: [
      "UX research and journey mapping",
      "Multimodal interface prototyping",
      "Evaluation harnesses and safety guardrails",
    ],
  },
  {
    title: "Platform engineering",
    description:
      "Stand up resilient AI infrastructure—from data pipelines and retrieval to inference orchestration and observability.",
    bullets: [
      "Model orchestration and routing",
      "Vector search and retrieval pipelines",
      "Monitoring, drift detection, and alerting",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the AI strategy, product, and platform services that zalag ai offers to launch production-ready intelligent systems.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From strategy to scale—delivered end to end."
        description="We partner with teams to uncover the right AI bets, craft human-centered experiences, and deploy dependable platforms that hold up in production."
      />

      <Reveal className="section-padding page-shell">
        <div className="container-wide space-y-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="cursor-target grid gap-8 rounded-2xl border border-border bg-ink-muted/30 p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-12"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  0{index + 1}
                </span>
                <h2 className="mt-3 font-display text-2xl text-cream sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-cream-muted sm:text-base">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-cream-muted">
                    <Check size={18} className="mt-0.5 shrink-0 text-gold" strokeWidth={2} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-padding bg-ink-elevated/50 page-shell">
        <div className="container-narrow">
          <div className="rounded-3xl border border-border glass-strong p-10 sm:p-12">
            <SectionHeading
              eyebrow="Engagement"
              title="Bespoke squads, accountable outcomes"
              description="We assemble strategy, design, data, and engineering into a single delivery pod—in tight sprints with your team, with documentation and enablement built in."
            />
            <Button href="/contact" size="lg" className="mt-8">
              Start an engagement
              <ArrowRight size={18} />
            </Button>
            <p className="mt-6 text-sm text-cream-muted">
              Or email us directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:text-gold-light">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
}
