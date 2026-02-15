import React, { useState } from "react";
import { Language as LanguageIcon } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={toggleDropdown}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-muted)",
          padding: "6px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          width: "32px",
          height: "32px",
        }}
        aria-label="Switch Language"
      >
        <LanguageIcon sx={{ fontSize: 20 }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              marginTop: "8px",
              background: "var(--bg-darker)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "4px",
              boxShadow: "var(--liquid-shadow)",
              zIndex: 1001,
              minWidth: "120px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                style={{
                  background:
                    language === lang.code
                      ? "rgba(var(--primary-rgb), 0.1)"
                      : "transparent",
                  color:
                    language === lang.code
                      ? "var(--primary)"
                      : "var(--text-muted)",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background 0.2s",
                }}
              >
                <span>{lang.nativeLabel}</span>
                {language === lang.code && (
                  <motion.div
                    layoutId="active-lang-dot"
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "currentColor",
                    }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
