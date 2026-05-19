import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const principles = [
  {
    title: "Human-in-the-loop by default",
    description:
      "Every workflow ensures experts stay in control, with guardrails and feedback loops baked into the experience.",
  },
  {
    title: "Velocity with accountability",
    description:
      "Rapid iteration only matters when it ships responsibly—with observability and governance from day one.",
  },
  {
    title: "Production-first mindset",
    description:
      "From data plumbing to MLOps, we architect for uptime, latency, and scale—not throwaway proofs of concept.",
  },
];

const capabilities = [
  {
    title: "Strategic discovery",
    body: "Co-create an AI roadmap, align stakeholders, and quantify success metrics before models go live.",
  },
  {
    title: "Product acceleration",
    body: "Prototype conversational flows and agentic automations that lock onto real business outcomes.",
  },
  {
    title: "Lifecycle operations",
    body: "Stand up observability, human review loops, and MLOps so your AI stays resilient as data evolves.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Studio founded",
    body: "Launched with a mission to make applied AI dependable, intuitive, and human-centric from day one.",
  },
  {
    year: "2022",
    title: "First enterprise rollout",
    body: "Partnered with a global logistics team to instrument a multi-agent command center across 60+ facilities.",
  },
  {
    year: "2023",
    title: "Safety lab expands",
    body: "Built a dedicated evaluation practice to stress-test models and harden compliance workflows.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind zalag ai and learn how we deliver dependable, production-ready AI for ambitious companies.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build AI systems people trust."
        description={`${siteConfig.name} is a studio of engineers, designers, and applied researchers dedicated to shipping intelligent experiences that feel inevitable—without sacrificing responsibility.`}
      />

      <Reveal className="section-padding border-t border-border page-shell">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we do"
            title="Embedded squads that compound value over time"
            description="From copilots to AI-native platforms, we wire up dependable data pipelines and operationalize guardrails that keep things on course."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="cursor-target rounded-2xl border border-border bg-ink-muted/40 p-8 transition hover:border-gold/20"
              >
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section-padding bg-ink-elevated/50 page-shell">
        <div className="container-wide">
          <SectionHeading eyebrow="Timeline" title="How we grew" />
          <ol className="mt-12 space-y-0">
            {milestones.map((item) => (
              <li
                key={item.year}
                className="grid gap-4 border-l border-gold/30 py-8 pl-8 sm:grid-cols-[120px_1fr] sm:gap-8"
              >
                <span className="font-display text-2xl text-gold">{item.year}</span>
                <div>
                  <h3 className="font-display text-xl text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal className="section-padding page-shell">
        <div className="container-wide">
          <SectionHeading eyebrow="Principles" title="What guides every engagement" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p.title}
                className="cursor-target rounded-2xl border border-border p-8 transition hover:border-gold/20"
              >
                <h3 className="font-display text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">{p.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Work with us
              <ArrowRight size={18} />
            </Button>
            <Link href="/services" className="cursor-target text-sm text-cream-muted transition hover:text-gold">
              View our services →
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
