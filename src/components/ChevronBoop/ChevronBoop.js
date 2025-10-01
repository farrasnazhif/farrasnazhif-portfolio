"use client";

import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./ChevronBoop.module.css";

export default function ChevronBoop({ direction = "down" }) {
  return (
    <div className=" rounded-lg cursor-pointer">
      {direction === "down" ? (
        <ChevronDown
          className={`${styles.chevron} ${styles.chevronDown} w-6 h-6`}
        />
      ) : (
        <ChevronUp
          className={`${styles.chevron} ${styles.chevronUp} w-6 h-6`}
        />
      )}
    </div>
  );
}
