"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  const [isShown, setIsShown] = React.useState(false);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsShown(entry.isIntersecting);
      },
      { threshold: 0.5 } // triggers when 20% of section is visible
    );

    const current = wrapperRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-gradient-to-t from-black/150 to-green-700/20 font-sans flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 lg:gap-16 overflow-hidden px-6 lg:px-20"
    >
      {/* Avatar */}
      <motion.div
        initial={{ y: 500 }}
        animate={{
          y: isShown ? 0 : 500,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 200,
          restDelta: 0.01,
        }}
        className="relative z-0 flex justify-center lg:justify-start w-full lg:w-1/2 mb-10 lg:mb-0"
      >
        <Image
          src="/assets/avatar.png"
          alt="Avatar"
          width={900}
          height={900}
          className="drop-shadow-xl select-none -translate-y-5"
          priority
        />
      </motion.div>

      {/* Text content */}
      <div
        // initial={{ y: 100, opacity: 0 }}
        // animate={{
        //   y: isShown ? 0 : 100,
        //   opacity: isShown ? 1 : 0,
        // }}
        // transition={{
        //   type: "spring",
        //   stiffness: 200,
        //   damping: 25,
        //   delay: 0.2, // staggers after avatar
        // }}
        className="relative z-10 w-full lg:w-1/2 text-center lg:text-left space-y-4 -translate-y-5"
      >
        <h1
          className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text 
             bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"
        >
          Yo! I&apos;m Farras
        </h1>

        <p className="text-gray-300 leading-relaxed max-w-[400px]">
          I’m Farras Nazhif, a Web Developer and Informatics Engineering student
          at Institut Teknologi Sepuluh Nopember.
        </p>

        <p className="text-gray-300 leading-relaxed max-w-[400px]">
          I’m continuously sharpening my skills to create responsive, dynamic,
          and visually clean web applications. My current favorite toolkit
          includes <strong>HTML, CSS, JavaScript, React, Next.js,</strong> and{" "}
          <strong>Prisma</strong>.
        </p>

        <button
          className="rounded-lg bg-green-800/20 border border-solid border-black/[.08] dark:border-white/[.145] 
          transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
          hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 
          w-full sm:w-auto md:w-[158px]"
        >
          More About Me
        </button>
      </div>

      {/* Cloud background (above avatar) */}
      <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
        <Image
          src="/assets/clouds.png"
          alt="Clouds"
          width={1600}
          height={400}
          className="w-full object-cover translate-y-20"
          priority
        />
      </div>
    </div>
  );
}
