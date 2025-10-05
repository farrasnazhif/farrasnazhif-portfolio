import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-gradient-to-t from-black/150 to-green-700/20 font-sans flex flex-col lg:flex-row justify-center items-center min-h-screen gap-4 overflow-hidden px-6 lg:px-20">
      {/* Avatar */}
      <div className="relative z-0 flex justify-center lg:justify-start w-full lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src="/assets/avatar.png"
          alt="Avatar"
          width={900}
          height={900}
          className="drop-shadow-xl select-none -translate-y-5"
          priority
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left space-y-4 -translate-y-5">
        <h1
          className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text 
             bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"
        >
          Yo! I&apos;m Farras
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-[400px]">
          I’m Farras Nazhif, a Web Developer and Informatics Engineering student
          at Institut Teknologi Sepuluh Nopember.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-[400px]">
          I’m continuously sharpening my skills to create responsive, dynamic,
          and visually clean web applications. My current favorite toolkit
          includes <strong>HTML, CSS, JavaScript, React, Next.js,</strong> and{" "}
          <strong>Prisma</strong>.
        </p>

        <button
          className="rounded-lg bg-green-800/20 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          More About Me
        </button>
      </div>

      {/* Cloud background (above avatar) */}
      <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
        <Image
          src="/assets/clouds.png"
          alt="Clouds"
          width={1600}
          height={400}
          className="w-full object-cover translate-y-20"
          priority
        />
      </div>
    </div>
  );
}
