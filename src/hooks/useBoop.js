import { useState, useEffect, useCallback } from "react";

export function useBoop({
  y = 0,
  timing = 300, // duration in ms
}) {
  const [isBooped, setIsBooped] = useState(false);

  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = useCallback(() => {
    setIsBooped(true);
  }, []);

  // style that animates translateY when booped
  const style = {
    transform: isBooped ? `translateY(${y}px)` : `translateY(0px)`,
    transition: `transform ${timing}ms ease-in-out`,
  };

  return [style, trigger];
}
