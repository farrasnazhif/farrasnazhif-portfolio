"use client";

import {
  ChevronDown,
  ChevronUp,
  FileText,
  Folder,
  Home,
  Sun,
  User,
} from "react-feather";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      {/* desktop */}
      <div className="hidden max-w-[1200px] mx-auto px-6 py-4 sm:flex items-center justify-between gap-4 relative">
        <div className="font-bold text-xl cursor-pointer">FN</div>

        <nav
          className="flex gap-8 absolute left-1/2 transform -translate-x-1/2"
          aria-label="Main navigation"
        >
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
          <button className="p-2 rounded-lg cursor-pointer">
            <Sun className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4 relative">
        <div className="font-bold text-xl cursor-pointer">FN</div>

        <nav
          className="flex justify-between items-center gap-4 rounded-full absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-black/150 to-slate-700/20 text-white border border-slate-50/20 px-3 py-1"
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
              onClick={() => setIsOpen(!open)}
            >
              {open ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
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
        {/* <div className="flex items-center gap-3"></div> */}
      </div>
    </header>
  );
}
