"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";
import ProductShowcase from "@/components/ProductShowcase";
import GradientBlinds from "@/components/GradientBlinds";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
      })
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          actionsRef.current?.children || [],
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main}>
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroBackground}>
          <GradientBlinds
            gradientColors={["#22D3EE", "#A855F7", "#3B82F6"]}
            angle={45}
            blindCount={20}
            spotlightRadius={0.4}
            spotlightSoftness={1.2}
            spotlightOpacity={0.6}
            mouseDampening={0.2}
            mixBlendMode="lighten"
          />
        </div>
        <div className={styles.heroContent}>
          <h1 ref={titleRef} className={styles.heroTitle}>
            {siteConfig.name}
          </h1>
          <p ref={taglineRef} className={styles.heroTagline}>
            {siteConfig.tagline}
          </p>
          <div ref={actionsRef} className={styles.heroActions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Get Started
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <ProductShowcase />
    </main>
  );
}
