"use client";
import { useState } from "react";

export default function LogoTiles() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group
        absolute sm:bottom-[-12rem] sm:right-[-10rem] bottom-[-5rem] right-[-7rem]
        w-[35rem] h-[35rem]
        flex flex-col items-center justify-center gap-6
        [transform-style:preserve-3d]
        [transform:rotateX(45deg)_rotateZ(45deg)]
        [perspective:1000px]
        bg-transparent
        border border-slate-200/10
        [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_110%),linear-gradient(to_right,rgb(0,0,0)_80%,rgba(0,0,0,0)_100%)]
        [mask-composite:intersect]
        overflow-hidden
        transition-transform duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)]
       
      `}
    >
      <button
        onClick={() => setIsHovered((prev) => !prev)}
        className={`
            sm:hidden relative z-20 mt-12 px-5 py-2.5 rounded-md text-sm font-medium
            border border-cyan-400/40 text-cyan-300 bg-transparent
            backdrop-blur-sm
            transition-all duration-500
            hover:bg-cyan-400/10 hover:text-cyan-200 active:scale-95
            shadow-[0_0_20px_rgba(0,255,255,0.2)]
            ${isHovered ? "bg-cyan-400/10 text-cyan-200" : ""}
          `}
      >
        {isHovered ? "Deactivate" : "Activate"}
      </button>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1
          className={`
            absolute text-[12rem] font-extrabold text-transparent
            [-webkit-text-stroke:2px_rgba(255,255,255,0.25)]
            scale-[1.02] opacity-75
            transition-all duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)]
            pointer-events-none
            ${
              isHovered
                ? "[-webkit-text-stroke:1px_theme(colors.cyan.200)] opacity-95 scale-[1.05]"
                : ""
            }
          `}
        >
          FN
        </h1>

        <h1
          className={`
            relative z-10 text-[12rem] font-extrabold text-cyan-200/20
            drop-shadow-[0_0_25px_rgba(0,255,255,0.15)]
            transition-all duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)]
            cursor-default group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.4)] group-hover:text-cyan-400
            ${
              isHovered
                ? "text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.4)] scale-110"
                : ""
            }
          `}
        >
          FN
        </h1>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent mix-blend-overlay pointer-events-none" />
    </div>
  );
}
