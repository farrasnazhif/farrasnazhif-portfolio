"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 30,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-black/150 to-green-700/20 font-sans flex justify-center items-center min-h-screen p-0 gap-16 overflow-hidden">
      <HeroBackground />

      <motion.main
        className="flex flex-col gap-2 row-start-2 items-center relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="sm:text-7xl text-5xl font-semibold text-center text-transparent bg-clip-text 
             bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"
          variants={item}
        >
          Hey! I&apos;m Farras
        </motion.h1>

        <motion.p
          className="max-w-sm text-sm sm:text-lg sm:max-w-2xl text-center"
          variants={item}
        >
          I design and build polished, user-friendly interfaces with React,
          focusing on simplicity, performance, and seamless interactions.
        </motion.p>

        <motion.div
          className="flex gap-4 items-center flex-col sm:flex-row mt-6"
          variants={item}
        >
          <button
            className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </motion.main>
    </div>
  );
}
