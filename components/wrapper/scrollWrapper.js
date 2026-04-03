"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

export const AppContext = createContext();
export function useApp() {
  return useContext(AppContext);
}

const ScrollWrapper = ({ children }) => {
  const [Scroll, setScroll] = useState();
  const [ScrollY, setScrollY] = useState(0);
  const [scrollDir, setscrollDir] = useState("up");

  const pathname = usePathname();
  const Home = pathname === "/home";

  useEffect(() => {
    window.scrollY > 80 && setScroll(true);
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) setscrollDir("up");
      if (currentScroll > lastScrollY) {
        setscrollDir("down");
      } else if (!Home) {
        setscrollDir("up");
      }
      lastScrollY = window.scrollY;
      setScroll(window.scrollY > 80);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [Home]);

  return (
    <AppContext.Provider value={{ Scroll, ScrollY, scrollDir }}>
      {children}
    </AppContext.Provider>
  );
};

export default ScrollWrapper;