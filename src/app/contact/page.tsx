import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Mail, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const contactChannels = [
  {
    icon: Mail,
    title: "Start a project",
    body: "Tell us about the problem you want to solve and we'll assemble the right squad to scope it with you.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
  },
  {
    icon: Calendar,
    title: "Talk with an engineer",
    body: "Schedule time with our lead architects to map data flows, integrations, and guardrails.",
    href: "https://calendly.com",
    label: "Book on Calendly",
    external: true,
  },
  {
    icon: Users,
    title: "Join the team",
    body: "We're hiring product-minded engineers and researchers who care about responsible AI.",
    href: `mailto:careers@${siteConfig.email.split("@")[1]}`,
    label: "careers@zalag.ai",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the zalag ai team to discuss AI strategy, product collaborations, or platform partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something intelligent together."
        description="Whether you're exploring strategy or need a production-ready launch partner, we're here to make AI dependable and delightful for your teams and customers."
      />

      <Reveal className="section-padding pt-0 page-shell">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="cursor-target group flex flex-col rounded-2xl border border-border bg-ink-muted/40 p-8 transition hover:border-gold/30 hover:glow-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <channel.icon size={20} strokeWidth={1.5} />
                </span>
                <h2 className="mt-6 font-display text-xl text-cream">{channel.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-muted">{channel.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  {channel.label}
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border glass-strong p-8 sm:p-12">
            <h2 className="font-display text-2xl text-cream sm:text-3xl">Send us a quick brief</h2>
            <p className="mt-2 text-sm text-cream-muted">
              We typically respond within one business day.
            </p>
            <form
              action={`https://formsubmit.co/${siteConfig.email}`}
              method="POST"
              className="mt-8 space-y-6"
            >
              <input type="hidden" name="_subject" value="New inquiry from zalag.ai" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-cream-muted">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    className="mt-2 w-full rounded-xl border border-border bg-ink px-4 py-3 text-cream placeholder:text-cream-muted/50 transition focus:border-gold/50 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-cream-muted">
                    Work email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-border bg-ink px-4 py-3 text-cream placeholder:text-cream-muted/50 transition focus:border-gold/50 focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-cream-muted">
                  How can we help?
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your goals, current tooling, and desired timeline."
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-ink px-4 py-3 text-cream placeholder:text-cream-muted/50 transition focus:border-gold/50 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="cursor-target inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-semibold text-white transition hover:bg-gold-light"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </>
  );
}
