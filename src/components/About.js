"use client";

import React from "react";
import { Code, Monitor } from "react-feather";
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tooltip from "./ui/Tooltip/Tooltip";

export default function About() {
  return (
    <section className="text-center px-8 py-[6rem] bg-gradient-to-r from-red-900/30 via-black to-red-900/30">
      <div className="flex flex-col justify-center items-center gap-12 py-12">
        <h3 className="text-5xl font-bold">ABOUT ME</h3>
        <div className="flex items-center justify-center space-x-4">
          {/* Left line */}
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-400/20"></div>
          {/* Center dot */}
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
          {/* Right line */}
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-400/20"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 text-center">
        <p className="text-slate-200 max-w-xl mx-auto text-md leading-relaxed">
          Hey there! I&apos;m{" "}
          <span className="font-semibold text-cyan-400">Farras Nazhif</span>, a
          web developer and Informatics Engineering student at Institut
          Teknologi Sepuluh Nopember.
        </p>

        <p className="text-slate-200 max-w-xl mx-auto text-md leading-relaxed">
          I love building things for the web. Clean, responsive, and a little
          bit fancy when it needs to be. I&apos;m always trying out new stuff to
          make my projects smoother and more fun to use.
        </p>

        <p className="text-slate-300 max-w-xl mx-auto text-md leading-relaxed italic">
          Here are the tools I&apos;ve been vibing with lately.
        </p>

        <div className="flex justify-center items-center gap-6 text-4xl">
          <Tooltip content="Next Js" position="top">
            <SiNextdotjs />
          </Tooltip>

          <Tooltip content="React Js" position="top">
            <SiReact />
          </Tooltip>

          <Tooltip content="Typescript" position="top">
            <SiTypescript />
          </Tooltip>

          <Tooltip content="Tailwind CSS" position="top">
            <SiTailwindcss />
          </Tooltip>

          <Tooltip content="Prisma" position="top">
            <SiPrisma />
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 my-12">
        {/* Left line */}
        {/* <div className="h-[2px] w-5 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-400/20"></div> */}
        {/* Center dot */}
        <div className="w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
        {/* Right line */}
        {/* <div className="h-[2px] w-5 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-400/20"></div> */}
      </div>

      <div className="flex flex-col justify-center items-center gap-6 ">
        <h4 className="relative text-2xl font-bold text-white">What I Do</h4>
        <div className="lg:flex lg:flex-row flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-transparent p-3 border border-blue-700 rounded-lg">
            <Monitor className="w-4 h-4" />
            Frontend Development
          </div>
          <div className="flex items-center gap-2 bg-transparent p-3 border border-green-700 rounded-lg">
            <Code className="w-4 h-4" />
            Informatics Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
