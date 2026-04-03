"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "./wrapper/scrollWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { Scroll, scrollDir } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`bg-white flex z-50 justify-between items-center h-16.5 md:h-20 fixed left-1/2 -translate-x-1/2 w-[91vw] rounded-full px-3 pl-5 md:pl-8 transition-all duration-500 ${Scroll ? "shadow-xl" : "shadow-2xs"} ${scrollDir === "down" ? "-top-32 opacity-0" : "top-4 opacity-100"}`}
      >
        <div className="left-content">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-grotesk font-bold flex items-center">
              ViratPod
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-6 md:text-lg font-medium">
          <Link
            href="/about"
            className="hover:text-gray-600 hidden sm:block transition-colors"
          >
            About
          </Link>
          <Link
            href={`${pathname === "/" ? "#contact" : "/#contact"}`}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full cursor-pointer"
          >
            Contact
          </Link>

          <button
            className="sm:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {" "}
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-white dark:bg-stone-950 z-[100] flex flex-col pt-24 px-8 gap-6 text-[1.1rem] font-medium lg:hidden shadow-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-7 right-7 text-2xl text-stone-800 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href={`${pathname === "/" ? "#contact" : "/#contact"}`}
          onClick={() => setMenuOpen(false)}
          className="text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
