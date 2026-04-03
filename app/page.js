import Hero from "@/components/home/hero";
import TechStack from "@/components/home/techStack";
import ProjectSlider from "@/components/home/cards/projectsCard";
import FAQ from "@/components/home/faq";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="flex flex-col bg-stone-300/25 px-3 pb-12 pt-12 sm:pb-36 gap-24 sm:gap-28 md:gap-30">
      <div className="making-hero-visible-more flex flex-col gap-10">
        <Hero />
        <TechStack />
      </div>
      <ProjectSlider />
      <FAQ />
      <Contact />
    </main>
  );
}
