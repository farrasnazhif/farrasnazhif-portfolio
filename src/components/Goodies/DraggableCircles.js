"use client";

import * as motion from "motion/react-client";
import React, { useState, useEffect } from "react";
import Button from "../ui/Button/Button";

export default function DraggableCircles() {
  const [circles, setCircles] = useState([]);
  const [activeDirection, setActiveDirection] = useState(null);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCount(3);
      } else {
        setCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCircles(generateCircles(count));
  }, [count]);

  const handleReset = () => {
    setCircles(generateCircles(count));
  };

  if (circles.length === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-[50vh] -translate-y-[5rem] sm:-translate-y-0  bg-transparent gap-8">
      <div
        className="relative overflow-visible flex 
       items-center justify-around w-[90%] sm:w-[400px] h-[100px] sm:h-[120px] 
       rounded-2xl shadow-2xl bg-transparent p-4"
      >
        {circles.map((c) => (
          <motion.div
            key={c.id}
            drag="y"
            dragDirectionLock
            onDirectionLock={(dir) => setActiveDirection(dir)}
            onDragEnd={() => setActiveDirection(null)}
            dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            whileDrag={{ cursor: "grabbing", scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="rounded-full shadow-md cursor-grab flex-shrink-0"
            style={{
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
            }}
          />
        ))}
      </div>

      <Button onClick={handleReset}>Randomize</Button>
    </div>
  );
}

function generateCircles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: randomColor(),
    size: 60,
  }));
}

function randomColor() {
  const colors = ["#1DCD9F", "#F87171", "#60A5FA", "#FBBF24", "#A78BFA"];
  return colors[Math.floor(Math.random() * colors.length)];
}
