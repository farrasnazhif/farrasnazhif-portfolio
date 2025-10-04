"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* left top */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "10px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20"
      />

      {/* left bottom */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "8px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 w-[24rem] h-[24rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-tr from-black to-slate-200/20"
      />

      {/* center left */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "12px", "0px"], opacity: [0, 0.7, 0.7] }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute top-0 -translate-x-[15rem] translate-y-[20rem] w-[12rem] h-[12rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20 rotate-[25deg] "
      />

      {/* center left bottom */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "6px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="hidden lg:block absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[6rem] h-[6rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-tr from-black to-slate-200/20 rotate-12"
      />

      {/* center left top */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "5px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="hidden lg:block absolute top-1/4 left-1/4 -translate-x-[12rem] translate-y-1/2 w-[3rem] h-[3rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-br from-black to-slate-200/20 rotate-12"
      />

      {/* center top right */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "6px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="hidden lg:block absolute top-1/4 right-1/4 -translate-x-12 translate-y-16 w-[4rem] h-[4rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-12"
      />

      {/* center right bottom */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "10px", "0px"], opacity: [0, 0.7, 0.7] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="hidden lg:block absolute top-0 right-0 -translate-x-[8rem] translate-y-[22rem] w-[12rem] h-[12rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-[25deg]"
      />

      {/* right bottom */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "7px", "0px"], opacity: [0, 0.6, 0.6] }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[18rem] h-[18rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-tl from-black to-slate-200/20 rotate-[-20deg]"
      />

      {/* right top */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: ["0px", "8px", "0px"], opacity: [0, 0.5, 0.5] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 w-[20rem] h-[20rem] rounded-full -z-10 border border-slate-200/20 bg-gradient-to-bl from-black to-slate-200/20 rotate-[20deg]"
      />
    </>
  );
}
