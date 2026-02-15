import React, { useState, useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";
import {
  LightMode,
  DarkMode,
  SettingsBrightness,
  Language,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import LanguageModal from "./LanguageModal";

const SettingsControls = () => {
  const { theme, setTheme } = useTheme();
  const { language, availableLanguages } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const activeLang =
    availableLanguages.find((l) => l.code === language) ||
    availableLanguages[0];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if (!isDesktop) return null; // Removed to allow Language Switcher on mobile

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
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="settings-controls-container"
        style={{
          position: "fixed",
          top: isDesktop ? "clamp(12px, 2.5vw, 20px)" : "auto",
          bottom: isDesktop ? "auto" : "24px",
          right: isDesktop ? "clamp(12px, 2.5vw, 20px)" : "24px",
          zIndex: 2000,
          display: "flex",
          gap: "8px",
        }}
      >
        {/* Language Switcher - Visible on ALL devices */}
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "4px",
              borderRadius: "50px", // Keep pill/circle shape
              background: "var(--liquid-bg)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1.5px solid var(--liquid-border)",
              boxShadow: "var(--liquid-shadow)",
            }}
          >
            <button
              onClick={() => setIsLangModalOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-main)",
                padding: isDesktop ? "0 12px" : "0",
                borderRadius: isDesktop ? "20px" : "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                height: isDesktop ? "32px" : "44px",
                width: isDesktop ? "auto" : "44px",
                fontWeight: 700,
                fontSize: "0.85rem",
                gap: "6px",
              }}
              title="Change Language"
            >
              <Language fontSize="small" style={{ opacity: 0.8 }} />
              {isDesktop && <span>{activeLang.nativeLabel}</span>}
            </button>
          </div>
        </div>

        {/* Theme Switcher - Desktop ONLY (Navbar handles mobile) */}
        {isDesktop && (
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
            }}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                style={{
                  background:
                    theme === t.id ? "var(--bg-darker)" : "transparent",
                  border:
                    theme === t.id
                      ? "1.5px solid var(--liquid-border)"
                      : "none",
                  color:
                    theme === t.id ? "var(--primary)" : "var(--text-muted)",
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
        )}
      </motion.div>

      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </>
  );
};

export default SettingsControls;
