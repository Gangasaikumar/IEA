import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Backdrop = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.4)", // Lighter backdrop
  backdropFilter: "blur(8px)",
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const ModalContainer = styled(motion.div)(({ theme }) => ({
  background: "var(--liquid-bg)",
  backdropFilter: "blur(24px) saturate(180%)",
  border: "1px solid var(--liquid-border)",
  borderRadius: "32px",
  padding: "40px",
  width: "100%",
  maxWidth: "800px",
  position: "relative",
  boxShadow: "var(--liquid-shadow)",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "20px", // Reduced padding for mobile
    borderRadius: "24px",
  },
}));

const LanguageGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", // Slightly smaller min-width
  gap: "24px",
  marginTop: "32px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px", // Reduced gap for mobile
    marginTop: "24px",
    gridTemplateColumns: "repeat(2, 1fr)", // Force 2 columns on mobile
  },
}));

// Dynamic Card Colors
const langThemes: Record<
  string,
  {
    light: { bg: string; text: string; shadow: string };
    dark: { bg: string; text: string; shadow: string };
    symbol: string;
  }
> = {
  en: {
    symbol: "En",
    light: {
      bg: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
      text: "#0369A1",
      shadow: "rgba(14, 165, 233, 0.2)",
    },
    dark: {
      bg: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
      text: "#FFFFFF",
      shadow: "rgba(2, 132, 199, 0.4)",
    },
  },
  te: {
    symbol: "అ",
    light: {
      bg: "linear-gradient(135deg, #DCFCE7 0%, #bbf7d0 100%)",
      text: "#15803D",
      shadow: "rgba(34, 197, 94, 0.2)",
    },
    dark: {
      bg: "linear-gradient(135deg, #16A34A 0%, #15803D 100%)",
      text: "#FFFFFF",
      shadow: "rgba(22, 163, 74, 0.4)",
    },
  },
  ta: {
    symbol: "அ",
    light: {
      bg: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
      text: "#B91C1C",
      shadow: "rgba(239, 68, 68, 0.2)",
    },
    dark: {
      bg: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
      text: "#FFFFFF",
      shadow: "rgba(220, 38, 38, 0.4)",
    },
  },
  ml: {
    symbol: "അ",
    light: {
      bg: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
      text: "#7E22CE",
      shadow: "rgba(168, 85, 247, 0.2)",
    },
    dark: {
      bg: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
      text: "#FFFFFF",
      shadow: "rgba(147, 51, 234, 0.4)",
    },
  },
  hi: {
    symbol: "अ",
    light: {
      bg: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)",
      text: "#C2410C",
      shadow: "rgba(249, 115, 22, 0.2)",
    },
    dark: {
      bg: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)",
      text: "#FFFFFF",
      shadow: "rgba(234, 88, 12, 0.4)",
    },
  },
};

const LanguageCard = styled(motion.button)<{
  $active: boolean;
  $bg: string;
  $text: string;
  $shadow: string;
}>(({ $active, $bg, $text, $shadow, theme }) => ({
  background: $bg,
  border: $active ? `3px solid ${$text}` : "1px solid transparent",
  borderRadius: "24px",
  padding: "24px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  color: $text,
  overflow: "hidden",
  height: "140px",
  boxShadow: `0 10px 20px -5px ${$shadow}`,
  width: "100%",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: `0 20px 25px -5px ${$shadow}`,
  },
  [theme.breakpoints.down("sm")]: {
    height: "120px", // Reduced height for mobile
    padding: "16px",
    borderRadius: "20px",
    gap: "8px",
  },
}));

const LanguageSymbol = styled("div")({
  fontSize: "4rem",
  fontWeight: 900,
  marginBottom: "4px",
  fontFamily: "serif",
  lineHeight: 1,
  opacity: 0.9,
});

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, availableLanguages, t } = useLanguage();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 350 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 2.2rem)", // Responsive font size
                    fontWeight: 800,
                    margin: 0,
                    marginBottom: "8px",
                    color: "var(--text-main)",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.2,
                  }}
                >
                  {t("languageModal.title")}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "clamp(0.9rem, 4vw, 1.05rem)",
                    margin: 0,
                  }}
                >
                  {t("languageModal.subtitle")}
                </motion.p>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "#EF4444",
                  color: "#FFFFFF",
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "rgba(239, 68, 68, 0.1)", // Red tint branding
                  border: "none",
                  color: "#EF4444", // Warning/Red color
                  cursor: "pointer",
                  padding: "10px",
                  display: "flex",
                  borderRadius: "50%",
                  transition: "background-color 0.2s, color 0.2s",
                }}
              >
                <Close />
              </motion.button>
            </div>

            {/* Grid */}
            <LanguageGrid>
              {availableLanguages.map((lang, index) => {
                const themeData = langThemes[lang.code] || langThemes["en"];
                const currentTheme = isDark ? themeData.dark : themeData.light;

                return (
                  <LanguageCard
                    key={lang.code}
                    $active={language === lang.code}
                    $bg={currentTheme.bg}
                    $text={currentTheme.text}
                    $shadow={currentTheme.shadow}
                    onClick={() => {
                      setLanguage(lang.code);
                      onClose();
                    }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <LanguageSymbol>{themeData.symbol}</LanguageSymbol>

                    <div style={{ textAlign: "center", zIndex: 2 }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          marginBottom: "2px",
                        }}
                      >
                        {lang.nativeLabel}
                      </span>

                      <span
                        style={{
                          display: "block",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          opacity: 0.7,
                          letterSpacing: "1px",
                        }}
                      >
                        {lang.label}
                      </span>
                    </div>

                    {language === lang.code && (
                      <motion.div
                        layoutId="active-lang-blob"
                        style={{
                          position: "absolute",
                          inset: 0,
                          border: `3px solid ${currentTheme.text}`,
                          borderRadius: "24px",
                          pointerEvents: "none",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </LanguageCard>
                );
              })}
            </LanguageGrid>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;
