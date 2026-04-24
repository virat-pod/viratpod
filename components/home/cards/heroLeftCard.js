"use client";
import React from "react";
import { useApp } from "@/components/wrapper/scrollWrapper";
import useReveal from "@/lib/animations/reveal";

const HeroLeftCards = () => {
  const { ScrollY } = useApp();
  const card1 = useReveal(900);
  const card2 = useReveal(600);
  const card3 = useReveal(400);

  return (
    <div
      style={{ opacity: Math.max(0, 1 - ScrollY / 300) }}
      className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col pr-4"
    >

      <div
        ref={card1.ref}
        style={card1.opacity}
        className={`${card1.className} translate-x-14 -rotate-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-52`}
      >
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold">
            V
          </span>
          <div>
            <p className="font-grotesk font-semibold text-stone-800">
              ViratPod
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-600">Available</span>
            </div>{" "}
          </div>
        </div>
      </div>


      <div
        ref={card2.ref}
        style={card2.opacity}
        className={`${card2.className} -rotate-2 translate-x-6 mt-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-48`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
            💼
          </span>
          <span className="font-grotesk font-semibold text-stone-800">
            Experience
          </span>
        </div>
        <p className="text-2xl font-bold text-stone-800">
          1+ <span className="text-sm font-normal text-stone-400">years</span>
        </p>{" "}
        <p className="text-xs text-stone-500 mt-1">Full-Stack Development</p>
      </div>


<div
  ref={card3.ref}
  style={card3.opacity}
  className={`${card3.className} rotate-4 translate-x-12 mt-3 transition-all bg-white border border-stone-200 rounded-xl p-4 shadow-sm w-56`}
>
  <p className="text-xs text-stone-400 mb-2">Client Feedback</p>

  <p className="text-sm text-stone-600 italic">
    “We replaced our outdated marketing page with a cleaner, faster version. The new build improved load speed and made the signup flow much smoother.”
  </p>

  <div className="flex items-center gap-2 mt-3">
    <span className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-xs">
      A
    </span>
    <span className="text-xs text-stone-500">
      Aditi R. — Decoration Com.
    </span>
  </div>

  <div className="flex gap-0.5 mt-2 text-amber-400 text-xs">
    ★★★★⯪
  </div>
</div>
    </div>
  );
};

export default HeroLeftCards;
