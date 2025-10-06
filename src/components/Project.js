import { Play } from "react-feather";

export default function ProjectSection() {
  return (
    <section className="px-8 py-20 bg-black">
      <h3 className="text-2xl font-bold mb-10 border-b-2 border-cyan-500 inline-block pb-2">
        PROJECTS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { title: "CAAS", img: "/edit1.jpg" },
          { title: "RAS", img: "/edit2.jpg" },
          { title: "LORREM", img: "/edit3.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            {/* <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover opacity-90"
                  /> */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Play className="w-12 h-12 text-white" />
            </div>
            <p className="mt-3 text-center font-semibold tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
