import React, { useState, useEffect } from "react";
import {
  RocketLaunch,
  LightMode,
  DarkMode,
  SettingsBrightness,
} from "@mui/icons-material";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const sections = ["solutions", "process", "about"];
    const scrollPosition = latest + 200; // Offset for trigger

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

  const navLinks = [
    { id: "solutions", label: t("solutions") },
    { id: "process", label: t("process") },
    { id: "about", label: t("about") },
  ];

  const themes: { id: "light" | "dark" | "system"; icon: React.ReactNode }[] = [
    { id: "light", icon: <LightMode sx={{ fontSize: 16 }} /> },
    { id: "system", icon: <SettingsBrightness sx={{ fontSize: 16 }} /> },
    { id: "dark", icon: <DarkMode sx={{ fontSize: 16 }} /> },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "fit-content",
        maxWidth: "98vw",
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "4px" : "12px",
          padding: isMobile ? "4px 6px 4px 12px" : "6px 16px 6px 16px",
          borderRadius: "100px",
          background: "var(--liquid-bg)",
          backdropFilter: "blur(30px) saturate(180%)",
          border: "1.5px solid var(--liquid-border)",
          boxShadow: "var(--liquid-shadow)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 800,
            paddingRight: isMobile ? "8px" : "12px",
            borderRight: "1.5px solid var(--border-color)",
          }}
        >
          <RocketLaunch sx={{ color: "var(--primary)", fontSize: 20 }} />
          <span className="gradient-text" style={{ fontSize: "0.95rem" }}>
            IEA
          </span>
        </div>

        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                color:
                  activeSection === link.id
                    ? "var(--primary)"
                    : "var(--text-muted)",
                textDecoration: "none",
                padding: isMobile ? "8px 10px" : "8px 16px",
                borderRadius: "50px",
                position: "relative",
                fontSize: "0.85rem",
                fontWeight: 700,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 2,
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-liquid-pill"
                  style={{
                    position: "absolute",
                    inset: "2px",
                    background: "var(--bg-darker)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50px",
                    zIndex: -1,
                    boxShadow:
                      "0 2px 10px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
                    border: "1px solid var(--liquid-border)",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                />
              )}
            </a>
          ))}
        </div>

        <div style={{ marginLeft: "8px" }}>
          {/* <LanguageSwitcher /> Removed as it's moved to top right */}
        </div>

        {/* Mobile-Only Theme Switcher - Strictly React Conditioned */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              gap: "2px",
              padding: "2px",
              background: "rgba(var(--primary-rgb), 0.05)",
              borderRadius: "50px",
              marginLeft: "4px",
              borderLeft: "1.5px solid var(--border-color)",
              paddingLeft: "4px",
            }}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                style={{
                  background:
                    theme === t.id ? "var(--bg-darker)" : "transparent",
                  border: "none",
                  color:
                    theme === t.id ? "var(--primary)" : "var(--text-muted)",
                  padding: "6px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                  width: "24px",
                  height: "24px",
                  boxShadow: theme === t.id ? "var(--liquid-shadow)" : "none",
                }}
              >
                {t.icon}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
