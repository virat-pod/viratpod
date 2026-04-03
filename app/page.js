import Hero from "@/components/home/hero";
import TechStack from "@/components/home/techStack";
import ProjectSlider from "@/components/home/cards/projectsCard";
import FAQ from "@/components/home/faq";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="flex flex-col bg-stone-300/25 px-3 pt-28 md:pt-32 pb-12 sm:pb-36 gap-24 sm:gap-28 md:gap-32">
      <Hero />
      <TechStack />
      <ProjectSlider />
      <FAQ />
      <Contact />
    </main>
  );
}
