import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/paths";

const products = [
  {
    name: "OmniSight Platform",
    description: "Operations clarity on autopilot for enterprise teams.",
    badge: "Enterprise AI",
  },
  {
    name: "Helix Research Studio",
    description: "Accelerated, compliant research workflows for life sciences.",
    badge: "Life Sciences",
  },
  {
    name: "NovaCommerce Engine",
    description: "Personalized commerce moments at every touchpoint.",
    badge: "Retail",
  },
  {
    name: "Atlas Field Copilot",
    description: "Real-time field guidance without downtime.",
    badge: "Industrial",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work">
      <Reveal className="section-padding bg-ink-elevated/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Work"
            title="Pre-built products that accelerate your timeline"
            description="Ready-to-adapt AI building blocks—each hardened for production and tailored to your domain."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="cursor-target group overflow-hidden rounded-2xl border border-border bg-ink-muted/40 transition duration-500 hover:border-gold/25 hover:glow-gold"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-muted">
                  <Image
                    src={withBasePath("/chatsql.png")}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-border glass px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-cream">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">{product.description}</p>
                  <Link
                    href={`mailto:${siteConfig.email}?subject=Demo request: ${product.name}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold transition hover:text-gold-light"
                  >
                    Request a demo
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
