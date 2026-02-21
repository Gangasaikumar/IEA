import React from "react";
import { RocketLaunch, Menu, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";
import { useNavbar } from "./useNavbar";
import { NAV_LINKS } from "./navbar.config";
import MobileDrawer from "./MobileDrawer";
import { NavContainer, GlassBar, LogoSection, NavLink } from "./Navbar.styles";

const Navbar: React.FC = () => {
  const { activeSection, isMobile, isMenuOpen, toggleMenu, closeMenu } =
    useNavbar();
  const { t } = useLanguage();

  return (
    <>
      <NavContainer>
        <GlassBar
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <LogoSection isMobile={isMobile}>
            <RocketLaunch sx={{ color: "var(--primary)", fontSize: 20 }} />
            <span className="gradient-text" style={{ fontSize: "1rem" }}>
              IIA
            </span>
          </LogoSection>

          {!isMobile ? (
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  href={`#${link.id}`}
                  active={activeSection === link.id}
                >
                  {t(link.labelKey)}
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
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.45,
                      }}
                    />
                  )}
                </NavLink>
              ))}
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              style={{
                background: "var(--primary)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(var(--primary-rgb), 0.3)",
              }}
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          )}
        </GlassBar>
      </NavContainer>

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
