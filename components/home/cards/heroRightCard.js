"use client";
import React from "react";
import { useApp } from "@/components/wrapper/scrollWrapper";
import useReveal from "@/lib/animations/reveal";

const HeroRightCards = () => {
  const { ScrollY } = useApp();
  const card1 = useReveal(1550);
  const card2 = useReveal(1300);
  const card3 = useReveal(1100);

  return (
    <div
      style={{ opacity: Math.max(0, 1 - ScrollY / 300) }}
      className="hidden xl:flex absolute right-0 flex-col top-8 pr-4"
    >

      <div
        ref={card1.ref}
        style={card1.opacity}
        className={`${card1.className} -translate-x-14 rotate-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-56`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
            ⚡
          </span>
          <span className="font-grotesk font-semibold text-stone-800">
            Latest Project
          </span>
        </div>
        <p className="text-sm text-stone-500">
          Ai's powered dashboard with some mututal ai's featured
        </p>
        <div className="flex items-center gap-2 mt-3 text-xs text-stone-400">
          {" "}
          <span className="px-2 py-1 bg-stone-100 rounded">Next.js</span>
          <span className="px-2 py-1 bg-stone-100 rounded">Express.js</span>
        </div>
      </div>

      <div
        ref={card2.ref}
        style={card2.opacity}
        className={`${card2.className} rotate-2 -translate-x-2 mt-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-52`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
            ✓
          </span>
          <span className="font-grotesk font-semibold text-stone-800">
            This Year
          </span>
        </div>{" "}
        <div className="flex justify-between text-sm">
          <div className="text-center">
            <p className="font-bold text-stone-800">12+</p>
            <p className="text-stone-400 text-xs">Projects</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-stone-800">8</p>
            <p className="text-stone-400 text-xs">Clients</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-stone-800">3</p>
            <p className="text-stone-400 text-xs">Awards</p>
          </div>
        </div>
      </div>{" "}

      <div
        ref={card3.ref}
        style={card3.opacity}
        className={`${card3.className} -rotate-4 -translate-x-10 mt-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-48`}
      >
        <p className="text-xs text-stone-400 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-2 bg-stone-800 text-white text-xs rounded">
            Next.js
          </span>
          <span className="px-3 py-2 bg-blue-500 text-white text-xs rounded">
            React
          </span>
          <span className="px-3 py-2 bg-green-500 text-white text-xs rounded">
            ExpressJS
          </span>
          <span className="px-3 py-2 bg-cyan-500 text-white text-xs rounded">
            Tailwind
          </span>
        </div>
      </div>{" "}
    </div>
  );
};

export default HeroRightCards;
