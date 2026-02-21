import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const SectionWrapper = styled("section")({
  padding: "120px 0",
  position: "relative",
  background: "var(--bg-darker)",
  overflow: "hidden",
});

export const InfinitySymbol = styled("span")({
  display: "inline-block",
  position: "relative",
  fontWeight: 900,
  fontSize: "1.5em",
  background: "linear-gradient(135deg, #ff3d77 0%, #818cf8 50%, #06b6d4 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "0 6px",
  filter: "drop-shadow(0 0 8px rgba(129, 140, 248, 0.4))",
  verticalAlign: "middle",
  "&::after": {
    content: '"∞"',
    position: "absolute",
    left: "6px",
    top: 0,
    zIndex: -1,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: 0.5,
  },
});

export const WorkflowGrid = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  maxWidth: "900px",
  margin: "0 auto",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "40px",
    top: "40px",
    bottom: "40px",
    width: "2px",
    background:
      "linear-gradient(to bottom, var(--primary) 0%, var(--accent) 50%, transparent 100%)",
    opacity: 0.3,
    [theme.breakpoints.down("md")]: {
      left: "24px",
    },
  },
}));

export const WorkflowItem = styled(motion.div)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    gap: "24px",
  },
}));

export const StepNumber = styled("div")(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "var(--bg-dark)",
  border: "2px solid var(--border-color)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "var(--primary)",
  flexShrink: 0,
  zIndex: 2,
  boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "48px",
    height: "48px",
    fontSize: "1.2rem",
  },
}));

export const LaneContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const LaneCard = styled(motion.div)<{ type: "ai" | "human" }>(
  ({ type }) => ({
    padding: "24px",
    borderRadius: "16px",
    transition: "all 0.3s ease",
    flex: 1,
    position: "relative",
    ...(type === "ai"
      ? {
          background: "var(--glass-bg)",
          border: "1px solid var(--border-color)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05)",
        }
      : {
          background: "rgba(16, 185, 129, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(16, 185, 129, 0.2)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(16, 185, 129, 0.1)",
        }),
    "& h4": {
      fontSize: "0.75rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      color: type === "ai" ? "var(--text-muted)" : "#10b981",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& p": {
      fontSize: "0.9rem",
      color: "var(--text-muted)",
      lineHeight: 1.6,
    },
    "&:hover": {
      ...(type === "human" && {
        borderColor: "rgba(16, 185, 129, 0.4)",
        background: "rgba(16, 185, 129, 0.08)",
        transform: "translateY(-2px)",
      }),
    },
  }),
);
