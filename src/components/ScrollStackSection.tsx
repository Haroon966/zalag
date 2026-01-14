"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import styles from "./ScrollStackSection.module.css";

const highlights = [
  { value: "12", label: "In-flight programs", helper: "+4 this quarter" },
  { value: "14 days", label: "Avg release velocity", helper: "idea → pilot" },
  { value: "↑31%", label: "Experience lift", helper: "measured post-launch" },
];

const cards = [
  {
    eyebrow: "Field log 01",
    title: "Northstar blueprint",
    description:
      "Two-week embed to connect customer pain to the architecture that resolves it.",
    details: ["Interviews + heuristics", "AI service map", "Exec-ready story deck"],
    outcome: "Scope and metrics locked in a single readout.",
    metric: { label: "Runway", value: "10 working days" },
  },
  {
    eyebrow: "Field log 02",
    title: "Systems co-lab",
    description:
      "Design and engineering choreograph assistant behavior, fallbacks, and microcopy so it stays on-brand.",
    details: ["Conversation + UI states", "Safety nets + tone guardrails", "Component specs for build teams"],
    outcome: "Copilot UX spec clears review with zero rework.",
    metric: { label: "Artifacts", value: "26 annotated frames" },
  },
  {
    eyebrow: "Field log 03",
    title: "Pilot instrumentation",
    description:
      "Instrumented prototypes on real data so teams can feel the flow and judge accuracy early.",
    details: ["Clickable story w/ real inputs", "Eval harness + guardrails", "Observation + analytics wiring"],
    outcome: "Pilot funded after a 72-hour drive.",
    metric: { label: "Time to proof", value: "5 days" },
  },
  {
    eyebrow: "Field log 04",
    title: "Experience ops desk",
    description:
      "Post-launch we run design QA, ship refinements, and coach GTM on story.",
    details: ["Release rituals + ops desk", "Playback library for GTM", "Enablement workshops"],
    outcome: "Confidence jumped from 61 → 89 after the first iteration.",
    metric: { label: "Engagement", value: "8-week residency" },
    ctaLabel: "Book a working session",
    ctaHref: "mailto:hello@nebulafoundry.ai",
  },
];

const ScrollStackSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.metaAndStack}>
        <div className={styles.meta}>
          <span className={styles.pill}>Field notes · Embedded AI team</span>
          <h2 className={styles.heading}>Embedded from insight to ops so your AI surface feels inevitable.</h2>
          <p className={styles.summary}>
            We act as your extended trio—running research, choreographing the experience, and shipping quality beyond the first demo.
          </p>

          <div className={styles.highlights}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.highlight}>
                <span className={styles.highlightValue}>{item.value}</span>
                <span className={styles.highlightLabel}>{item.label}</span>
                <span className={styles.highlightHelper}>{item.helper}</span>
              </div>
            ))}
          </div>
        </div>

        <ScrollStack className={styles.stackCol}>
          {cards.map((card) => (
            <ScrollStackItem key={card.title}>
              <div className={styles.cardMeta}>
                <span className={styles.cardPill}>{card.eyebrow}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardGrid}>
                  <ul className={styles.cardList}>
                    {card.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className={styles.cardOutcome}>
                    <p>{card.outcome}</p>
                    <div className={styles.cardMetric}>
                      <span className={styles.cardMetricLabel}>{card.metric.label}</span>
                      <span className={styles.cardMetricValue}>{card.metric.value}</span>
                    </div>
                  </div>
                </div>
                {card.ctaHref && (
                  <Link href={card.ctaHref} className={styles.ctaLink}>
                    {card.ctaLabel}
                    <HiArrowRight size={18} />
                  </Link>
                )}
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ScrollStackSection;


