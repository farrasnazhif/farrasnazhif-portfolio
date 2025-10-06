"use client";

import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const variants = {
    primary: "bg-cyan-900 hover:bg-cyan-700 text-white",
    outline:
      "bg-transparent hover:bg-slate-900/60 text-white border border-slate-700",
  };

  return (
    <button
      {...rest}
      onMouseMove={handleMouseMove}
      className={clsx(
        "relative overflow-hidden font-light px-4 py-3 rounded-md transition-all duration-200 focus:outline-none ",
        variants[variant],
        variant === "primary" && styles.glowButton,
        className
      )}
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
    >
      <span className={clsx(styles.light)}></span>
      {children}
    </button>
  );
}
