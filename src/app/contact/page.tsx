import type { Metadata } from "next";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | zalag ai",
  description:
    "Reach the zalag ai team to discuss AI strategy, product collaborations, or platform partnerships.",
};

const contactChannels = [
  {
    title: "Start a project",
    body: "Tell us about the problem you want to solve and we’ll assemble the right squad to scope it with you.",
    action: {
      label: "email",
      href: "mailto:hello@nebulafoundry.ai",
    },
  },
  {
    title: "Talk with an engineer",
    body: "Need a technical deep-dive? Schedule time with our lead architects to map data flows, integrations, and guardrails.",
    action: {
      label: "calendly",
      href: "https://calendly.com",
    },
  },
  {
    title: "Join the team",
    body: "We’re hiring product-minded engineers and researchers who care about responsible AI. Let’s build together.",
    action: {
      label: "careers",
      href: "mailto:careers@nebulafoundry.ai",
    },
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.tag}>Contact</span>
        <h1 className={styles.title}>Let’s build something intelligent together.</h1>
        <p className={styles.lead}>
          Whether you’re exploring strategy or need a production-ready launch partner, we’re here to help make AI dependable and
          delightful for your teams and customers.
        </p>
      </header>

      <section className={styles.grid}>
        {contactChannels.map((channel) => (
          <article key={channel.title} className={styles.card}>
            <h3>{channel.title}</h3>
            <p>{channel.body}</p>
            <Link href={channel.action.href}>{channel.action.label}</Link>
          </article>
        ))}
      </section>

      <section className={styles.formShell}>
        <h2>Send us a quick brief</h2>
        <form action="https://formsubmit.co/hello@nebulafoundry.ai" method="POST">
          <div className={styles.row}>
            <label className={styles.label}>
              Name
              <input name="name" type="text" required className={styles.input} placeholder="Ada Lovelace" />
            </label>
            <label className={styles.label}>
              Work email
              <input name="email" type="email" required className={styles.input} placeholder="you@company.com" />
            </label>
          </div>
          <label className={styles.label}>
            How can we help?
            <textarea
              name="message"
              required
              className={styles.textarea}
              placeholder="Describe your goals, current tooling, and desired timeline."
            />
          </label>
          <button type="submit" className={styles.submit}>
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
