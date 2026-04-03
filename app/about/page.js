import React from "react";

export const metadata = {
  title: "About ViratPod",
  description:
    "I'm a full stack developer who builds clean, fast, and useful web applications. Open to work.",
};

const about = () => {
  return (
    <div className="flex bg-stone-300/10 flex-col justify-center pt-32 py-15 items-center">
      <div className="wrapper flex flex-col gap-16 w-5/6 sm:w-3/4 lg:w-2/5">
        <div className="title flex flex-col gap-8.5 items-center justify-center">
          <h1 className="font-dancing text-center text-5xl sm:text-6xl font-bold">
            Hi im Virat,
          </h1>
          <h2 className="text-center font-grotesk text-lg lg:text-xl lg:font-lato font-medium lg:font-bold lg:leading-relaxed lg:tracking-wide">
            Some time ago I didn't know what an API was. Now I'm building them.
            That's the pace I work at.
          </h2>
        </div>

        <div className="story flex flex-col gap-7.5">
          <h2 className="text-[1.1rem] font-lato tracking-wider">
            <span
              style={{ lineHeight: "0.8" }}
              className="text-6xl mt-1 font-serif leading-none font-medium float-left mr-2 block "
            >
              I
            </span>{" "}
            ’m Virat a developer who focuses on building clean, fast, and useful
            web applications. I don’t chase hype, I build things that actually
            work and solve real problems.
            <br />
            <br />
            I work across the full stack, turning ideas into real products using
            modern tools and practical approaches. Most of my learning comes
            from building, breaking, and improving projects again and again.
            <br />
            <br />
            This portfolio is a collection of that journey — projects,
            experiments, and real work that reflect how I think and how I build.
            Still learning, still improving, every day.
          </h2>

          <h1 className="font-dancing text-4xl sm:text-5xl font-normal opacity-75">
            ViratPod
          </h1>

          <div className="pt-14 flex flex-col gap-3 border-t border-stone-200 dark:border-stone-800">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 dark:text-stone-500">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2 rounded-full mr-0.5 bg-green-400 animate-pulse" />
              <p className="font-grotesk text-stone-900 dark:text-white font-medium">
                My last 3 client are earning 3/4 from website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
