// /hooks/useBoop.js
"use client";
import { useState, useEffect, useCallback } from "react";

export function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
}) {
  const [isBooped, setIsBooped] = useState(false);

  const trigger = useCallback(() => {
    setIsBooped(true);
  }, []);

  useEffect(() => {
    if (!isBooped) return;

    const timeoutId = setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => clearTimeout(timeoutId);
  }, [isBooped, timing]);

  const style = {
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
    transition: `transform ${timing}ms ease`,
  };

  return [style, trigger];
}
