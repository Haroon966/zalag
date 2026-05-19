import { Reveal } from "@/components/ui/Reveal";

const industries = [
  "Enterprise SaaS",
  "Life Sciences",
  "Logistics",
  "Financial Services",
  "Retail",
  "Industrial",
];

export default function TrustBand() {
  return (
    <Reveal className="border-y border-border bg-ink py-12 sm:py-16">
      <div className="container-wide px-5 sm:px-8 lg:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cream-muted">
          Trusted by teams building in regulated and high-stakes environments
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((name) => (
            <li
              key={name}
              className="text-sm font-medium text-cream/50 transition hover:text-cream sm:text-base"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
