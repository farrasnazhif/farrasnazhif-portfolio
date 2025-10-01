import { Sun } from "react-feather";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4 relative">
        <div className="font-bold text-xl cursor-pointer">FN</div>

        <nav
          className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2"
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
    </header>
  );
}
