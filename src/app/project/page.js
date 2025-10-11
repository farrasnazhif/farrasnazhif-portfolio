"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "react-feather";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

export default function Project() {
  const cards = [
    {
      id: 1,
      title: "SEA Catering",
      tagline: "A seamless catering management solution.",
      image: "/assets/sea-catering.png",
      tech: [
        { icon: SiNextdotjs, color: "#fff" },
        { icon: SiTailwindcss, color: "#38BDF8" },
        { icon: SiTypescript, color: "#3178C6" },
        { icon: SiPrisma, color: "#dedede" },
        { icon: SiVercel, color: "#FFFFFF" },
      ],
      slug: "sea-catering",
      icon: "/assets/sea-catering.svg",
      link: "https://sea-catering-ten.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce",
      tagline: "Empowering smarter online sales.",
      image: "/assets/e-commerce.png",
      tech: [
        { icon: SiNextdotjs, color: "#fff" },
        { icon: SiTailwindcss, color: "#38BDF8" },
        { icon: SiTypescript, color: "#3178C6" },
        { icon: SiPrisma, color: "#dedede" },
        { icon: SiVercel, color: "#FFFFFF" },
      ],
      slug: "e-commerce",
      icon: "/assets/e-commerce.svg",
      link: "https://ecommerce-gold-beta-94.vercel.app/",
    },
    {
      id: 3,
      title: "Sudoku",
      tagline: "Sudoku game integrated with Sudoku API.",
      image: "/assets/sudoku.png",
      tech: [
        { icon: SiReact, color: "#61DAFB" },
        { icon: SiTailwindcss, color: "#38BDF8" },
      ],
      slug: "sudoku",
      icon: "/assets/sudoku.svg",
      link: "https://sudoku-eta-five.vercel.app/",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center gap-[6rem] lg:gap-[4rem] text-start px-6 lg:px-12 py-[12rem] bg-gradient-to-r from-cyan-900/30 via-black to-cyan-900/30">
      <div className="flex flex-col justify-center items-center gap-8 py-0">
        <h3 className="text-4xl lg:text-5xl font-bold text-white ">PROJECTS</h3>
        <div className="h-2 w-64 rounded-md bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-400/20"></div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-start">
        {cards.map((card) => (
          <div key={card.id} className="group relative">
            <div className="relative w-[20em] h-[15em] bg-[#252525] rounded-md cursor-pointer overflow-hidden transition-all duration-300 xl:group-hover:scale-[1.05] xl:group-hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]">
              <div className="absolute top-0 right-0 flex justify-end opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-all duration-300">
                <div className="w-4 h-4 rounded-md m-3 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110">
                  <Link href={card.link} target="_blank">
                    <ExternalLink size={14} className="text-white" />
                  </Link>
                </div>
              </div>

              <Link
                href={card.link}
                target="_blank"
                className="flex justify-center items-center h-full"
              >
                <Image
                  src={card.image}
                  width={500}
                  height={500}
                  alt={card.title}
                  className="object-cover"
                />
              </Link>

              <div className="absolute w-[15em] h-[13em] bg-[#1E1F26]/60 rounded-md -z-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"></div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-9 h-9 bg-[#aaaaaa] rounded-md flex items-center justify-center">
                <Image
                  src={card.icon}
                  width={30}
                  height={30}
                  alt="Project Icon"
                />
              </div>
              <div className="text-white font-sans">
                <p className="text-sm font-bold">{card.title}</p>
                <p className="text-xs text-gray-400">{card.tagline}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6 items-center justify-between">
              <div className="flex justify-center items-center gap-2 px-0 mx-0">
                {card.tech.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <Icon
                      key={index}
                      size={20}
                      color={tech.color}
                      className="xl:opacity-0 opacity-100 translate-y-1 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    />
                  );
                })}
              </div>

              <Link href={`/projects/${card.slug}`}>
                <button
                  className="
                    opacity-0 
                    translate-y-1
                    group-hover:opacity-100 
                    group-hover:translate-y-0 
                    transition-all 
                    duration-300 
                    text-cyan-400 
                    underline 
                    text-xs
                  "
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
