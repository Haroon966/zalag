"use client";

import type { ReactNode } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import TargetCursor from "@/components/TargetCursor";
import { CURSOR_TARGET_SELECTOR } from "@/config/cursor";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about zalag ai", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Reach the team", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

interface SiteChromeProps {
  children: ReactNode;
}

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <TargetCursor targetSelector={CURSOR_TARGET_SELECTOR} />
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#f8fafc"
        openMenuButtonColor="#080d18"
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/vercel.svg"
        accentColor="#ff6b6b"
      />
      {children}
    </>
  );
}
