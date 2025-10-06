"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Folder, Home, Sun, User } from "react-feather";
import Dropdown from "./Dropdown";
import ChevronBoop from "./ChevronBoop/ChevronBoop";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 800);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1200);

    handleResize();

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: 0,
        opacity: 1,
        width: "100%",
        borderRadius: 0,
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
      }}
      animate={
        isDesktop
          ? {
              y: scrolled ? 25 : 0,
              width: scrolled ? "40%" : "100%",
              borderRadius: scrolled ? "1.25rem" : "0rem",
              backgroundColor: scrolled
                ? "rgba(12, 74, 110, 0.5)"
                : "rgba(0,0,0,0.0)",
              boxShadow: scrolled
                ? "inset 0 0 12px rgba(255,255,255,0.05), 0 8px 25px rgba(0,0,0,0.3)"
                : "0 0 0 rgba(0,0,0,0)",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        opacity: { duration: 0.4, ease: "easeInOut" },
        backgroundColor: { duration: 0.5, ease: "easeInOut" },
        boxShadow: { duration: 0.5, ease: "easeInOut" },
        restDelta: 0.01,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-50 text-white"
    >
      {/* Desktop */}
      <div className="hidden xl:flex max-w-[1200px] mx-auto px-6 py-4 items-center justify-between gap-4">
        <button className="hidden lg:block font-bold text-2xl cursor-pointer text-slate-400">
          <Link href="/">FN</Link>
        </button>

        <nav
          className="flex justify-center items-center gap-8"
          aria-label="Main navigation"
        >
          <Link href="/" className="font-medium hover:text-slate-400">
            Home
          </Link>
          <Link href="blog" className="font-medium hover:text-slate-400">
            Blog
          </Link>
          <Link href="project" className="font-medium hover:text-slate-400">
            Projects
          </Link>
          <Link href="about" className="font-medium hover:text-slate-400">
            About
          </Link>
          <Link href="goodies" className="font-medium hover:text-slate-400">
            Goodies
          </Link>
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <button className="p-2 rounded-lg cursor-pointer hover:bg-black/10">
            <Sun className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="xl:hidden max-w-[1200px] mx-auto px-6 py-2 flex items-center justify-between gap-4 relative bg-cyan-900/20 backdrop-blur-lg shadow-lg">
        <button className="font-bold text-2xl cursor-pointer text-slate-400">
          <Link href="/">FN</Link>
        </button>

        <nav
          className="flex justify-between items-center gap-4 rounded-full px-3 py-1 border 
             
              bg-gradient-to-b from-black/70 to-slate-700/20 text-white border-slate-50/20
          "
          aria-label="Main navigation"
        >
          <p>farrasnazhif</p>
          <button className="cursor-pointer">
            <Sun className="w-5 h-5" />
          </button>
        </nav>

        <Dropdown
          trigger={({ open, setIsOpen }) => (
            <button
              className="p-2 rounded-lg cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {open ? (
                <ChevronBoop direction="up" />
              ) : (
                <ChevronBoop direction="down" />
              )}
            </button>
          )}
          className="w-90"
        >
          <div className="p-3 rounded-xl bg-white/10 cursor-pointer flex gap-3">
            <Home className="w-5 h-5" />
            <div>
              <p className="font-medium">Home</p>
              <p className="text-sm text-gray-400">
                Start here and explore everything I share.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/10 cursor-pointer flex gap-3">
            <FileText className="w-5 h-5" />
            <div>
              <p className="font-medium">Blog</p>
              <p className="text-sm text-gray-400">
                Insights, tutorials, and stories I write down.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/10 cursor-pointer flex gap-3">
            <Folder className="w-5 h-5" />
            <div>
              <p className="font-medium">Projects</p>
              <p className="text-sm text-gray-400">
                A collection of apps, experiments, and builds.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/10 cursor-pointer flex gap-3">
            <User className="w-5 h-5" />
            <div>
              <p className="font-medium">About</p>
              <p className="text-sm text-gray-400">
                Who I am, what I do, and what I love.
              </p>
            </div>
          </div>
        </Dropdown>
      </div>
    </motion.header>
  );
}
