import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { LightMode, DarkMode, SettingsBrightness } from "@mui/icons-material";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return null;

  const themes: {
    id: "light" | "dark" | "system";
    icon: React.ReactNode;
    label: string;
  }[] = [
    { id: "light", icon: <LightMode fontSize="small" />, label: "Light" },
    {
      id: "system",
      icon: <SettingsBrightness fontSize="small" />,
      label: "System",
    },
    { id: "dark", icon: <DarkMode fontSize="small" />, label: "Dark" },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="theme-toggle-container"
      style={{
        position: "fixed",
        top: "clamp(12px, 2.5vw, 20px)",
        right: "clamp(12px, 2.5vw, 20px)",
        zIndex: 2000, // Above navbar
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "4px",
          borderRadius: "50px",
          gap: "4px",
          background: "var(--liquid-bg)",
          backdropFilter: "blur(20px) saturate(180%)",
          border: "1.5px solid var(--liquid-border)",
          boxShadow: "var(--liquid-shadow)",
          position: "relative",
        }}
      >
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            style={{
              background: theme === t.id ? "var(--bg-darker)" : "transparent",
              border:
                theme === t.id ? "1.5px solid var(--liquid-border)" : "none",
              color: theme === t.id ? "var(--primary)" : "var(--text-muted)",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              width: "32px",
              height: "32px",
              boxShadow:
                theme === t.id
                  ? "0 4px 12px rgba(var(--primary-rgb), 0.15)"
                  : "none",
            }}
            title={t.label}
          >
            {t.icon}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeToggle;
