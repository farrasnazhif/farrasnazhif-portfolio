"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Folder, Home, Sun, User } from "react-feather";
import Dropdown from "./Dropdown";
import ChevronBoop from "./ChevronBoop/ChevronBoop";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: 0,
        opacity: 1,
        width: "100%",
        borderRadius: 0,
        borderWidth: 0,
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
      }}
      animate={{
        y: scrolled ? 25 : 0,
        width: scrolled ? "50%" : "100%",
        borderRadius: scrolled ? "1.25rem" : "0rem",
        borderWidth: 0.1,
        borderColor: scrolled
          ? "rgba(209,213,219,0.4)"
          : "rgba(209,213,219,0.0)",
        boxShadow: scrolled
          ? "0 8px 20px rgba(0,0,0,0.1)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        borderColor: { duration: 0.5, ease: "easeInOut" },
      }}
      className="fixed left-1/2 -translate-x-1/2 z-50 text-white"
    >
      {/* Desktop */}
      <div className="hidden sm:flex max-w-[1200px] mx-auto px-6 py-4 items-center justify-between gap-4">
        <div className="font-bold text-xl cursor-pointer">FN</div>

        <nav className="flex gap-8" aria-label="Main navigation">
          <a href="#" className="font-medium hover:text-slate-400">
            Home
          </a>
          <a href="#" className="font-medium hover:text-slate-400">
            Blog
          </a>
          <a href="#" className="font-medium hover:text-slate-400">
            Projects
          </a>
          <a href="#" className="font-medium hover:text-slate-400">
            About
          </a>
          <a href="#" className="font-medium hover:text-slate-400">
            Goodies
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg cursor-pointer hover:bg-black/10">
            <Sun className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4 relative">
        <div className="font-bold text-xl cursor-pointer">FN</div>

        <nav
          className={`flex justify-between items-center gap-4 rounded-full px-3 py-1 border ${
            scrolled
              ? "bg-white/90 text-black border-gray-200 shadow-md backdrop-blur-md"
              : "bg-gradient-to-b from-black/150 to-slate-700/20 text-white border-slate-50/20"
          }`}
          aria-label="Main navigation"
        >
          <p>farrasnazhif</p>
          <button className="cursor-pointer">
            <Sun className="w-4 h-4" />
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
