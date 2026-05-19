import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <Reveal className="section-padding bg-ink">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-muted via-ink-elevated to-ink p-10 text-center sm:p-14 lg:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.25), transparent 50%), radial-gradient(circle at 70% 80%, rgba(34,211,238,0.12), transparent 50%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
              Ready to ship AI that holds up in production?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-muted">
              Tell us about your goals. We&apos;ll assemble the right squad and scope a path forward
              within days—not months of slideware.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a discovery call
                <ArrowRight size={18} />
              </Button>
              <Button href="/about" variant="ghost" size="lg">
                Meet the studio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
