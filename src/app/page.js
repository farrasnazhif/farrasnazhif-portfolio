import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectSection />
    </>
  );
}
