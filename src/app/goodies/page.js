import Link from "next/link";

export default function Goodies() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-[6rem] lg:gap-[4rem] text-start px-6 lg:px-12 py-[12rem] bg-gradient-to-r from-cyan-900/30 via-black to-cyan-900/30 min-h-screen">
      <div className="inset-0 flex gap-6">
        <p className="max-w-[50px] font-bold">Coming Soon</p>
        <div className="h-12 w-[2px] bg-slate-400"></div>
        <p className="max-w-[20rem]">
          On this page there will be thrilling games that i made for you to
          tinker around.
        </p>
      </div>
    </div>
  );
}
