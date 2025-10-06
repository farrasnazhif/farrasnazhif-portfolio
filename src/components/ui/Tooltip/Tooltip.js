import React, { useState, useRef, useEffect } from "react";
import styles from "./Tooltip.module.css";

export default function Tooltip({ children, content, position = "top" }) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!isVisible || !tooltipRef.current || !containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current;

      const positions = {
        top: {
          top: -tooltip.offsetHeight - 8,
          left: (container.width - tooltip.offsetWidth) / 2,
        },
        bottom: {
          top: container.height + 8,
          left: (container.width - tooltip.offsetWidth) / 2,
        },
        left: {
          top: (container.height - tooltip.offsetHeight) / 2,
          left: -tooltip.offsetWidth - 8,
        },
        right: {
          top: (container.height - tooltip.offsetHeight) / 2,
          left: container.width + 8,
        },
      };

      Object.entries(positions[position]).forEach(([key, value]) => {
        tooltip.style[key] = `${value}px`;
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isVisible, position]);

  return (
    <div
      ref={containerRef}
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div ref={tooltipRef} className={styles.tooltipBox} role="tooltip">
          {content}
          <div
            className={`${styles.tooltipArrow} ${
              styles[`tooltipArrow_${position}`]
            }`}
          ></div>
        </div>
      )}
    </div>
  );
}
