"use client";

import React from "react";
import { File, GitHub, Instagram } from "react-feather";
import Button from "./ui/Button/Button";
import ArrowBoop from "./ArrowBoop/ArrowBoop";
import Link from "next/link";
import Tooltip from "./ui/Tooltip/Tooltip";
import LogoTiles from "./Goodies/LogoTiles";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row justify-center lg:gap-[8rem] gap-[1rem] items-center px-8 pt-28 lg:pt-0 bg-gradient-to-r from-cyan-900/30 via-black to-cyan-900/30 min-h-[100dvh] overflow-hidden">
      <div className="max-w-lg">
        <p className=" text-slate-200 text-lg mb-1 tracking-wide italic">
          Say Hi! From
        </p>
        <h2
          className="text-6xl md:text-5xl 
        xl:text-6xl
        font-extrabold mb-5 leading-none"
        >
          FARRAS NAZHIF
        </h2>
        <p className="text-slate-200 mb-8 text-md md:text-md">
          I build fun, dynamic, and user-focused interfaces that bring ideas to
          life through thoughtful design and tech.
        </p>
        <div className="flex gap-2 mb-8">
          <Button className="flex items-center gap-2">
            Let&apos;s Connect
            <ArrowBoop />
          </Button>
          <Link href="/about">
            <Button variant="outline">More About Me</Button>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Tooltip content="Github">
            <Link href="https://github.com/farrasnazhif">
              <GitHub strokeWidth={1} />
            </Link>
          </Tooltip>

          <Tooltip content="Instagram">
            <Link href="https://www.instagram.com/farrasnazhiif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram strokeWidth={1} />
            </Link>
          </Tooltip>

          <Tooltip content="Resume">
            <File strokeWidth={1} />
          </Tooltip>
        </div>
      </div>

      <div className="mt-16 md:mt-0">
        <div className="relative w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full  "></div>
          {/* <DraggableCircles /> */}
          <LogoTiles />
        </div>
      </div>
    </section>
  );
}
