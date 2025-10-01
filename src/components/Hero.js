"use client"; // required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { GitHubIcon, InstagramIcon, TwitterIcon } from "./SocialMediaIcon";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-black/150 to-slate-700/20 font-sans flex justify-center items-center min-h-screen p-0 gap-16 overflow-hidden">
      <HeroBackground />

      <motion.main
        className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          restDelta: 0.01,
        }}
      >
        <motion.div
          className="flex flex-col justify-center items-center text-center gap-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            restDelta: 0.01,
          }}
        >
          <h1 className="sm:text-7xl text-5xl font-medium">
            Hi! I&apos;m Farras
          </h1>

          <p className="max-w-sm text-sm sm:text-lg sm:max-w-2xl">
            I design and build polished, user-friendly interfaces with React,
            focusing on simplicity, performance, and seamless interactions.
          </p>

          <motion.div
            className="flex gap-4 items-center flex-col sm:flex-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              restDelta: 0.01,
            }}
          >
            <a
              className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              More About Me
            </a>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
