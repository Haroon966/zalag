import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import styles from "./services.module.css";

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
      "Prototype conversational and autonomous workflows that embed into your existing tools and respect human-in-the-loop checkpoints.",
    bullets: [
      "UX research and journey mapping",
      "Multimodal interface prototyping",
      "Evaluation harnesses and safety guardrails",
    ],
  },
  {
    title: "Platform engineering",
    description:
      "Stand up resilient AI infrastructure—from data pipelines and retrieval to inference orchestration and observability dashboards.",
    bullets: [
      "Model orchestration and routing",
      "Vector search and retrieval pipelines",
      "Monitoring, drift detection, and alerting",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services | zalag ai",
  description:
    "Explore the AI strategy, product, and platform services that zalag ai offers to launch production-ready intelligent systems.",
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.tag}>Services</span>
        <h1 className={styles.title}>From strategy to scale—delivered end to end.</h1>
        <p className={styles.lead}>
          We partner with teams to uncover the right AI bets, craft human-centered experiences, and deploy dependable platforms that
          hold up in production. Every engagement is designed to transfer knowledge so your teams grow alongside the systems we ship.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className={styles.serviceList}>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.callout}>
          <strong>Engagement model</strong>
          <p>
            We assemble bespoke squads—strategy, design, data, and engineering—to work in tight sprints with your team. You get a single
            delivery pod accountable for outcomes, documentation, and enablement.
          </p>
          <Link href="mailto:hello@nebulafoundry.ai" className={styles.ctaLink}>
            Start an engagement
            <HiArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
