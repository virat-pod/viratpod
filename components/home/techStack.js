"use client";
import Image from "next/image";
import useReveal from "@/lib/animations/reveal";

const technologies = [
  { name: "MongoDB", icon: "/svg-icons/mongodb.svg", tag: "Database" },
  { name: "Express.js", icon: "/svg-icons/express.svg", tag: "Backend" },
  { name: "React", icon: "/svg-icons/react.svg", tag: "UI" },
  { name: "Next.js", icon: "/svg-icons/nextjs.svg", tag: "Framework" },
  { name: "Tailwind", icon: "/svg-icons/tailwind.svg", tag: "Styling" },
  { name: "Node.js", icon: "/svg-icons/nodejs.svg", tag: "Runtime" },
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "2000+", label: "Commits" },
  { value: "8mo+", label: "Experience" },
];

export default function TechStack() {
  const section = useReveal(300, 5);

  return (
    <section
      className={`relative px-3 sm:px-6 overflow-hidden`}
    >

      <div
        ref={section.ref}
        style={section.style}
        className={`relative ${section.className} max-w-4xl mx-auto`}
      >

        <div className={`mb-5 sm:mb-8 `}>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500 mb-3">
            Stack
          </p>
          <h2 className="font-grotesk text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight">
            What I build with
          </h2>
        </div>

        <div className="space-y-px mb-8">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group  transition-transform flex items-center gap-5 py-4 sm:px-2 border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 duration-200 cursor-default`}
            >
              <span className="sm:w-6 text-xs text-stone-300 dark:text-stone-600 font-mono tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="sm:w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src={tech.icon}
                  width={26}
                  height={26}
                  alt={tech.name}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>

              <span className="flex-1 font-grotesk text-lg font-medium text-stone-800 ">
                {tech.name}
              </span>

              <span className="text-xs text-stone-400 dark:text-stone-500 tracking-wider uppercase group-hover:text-stone-600 transition-colors duration-200">
                {tech.tag}
              </span>

              <span className="w-4 h-px bg-stone-300 dark:bg-stone-600 group-hover:w-8 group-hover:bg-stone-800 group-active:w-8 group-active:bg-stone-800 transition-all duration-300" />
            </div>
          ))}
        </div>


        <div
          className={`flex  items-center gap-0 border border-stone-200  rounded-2xl overflow-hidden`}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 py-6 text-center ${i !== stats.length - 1 ? "border-r border-stone-200" : ""}`}
            >
              <p className="font-grotesk text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-1 tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
