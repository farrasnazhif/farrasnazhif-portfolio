"use client";

import { useBoop } from "@/hooks/useBoop";
import { ArrowDown, ArrowUp } from "react-feather";

export default function ArrowBoop({ direction = "down" }) {
  const y = direction === "down" ? 4 : -4;
  const timing = 180;
  const [style, trigger] = useBoop({ y, timing });

  return (
    <div
      className="rounded-lg cursor-pointer"
      onMouseEnter={trigger}
      onFocus={trigger}
    >
      {direction === "down" ? (
        <ArrowDown style={style} className="w-5 h-5" />
      ) : (
        <ArrowUp style={style} className="w-5 h-5" />
      )}
    </div>
  );
}
