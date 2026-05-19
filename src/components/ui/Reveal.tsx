"use client";

import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function Reveal({ children, className, as: Tag = "section" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={clsx("reveal", className)}>
      {children}
    </Tag>
  );
}
