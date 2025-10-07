"use client";

import React from "react";
import { Code, Monitor } from "react-feather";

import Tooltip from "./ui/Tooltip/Tooltip";
import Avatar from "./Avatar/Avatar";
import NextIcon from "../../public/assets/icons/NextIcon";

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-[6rem] lg:gap-[8rem] text-start px-6 lg:px-12 py-[6rem] bg-gradient-to-r from-red-900/30 via-black to-red-900/30">
      {/* 🧍 Avatar */}
      <div className="flex flex-col justify-center lg:justify-center items-center w-full lg:w-auto mb-12 lg:mb-0 gap-12">
        <Avatar />
        <div className="flex flex-col  gap-6">
          {/* <h4 className="text-2xl font-bold text-white">What I Do</h4> */}

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

      {/* 📝 Content */}
      <div className="flex flex-col justify-start items-start ">
        {/* 🔹 Title */}
        <div className="flex flex-col justify-start items-start gap-8 py-8">
          <h3 className="text-4xl lg:text-5xl font-bold text-white">
            ABOUT ME
          </h3>

          <div className="h-2 rounded-md w-65 bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-200/50"></div>
        </div>

        {/* 🔹 Description */}
        <div className="flex flex-col justify-start items-start gap-6 max-w-xl">
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

          <p className="text-slate-300 text-md leading-relaxed italic">
            Here are the tools I&apos;ve been vibing with lately:
          </p>

          {/* 🔹 Tech Stack */}
          <div className="flex flex-wrap justify-start items-center gap-6 text-4xl text-white mt-8">
            <Tooltip content="Next.js" position="top">
              <NextIcon />
            </Tooltip>
            {/* <Tooltip content="React.js" position="top">
              <SiReact />
            </Tooltip>
            <Tooltip content="TypeScript" position="top">
              <SiTypescript />
            </Tooltip>
            <Tooltip content="Tailwind CSS" position="top">
              <SiTailwindcss />
            </Tooltip>
            <Tooltip content="Prisma" position="top">
              <SiPrisma />
            </Tooltip>{" "}
             */}
          </div>
        </div>

        {/* 🔹 Divider */}

        {/* 🔹 What I Do */}
      </div>
    </section>
  );
}
