import React from "react";
import { AnimatePresence } from "framer-motion";
import { LightMode, DarkMode, SettingsBrightness } from "@mui/icons-material";
import {
  MobileDrawerContainer,
  DrawerOverlay,
  NavLink,
  ThemeButton,
} from "./Navbar.styles";
import { NAV_LINKS } from "./navbar.config";
import { useLanguage } from "../../context/useLanguage";
import { useTheme } from "../../context/useTheme";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const themes: { id: "light" | "dark" | "system"; icon: React.ReactNode }[] = [
    { id: "light", icon: <LightMode sx={{ fontSize: 18 }} /> },
    { id: "system", icon: <SettingsBrightness sx={{ fontSize: 18 }} /> },
    { id: "dark", icon: <DarkMode sx={{ fontSize: 18 }} /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <DrawerOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <MobileDrawerContainer
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--primary)",
                  paddingLeft: "24px",
                  marginBottom: "8px",
                }}
              >
                Navigation
              </span>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  href={`#${link.id}`}
                  active={activeSection === link.id}
                  isMobile
                  onClick={onClose}
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-color)",
                paddingTop: "32px",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--primary)",
                  paddingLeft: "24px",
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                Appearance
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  padding: "12px 24px",
                }}
              >
                {themes.map((t) => (
                  <ThemeButton
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    active={theme === t.id}
                  >
                    {t.icon}
                  </ThemeButton>
                ))}
              </div>
            </div>
          </MobileDrawerContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
