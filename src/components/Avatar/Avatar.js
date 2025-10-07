"use client";

import React from "react";
import styles from "./Avatar.module.css";
import clsx from "clsx";
import Image from "next/image";

export default function Avatar({
  src = "/assets/avatar2.png",
  alt = "Avatar",
  size = 400,
  className,
}) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={clsx("bg-cyan-900", styles.avatarWrapper, className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
    >
      <span className={styles.glowCircle}></span>

      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="drop-shadow-2xl select-none scale-90"
          priority
        />
      </div>
    </div>
  );
}
