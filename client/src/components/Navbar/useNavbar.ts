import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { MOBILE_BREAKPOINT, NAV_LINKS } from "./navbar.config";

export const useNavbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const sections = NAV_LINKS.map((link) => link.id);
    const scrollPosition = latest + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          return;
        }
      }
    }
    if (latest < 300) setActiveSection("");
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    activeSection,
    isMobile,
    isMenuOpen,
    toggleMenu,
    closeMenu,
    scrollY,
  };
};
