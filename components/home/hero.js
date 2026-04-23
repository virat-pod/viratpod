"use client"
import Link from "next/link";
import Image from "next/image";
import HeroRightCard from "@/components/home/cards/heroRightCard";
import HeroLeftCard from "@/components/home/cards/heroLeftCard";
import useReveal from "@/lib/animations/reveal";

const Hero = () => {
    const badge = useReveal(20, 2)
    const title = useReveal(50, 3);
    const titlePara = useReveal(70, 5)
    const cta = useReveal(100, 6);
    const link = useReveal(100, 6)
    

  return (
    <section className="hero-section relative h-[78vh] sm:min-h-[90vh] flex flex-col justify-center items-center">
        <HeroLeftCard />
        <div className="flex flex-col gap-5.5 md:gap-8 justify-center items-center">

          <div ref={badge.ref} style={badge.style} className={`flex ${badge.className} items-center gap-2 px-4 py-2 rounded-full bg-white/85 border border-stone-200 text-sm text-stone-600`}>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </div>


          <div className="flex flex-col gap-5.5 justify-center items-center">

            <div ref={title.ref} style={title.style} className={`flex ${title.className} flex-col gap-3 text-center`}>
              {" "}
              <h1 className="font-grotesk text-stone-800 text-[2.5rem] sm:text-5xl md:text-6xl font-bold leading-tight">
                Hey, I'm <span className="text-amber-600">ViratPod</span>
              </h1>
              <p className="text-stone-600 text-lg sm:text-xl md:text-2xl font-medium">
                Full-Stack Developer & Creative Builder
              </p>
            </div>
   
            <p  ref={titlePara.ref} style={titlePara.style} className={`text-center ${titlePara.className} text-stone-500 text-base sm:text-lg max-w-xl`}>
              I build modern web experiences with clean code and pixel-perfect
              design. Currently crafting things with Next.js, React, and a lot
              of chai.
            </p>

            <div ref={cta.ref} style={cta.style} className={`flex ${cta.className} flex-row items-center gap-3 sm:gap-4 mt-4`}>
              <Link href="#contact">
                <button className="py-3 px-8 bg-stone-800 hover:bg-stone-900 text-white rounded-full font-medium transition-all hover:scale-[1.02] active:scale-95">
                  Get in touch
                </button>
              </Link>
              <Link href="#projects">
                <button className="py-3 px-8 border border-stone-300 hover:border-stone-400 text-stone-700 rounded-full font-medium transition-all hover:scale-[1.02] active:scale-95">
                  View projects
                </button>
              </Link>
            </div>
            {/* Quick links */}
            <div ref={link.ref} style={link.style} className={`flex ${link.className} items-center gap-4 mt-2 text-stone-400`}>
              {" "}
              <a
                href="https://github.com/virat-pod"
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-800 transition-colors"
              >
                <Image
                  src={"/svg-icons/github.svg"}
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584187945264"
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-800 transition-colors"
              >
                <Image
                  src={"/svg-icons/facebook.svg"}
                  width={18}
                  height={18}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/viratpod/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-800 transition-colors"
              >
                <Image
                  src={"/svg-icons/instagram.svg"}
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </a>
              <a
                href="mailto:viratpod2012@gmail.com"
                className="hover:text-stone-800 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <HeroRightCard />
      </section>
  );
};

export default Hero;
