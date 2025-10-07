import React from "react";
import { File, GitHub, Instagram } from "react-feather";
import Button from "./ui/Button/Button";
import ArrowBoop from "./ArrowBoop/ArrowBoop";
import DraggableCircles from "./Goodies/DraggableCircles";

export default function Hero() {
  return (
    <div className="bg-black text-white font-sans ">
      <section className="flex flex-col md:flex-row justify-center lg:gap-[8rem] gap-[1rem] items-center px-8 pt-28 lg:pt-0 bg-gradient-to-r from-cyan-900/30 via-black to-cyan-900/30 min-h-[95vh]">
        <div className="max-w-lg">
          <p className=" text-slate-200 text-lg mb-3 tracking-wide">
            Say Hi! From
          </p>
          <h2 className="text-6xl md:text-6xl font-extrabold mb-5 leading-none">
            FARRAS NAZHIF
          </h2>
          <p className="text-slate-200 mb-8 text-md md:text-md">
            I build smooth, dynamic, and user-focused interfaces that make ideas
            come alive — one React component at a time.
          </p>
          <div className="flex gap-2 mb-8">
            <Button className="flex items-center gap-2">
              Let&apos;s Connect
              <ArrowBoop />
            </Button>
            <Button variant="outline">More About Me</Button>
          </div>
          <div className="flex space-x-4">
            <GitHub strokeWidth={1} />

            <Instagram strokeWidth={1} />
            <File strokeWidth={1} />
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          <div className="relative w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full  "></div>

            {/* <DraggableCircles /> */}
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* <section className="px-8 py-20 bg-black text-center">
        <h3 className="text-2xl font-bold mb-8">I AM READY TO CONSULT YOU</h3>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-black">
          <input placeholder="My Name Is" className="px-4 py-2 rounded-sm" />
          <input
            placeholder="I Am Interested In"
            className="px-4 py-2 rounded-sm"
          />
          <input
            placeholder="Message"
            className="px-4 py-2 rounded-sm md:col-span-2"
          />
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-sm font-semibold">
            SEND
          </button>
        </form>
        <div className="flex justify-center mt-10 space-x-6 text-gray-400 text-sm">
          <p>📞 +92 455 478 112</p>
          <p>📍 Defense Phase 3, Lahore Pakistan</p>
          <p>📧 videoeditor@gmail.com</p>
        </div>
      </section> */}
    </div>
  );
}
