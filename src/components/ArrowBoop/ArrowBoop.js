"use client";

import { useBoop } from "@/hooks/useBoop";
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from "react-feather";

export default function ArrowBoop({ direction = "down" }) {
  const directions = {
    up: { x: 0, y: -4 },
    down: { x: 0, y: 4 },
    left: { x: -4, y: 0 },
    right: { x: 4, y: 0 },
  };

  const { x, y } = directions[direction] || directions.down;
  const timing = 250;
  const [style, trigger] = useBoop({ x, y, timing });

  const IconMap = {
    up: ArrowUp,
    down: ArrowDown,
    left: ArrowLeft,
    right: ArrowRight,
  };
  const Icon = IconMap[direction] || ArrowDown;

  return (
    <div
      className="rounded-lg cursor-pointer inline-flex items-center justify-center"
      onMouseEnter={trigger}
      onFocus={trigger}
    >
      <Icon style={style} className="w-5 h-5 text-cyan-400" />
    </div>
  );
}
