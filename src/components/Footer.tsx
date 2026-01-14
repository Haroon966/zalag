"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

const topFooterLinks = [
  { label: `${siteConfig.name.toUpperCase()} AI`, href: "#" },
  { label: `${siteConfig.name.toUpperCase()} Cloud`, href: "#" },
  { label: `${siteConfig.name.toUpperCase()} DeepMind`, href: "#" },
  { label: `${siteConfig.name.toUpperCase()} Research`, href: "#" },
  { label: "Search Labs", href: "#" },
];

const footerLinks = [
  { label: "About", href: "/about", prefix: siteConfig.name.toUpperCase() },
  { label: "Products", href: "/services", prefix: siteConfig.name.toUpperCase() },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Help", href: "/contact" },
];

const Footer = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [hoveredChar, setHoveredChar] = useState<number | null>(null);
  const mousePosRef = useRef({ x: 50, y: 50 });
  const currentPosRef = useRef({ x: 50, y: 50 });
  const targetPosRef = useRef({ x: 50, y: 50 });
  const animationFrameRef = useRef<number | null>(null);

  // Smooth gradient following cursor and character absorption
  useEffect(() => {
    const footer = footerRef.current;
    const gradient = gradientRef.current;
    if (!footer || !gradient) return;

    const updateGradient = () => {
      const { x, y } = currentPosRef.current;
      gradient.style.setProperty('--gradient-x', `${x}%`);
      gradient.style.setProperty('--gradient-y', `${y}%`);
      
      // Smooth interpolation
      const dx = targetPosRef.current.x - currentPosRef.current.x;
      const dy = targetPosRef.current.y - currentPosRef.current.y;
      
      currentPosRef.current.x += dx * 0.15;
      currentPosRef.current.y += dy * 0.15;
      
      animationFrameRef.current = requestAnimationFrame(updateGradient);
    };

    updateGradient();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      mousePosRef.current = { x, y };
      
      // If no character is hovered, follow cursor
      if (hoveredChar === null) {
        targetPosRef.current = { x, y };
      }
    };

    footer.addEventListener('mousemove', handleMouseMove);

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hoveredChar]);

  // Character interactions and gradient absorption
  useEffect(() => {
    const chars = titleRef.current?.querySelectorAll(`.${styles.char}`);
    const footer = footerRef.current;
    if (!chars || !footer) return;

    const handleCharMouseEnter = (index: number, element: HTMLElement) => {
      setHoveredChar(index);
      
      const rect = element.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const charCenterX = rect.left + rect.width / 2;
      const charCenterY = rect.top + rect.height / 2;
      
      const x = ((charCenterX - footerRect.left) / footerRect.width) * 100;
      const y = ((charCenterY - footerRect.top) / footerRect.height) * 100;
      
      targetPosRef.current = { x, y };
      
      // Character transform effect
      element.style.color = 'rgba(168, 85, 247, 1)';
      element.style.transform = 'scale(1.2) translateY(-5px)';
      element.style.transition = 'all 0.3s ease';
    };

    const handleCharMouseLeave = (element: HTMLElement) => {
      setHoveredChar(null);
      targetPosRef.current = mousePosRef.current;
      
      element.style.color = '';
      element.style.transform = 'scale(1) translateY(0)';
    };

    const handleTitleMouseMove = (e: MouseEvent) => {
      chars.forEach((char) => {
        const element = char as HTMLElement;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        const scale = Math.max(1, 1.2 - (distance / maxDistance) * 0.2);
        const rotate = (x / maxDistance) * 5;
        
        // Only apply transform if not hovered
        if (hoveredChar === null || element !== chars[hoveredChar]) {
          element.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
          element.style.transition = 'transform 0.1s ease-out';
        }
      });
    };

    const handleTitleMouseLeave = () => {
      chars.forEach((char) => {
        const element = char as HTMLElement;
        if (hoveredChar === null || element !== chars[hoveredChar]) {
          element.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    };

    const handlers: Array<{ element: HTMLElement; enter: () => void; leave: () => void }> = [];

    chars.forEach((char, index) => {
      const element = char as HTMLElement;
      const enterHandler = () => handleCharMouseEnter(index, element);
      const leaveHandler = () => handleCharMouseLeave(element);
      
      element.addEventListener('mouseenter', enterHandler);
      element.addEventListener('mouseleave', leaveHandler);
      
      handlers.push({ element, enter: enterHandler, leave: leaveHandler });
    });

    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.addEventListener('mousemove', handleTitleMouseMove);
      titleElement.addEventListener('mouseleave', handleTitleMouseLeave);
    }

    return () => {
      handlers.forEach(({ element, enter, leave }) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
      });
      if (titleElement) {
        titleElement.removeEventListener('mousemove', handleTitleMouseMove);
        titleElement.removeEventListener('mouseleave', handleTitleMouseLeave);
      }
    };
  }, [hoveredChar]);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={gradientRef} className={styles.gradientOverlay} />
      <div className={styles.topSection}>
        <div className={styles.stayConnected}>
          <p className={styles.topText}>
            Stay connected for early access to our newest tools and local events
          </p>

          <div className={styles.social}>
            <Link href={siteConfig.social.linkedin || "#"} className={styles.socialLink}>
              Twitch
            </Link>
            <Link href={siteConfig.social.github || "#"} className={styles.socialLink}>
              Discord
            </Link>
            <Link href={siteConfig.social.x || "#"} className={styles.socialLink}>
              X
            </Link>
          </div>

          <Link href="#" className={styles.btn}>
            Sign up for our newsletter
          </Link>
        </div>

        <div className={styles.links}>
          <div>
            <h3>Other teams and product areas</h3>
            <ul>
              {topFooterLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h1 ref={titleRef} className={styles.mainTitle}>
        {siteConfig.name.toUpperCase().split('').map((char, index) => (
          <span key={index} className={styles.char}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </h1>

      <div className={styles.bottomBar}>
        {siteConfig.name.toUpperCase()} •{" "}
        {footerLinks.map((item, index) => (
          <span key={item.label}>
            <Link href={item.href} className={styles.link}>
              {item.prefix ? `${item.prefix} ${item.label}` : item.label}
            </Link>
            {index < footerLinks.length - 1 && " • "}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
