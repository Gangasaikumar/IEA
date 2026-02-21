import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const NavContainer = styled("nav")({
  position: "fixed",
  top: "16px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  width: "fit-content",
  maxWidth: "96vw",
});

export const GlassBar = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px 12px 8px 18px",
  borderRadius: "100px",
  background: "var(--liquid-bg)",
  backdropFilter: "blur(30px) saturate(180%)",
  border: "1.5px solid var(--liquid-border)",
  boxShadow: "var(--liquid-shadow)",
  position: "relative",
});

export const NavLink = styled("a")<{ active: boolean; isMobile?: boolean }>(
  ({ active, isMobile }) => ({
    color: active ? "var(--primary)" : "var(--text-muted)",
    textDecoration: "none",
    padding: isMobile ? "12px 24px" : "8px 16px",
    borderRadius: "50px",
    position: "relative",
    fontSize: isMobile ? "1.1rem" : "0.85rem",
    fontWeight: 700,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 2,
    display: "block",
    width: isMobile ? "100%" : "auto",
    "&:hover": {
      color: "var(--primary)",
    },
  }),
);

export const LogoSection = styled("div")<{ isMobile: boolean }>(
  ({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 800,
    paddingRight: "12px",
    borderRight: isMobile ? "none" : "1.5px solid var(--border-color)",
  }),
);

export const MobileDrawerContainer = styled(motion.div)({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "300px",
  background: "var(--glass-bg)",
  backdropFilter: "blur(40px) saturate(180%)",
  borderLeft: "1.5px solid var(--liquid-border)",
  boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.2)",
  zIndex: 2000,
  padding: "80px 24px 40px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const DrawerOverlay = styled(motion.div)({
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(4px)",
  zIndex: 1999,
});

export const ThemeButton = styled("button")<{ active: boolean }>(
  ({ active }) => ({
    flex: 1,
    background: active ? "var(--primary)" : "var(--bg-dark)",
    border: active ? "none" : "1px solid var(--border-color)",
    color: active ? "white" : "var(--text-muted)",
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
  }),
);
