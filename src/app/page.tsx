"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";
import TrustBand from "@/components/home/TrustBand";
import ServicesPreview from "@/components/home/ServicesPreview";
import WorkShowcase from "@/components/home/WorkShowcase";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/home/CtaBand";
import GradientBlinds from "@/components/GradientBlinds";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setIsLightTheme(document.documentElement.getAttribute("data-theme") === "light");
    };
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
      }).from(
        taglineRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main}>
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroBackground}>
          <GradientBlinds
            gradientColors={
              isLightTheme
                ? ["#22D3EE", "#A855F7", "#818CF8"]
                : ["#22D3EE", "#A855F7", "#3B82F6"]
            }
            angle={45}
            blindCount={20}
            spotlightRadius={0.4}
            spotlightSoftness={1.2}
            spotlightOpacity={isLightTheme ? 0.45 : 0.6}
            mouseDampening={0.2}
            mixBlendMode={isLightTheme ? "soft-light" : "lighten"}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 ref={titleRef} className={styles.heroTitle}>
            {siteConfig.name}
          </h1>
          <p ref={taglineRef} className={styles.heroTagline}>
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      <div className="page-shell">
        <TrustBand />
        <ServicesPreview />
        <WorkShowcase />
        <ProcessSection />
        <CtaBand />
      </div>
    </main>
  );
}
