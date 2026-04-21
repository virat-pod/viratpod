"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import useReveal from "@/lib/animations/reveal";

const projects = [
  {
    id: 1,
    title: "White Green Decors",
    tag: "Full Stack",
    year: "2026",
    desc: "A modern full-stack ecommerce platform designed to connect users through interactive features, real-time updates, and a clean user experience. It enables seamless interaction, content sharing, and community building in a fun and intuitive way.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/whitegreendecor/sc2.png",
    link: "https://whitegreendecors.com",
  },
  {
    id: 2,
    title: "Get Me A Chai",
    tag: "Full Stack",
    year: "2026",
    desc: "A unique social-media engagement web, it contains so many features that make sense to use this web and enjoy it with friends.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    image: "/projects/getmeachai.png",
    link: "https://get-me-a-chai-buzz.vercel.app",
  },
  {
    id: 3,
    title: "Workflows Builders",
    tag: "Full Stack",
    year: "2026",
    desc: "A discipline consistency holding web, that make your task a space to organise and clean way to complete.",
    tech: ["Next.js", "Express.js", "Tailwind", "MongoDB"],
    image: "/projects/workflow.png",
    link: "https://workflows-builders.vercel.app",
  },
  {
    id: 4,
    title: "Spotify-Vibes",
    tag: "Frontend",
    year: "2025",
    desc: "A music player made up of spotify but gives vibes like spotify-vibes. It has different ui that make sense to use, it was my first big project.",
    tech: ["HTML", "CSS", "Vanilla JS"],
    image: "/projects/spotify.png",
    link: "https://spotify-vibes.vercel.app",
  },
  {
    id: 5,
    title: "Twitter",
    tag: "Frontend",
    year: "2025",
    desc: "A proper clone on x.com, it was my first tailwind project that i made during free time.",
    tech: ["Tailwind", "Vanilla JS"],
    image: "/projects/twitter.png",
    link: "https://x-webs.vercel.app",
  },
];

export default function ProjectSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState(1);
  const timeoutRef = useRef(null);
  const section = useReveal(300, 5);

  const go = (next) => {
    if (animating) return;
    setDir(next > active ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 380);
  };

  const prev = () => go(active === 0 ? projects.length - 1 : active - 1);
  const next = () => go(active === projects.length - 1 ? 0 : active + 1);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  const p = projects[active];

  return (
    <section id="projects" className="py-2 px-3 sm:px-6 h-[46rem] sm:h-fit">
      <div
        ref={section.ref}
        style={section.style}
        className={`max-w-4xl ${section.className} mx-auto`}
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400  mb-3">
              Work
            </p>
            <h2 className="font-grotesk text-3xl sm:text-5xl font-bold text-stone-900 ">
              Selected Projects
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border bg-white border-stone-200  flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white   hover:border-stone-900 transition-all duration-200"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-stone-200  flex items-center justify-center text-stone-500  hover:bg-stone-900 hover:text-white hover:border-stone-900  transition-all duration-200"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-stone-200"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${dir * 30}px)`
              : "translateX(0)",
            transition: "opacity 0.38s ease, transform 0.38s ease",
          }}
        >
          <div
            onClick={() => {
              window.open(p.link, "_blank");
            }}
            className="relative cursor-pointer aspect-[4/3] lg:aspect-auto lg:min-h-[400px] bg-stone-100  overflow-hidden"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black/25 backdrop-blur-sm text-white text-xs tracking-widest uppercase rounded-full border border-white/20">
                {p.tag}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-white/40 text-xs">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-white ">
            <div>
              <p className="text-xs text-stone-400  font-mono mb-4">{p.year}</p>
              <h3 className="font-grotesk text-2xl sm:text-3xl font-bold text-stone-900  mb-4">
                {p.title}
              </h3>
              <p className="text-stone-500  leading-relaxed text-sm sm:text-base">
                {p.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-8 mt-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-stone-100  text-stone-600 dark:text-stone-300 border border-stone-200 "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-900  border-b border-stone-900  pb-0.5 hover:gap-4 transition-all duration-200 hover:-translate-y-1"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-stone-900 " : "w-2 bg-stone-300 "
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
