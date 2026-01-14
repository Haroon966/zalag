"use client";

import React, { useRef } from "react";
import styles from "./SpotlightCard.module.css";

type SpotlightColor = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: SpotlightColor;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(168, 85, 247, 0.28)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const node = divRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    node.style.setProperty("--mouse-x", `${x}px`);
    node.style.setProperty("--mouse-y", `${y}px`);
    node.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`${styles.spotlightCard} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
