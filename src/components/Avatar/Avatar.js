"use client";

import React from "react";
import styles from "./Avatar.module.css";
import clsx from "clsx";
import Image from "next/image";

export default function Avatar({ src, alt = "Avatar", size = 120, className }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={clsx(styles.avatarContainer, className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
    >
      <div className={styles.light}></div>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={styles.avatarImage}
        priority
      />
    </div>
  );
}
