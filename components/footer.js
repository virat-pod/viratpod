"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-white border-t border-stone-200 py-4 sm:py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
        {/* Left - Name */}
        <div className="flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative group w-fit">
              <h1 className="text-lg font-grotesk font-bold">ViratPod</h1>
            </div>
            <span className="text-xs text-stone-400">&copy; 2026</span>
          </div>
          <span className="text-stone-300 sm:hidden">|</span>
          {/* Center - Links */}
          <div className="flex sm:hidden items-center gap-4 text-sm text-stone-500">
            {" "}
            <a href="#about" className="hover:text-stone-800 transition-colors">
              About
            </a>
            <a
              href={`${pathname === "/" ? "#contact" : "/#contact"}`}
              className="hover:text-stone-800 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-sm text-stone-500">
          {" "}
          <a href="/about" className="hover:text-stone-800 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-stone-800 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/virat-pod"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-stone-200 bg-white hover:border-stone-300 text-stone-500 hover:text-stone-800 transition-all"
          >
            <Image
              src={"/svg-icons/github.svg"}
              width={14}
              height={14}
              alt="github"
            />
          </a>
          <a
            href="https://www.instagram.com/vira.tpod/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-stone-200 bg-white hover:border-stone-300 text-stone-500 hover:text-stone-800 transition-all"
          >
            <Image
              src={"/svg-icons/instagram.svg"}
              width={14}
              height={14}
              alt="instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61584187945264"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-stone-200 bg-white hover:border-stone-300 text-stone-500 hover:text-stone-800 transition-all"
          >
            <Image
              src={"/svg-icons/facebook.svg"}
              width={14}
              height={14}
              alt="facebook"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
