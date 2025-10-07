import Image from "next/image";

import ArrowBoop from "@/components/ArrowBoop/ArrowBoop";
import Button from "@/components/ui/Button/Button";

export default function ProjectSection() {
  return (
    <section className="px-6 md:px-[12rem] py-[6rem] bg-gradient-to-r from-green-900/30 via-black to-green-900/30 text-white">
      <div className="flex flex-col justify-center items-center gap-12 py-12">
        <h3 className="text-5xl font-bold mb-16 border-b-2 border-cyan-500 inline-block pb-2 tracking-wide">
          PROJECTS
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-16">
        {/* left */}
        <div className="relative group w-full md:w-2/3 bg-gradient-to-b from-slate-800/60 to-black border border-slate-700 rounded-2xl p-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]">
          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-300 text-md leading-relaxed max-w-md">
              Catering management web app where users can schedule meal
              deliveries and customize menus.
            </p>
            <ArrowBoop direction="right" />
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-700 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent p-1">
            <Image
              src="/assets/sea-catering.png"
              alt="Sea catering project preview"
              width={800}
              height={450}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Project title */}
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              SEA Catering
            </h3>
            <p className="text-slate-400 mt-1 text-sm">Personal Project</p>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-lg">
            A full-featured catering management platform that allows users to
            schedule deliveries and choose meal types.
          </p>

          <ul className="text-slate-200 text-sm space-y-2">
            <li>- Customizable delivery scheduling with live updates</li>
            <li>- Meal type options</li>
            <li>
              - Admin dashboard for managing menus, customers, and deliveries
            </li>
          </ul>

          <div className="flex items-center gap-4 pt-3">
            {/* <SiNextdotjs className="text-white w-6 h-6" title="Next.js" />
            <SiTailwindcss
              className="text-sky-400 w-6 h-6"
              title="Tailwind CSS"
            />
            <SiTypescript className="text-sky-400 w-6 h-6" title="Typescript" />
            <SiPrisma className="text-green-400 w-6 h-6" title="Prisma" />
            <SiVercel className="text-white w-6 h-6" title="Vercel" /> */}
          </div>

          <Button className="flex items-center gap-2 mt-8">
            Explore More
            <ArrowBoop direction="right" />
          </Button>
        </div>
      </div>
    </section>
  );
}
