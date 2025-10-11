"use client";

import Avatar from "@/components/Avatar/Avatar";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import React from "react";
import { Code, Monitor } from "react-feather";
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  return (
    <section className="relative flex flex-col lg:flex-row justify-center items-start gap-[2rem] lg:gap-[8rem] text-start px-6 lg:px-12 py-[12rem] bg-gradient-to-r from-red-900/30 via-black to-red-900/30 overflow-hidden min-h-screen">
      <div className="flex flex-col justify-center items-center w-full lg:w-auto mb-12 lg:mb-0 gap-16">
        <Avatar />
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center gap-2 bg-transparent p-3 border border-blue-700 rounded-lg text-slate-200">
              <Monitor className="w-4 h-4" />
              Frontend Development
            </div>

            <div className="flex items-center gap-2 bg-transparent p-3 border border-green-700 rounded-lg text-slate-200">
              <Code className="w-4 h-4" />
              Informatics Engineering
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-10">
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start  gap-8 py-0">
          <h3 className="text-4xl lg:text-5xl font-bold text-white">
            ABOUT ME
          </h3>
          <div className="h-2 w-65 rounded-md bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-400/20"></div>
        </div>

        <div className="flex flex-col sm:justify-start sm:items-start justify-center items-center gap-6 max-w-xl text-justify sm:text-start">
          <p className="text-slate-200 text-md leading-relaxed">
            Hey there! I&apos;m{" "}
            <span className="font-semibold text-cyan-400">Farras Nazhif</span>,
            a web developer and Informatics Engineering student at Institut
            Teknologi Sepuluh Nopember.
          </p>

          <p className="text-slate-200 text-md leading-relaxed">
            I love building things for the web — clean, responsive, and a little
            bit fancy when it needs to be. I&apos;m always exploring new
            technologies to make my projects smoother and more fun to use.
          </p>

          <p className="text-slate-300 text-md leading-relaxed italic text-center sm:text-start ">
            Here are the tools I&apos;ve been vibing with lately:
          </p>

          <div className="flex flex-wrap justify-start items-center gap-6 text-4xl text-white mt-4">
            <Tooltip content="Next.js" position="top">
              <SiNextdotjs className="text-white" />
            </Tooltip>
            <Tooltip content="React.js" position="top">
              <SiReact className="text-blue-300" />
            </Tooltip>
            <Tooltip content="TypeScript " position="top">
              <SiTypescript className="text-blue-400" />
            </Tooltip>
            <Tooltip content="Tailwind CSS" position="top">
              <SiTailwindcss className="text-blue-300" />
            </Tooltip>
            <Tooltip content="Prisma" position="top">
              <SiPrisma className="text-gray-200" />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
