"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* LEFT */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
        }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 0.2,
        }}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 w-[24rem] h-[24rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 0.4,
        }}
        className="absolute top-0 -translate-x-[15rem] translate-y-[20rem] w-[12rem] h-[12rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20 rotate-[25deg]"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 0.6,
        }}
        className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[6rem] h-[6rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20 rotate-12"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 0.8,
        }}
        className="absolute top-1/4 left-1/4 -translate-x-[12rem] translate-y-1/2 w-[3rem] h-[3rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20 rotate-12"
      />

      {/* RIGHT */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 1.0,
        }}
        className="absolute top-1/4 right-1/4 -translate-x-12 translate-y-16 w-[4rem] h-[4rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-12"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 1.2,
        }}
        className="absolute top-0 right-0 -translate-x-[8rem] translate-y-[22rem] w-[12rem] h-[12rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-[25deg]"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 1.4,
        }}
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[14rem] h-[14rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-[-20deg]"
      />

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 60,
          restDelta: 0.01,
          delay: 1.6,
        }}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 w-[20rem] h-[20rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-[20deg]"
      />
    </>
  );
}
