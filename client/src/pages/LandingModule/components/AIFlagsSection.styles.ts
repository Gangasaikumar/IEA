import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const SectionWrapper = styled("section")({
  padding: "120px 0",
  background: "var(--bg-darker)",
  position: "relative",
  overflow: "hidden",
});

export const ContentGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
    gap: "60px",
  },
}));

export const FeatureList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const FeatureItem = styled("div")({
  display: "flex",
  gap: "20px",
  "& .icon-box": {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "var(--glass-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  "& h4": {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "4px",
    color: "var(--text-main)",
  },
  "& p": {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
    lineHeight: 1.5,
  },
});

export const SnapshotCard = styled(motion.div)({
  background: "var(--glass-bg)",
  backdropFilter: "blur(20px)",
  border: "1px solid var(--border-color)",
  borderRadius: "24px",
  padding: "40px",
  boxShadow: "var(--glass-shadow)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, var(--border-color), transparent)",
  },
});

export const CheckpointBox = styled(motion.div)({
  background: "rgba(255, 189, 46, 0.05)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 189, 46, 0.2)",
  borderRadius: "16px",
  padding: "24px",
  marginTop: "40px",
  textAlign: "center",
  boxShadow:
    "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 189, 46, 0.05)",
});

export const ActionButton = styled(motion.button)<{
  variant: "primary" | "secondary";
}>(({ variant }) => ({
  flex: 1,
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  fontWeight: 700,
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ...(variant === "primary"
    ? {
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "white",
        boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
      }
    : {
        background: "var(--bg-dark)",
        color: "var(--text-main)",
        border: "1px solid var(--border-color)",
      }),
}));
