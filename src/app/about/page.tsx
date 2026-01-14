import type { Metadata } from "next";
import styles from "./about.module.css";

const principles = [
  {
    title: "Human-in-the-loop by default",
    description:
      "Every workflow we design ensures experts stay in control, with guardrails and feedback loops baked into the experience.",
  },
  {
    title: "Velocity with accountability",
    description:
      "Rapid iteration only matters when it ships responsibly. We build observability and governance alongside every deployment.",
  },
  {
    title: "Production-first mindset",
    description:
      "From data plumbing to MLOps, we architect with uptime, latency, and scale in mind—no more throwaway proofs of concept.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "ark.ai founded",
    body: "We launched with a mission to make applied AI feel dependable, intuitive, and human-centric from day one.",
  },
  {
    year: "2022",
    title: "First enterprise rollout",
    body: "Partnered with a global logistics team to instrument a multi-agent command center across 60+ facilities.",
  },
  {
    year: "2023",
    title: "Safety lab expands",
    body: "Built a dedicated evaluation practice to stress-test models, collect red-team feedback, and harden compliance.",
  },
];

export const metadata: Metadata = {
  title: "About | zalag ai",
  description:
    "Meet the team behind zalag ai and learn how we deliver dependable, production-ready AI for ambitious companies.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.tag}>About</span>
        <h1 className={styles.title}>We build AI systems people trust.</h1>
        <p className={styles.lead}>
          zalag ai is a studio of engineers, designers, and applied researchers dedicated to shipping intelligent experiences
          that feel inevitable. We blend deep model expertise with product craft so your teams can deliver measurable outcomes
          without sacrificing responsibility.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.title} style={{ fontSize: "1.8rem" }}>
          What we do
        </h2>
        <p className={styles.lead} style={{ fontSize: "1rem" }}>
          From embedded copilots to AI-native platforms, we design, prototype, and launch solutions that compound value over
          time. Our squads embed with your domain experts to surface the right use cases, wire up dependable data pipelines,
          and operationalize guardrails that keep things on course.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Strategic discovery</h3>
            <p className={styles.cardBody}>
              Co-create an AI roadmap, align stakeholders, and quantify success metrics before a single model goes live.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Product acceleration</h3>
            <p className={styles.cardBody}>
              Prototype conversational flows, agentic automations, and control surfaces that lock onto real business outcomes.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Lifecycle operations</h3>
            <p className={styles.cardBody}>
              Stand up observability, human review loops, and MLOps so your AI stays resilient as your data evolves.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title} style={{ fontSize: "1.8rem" }}>
          How we grew
        </h2>
        <div className={styles.timeline}>
          {milestones.map((item) => (
            <div key={item.year} className={styles.milestone}>
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title} style={{ fontSize: "1.8rem" }}>
          Principles we live by
        </h2>
        <ul className={styles.values}>
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
