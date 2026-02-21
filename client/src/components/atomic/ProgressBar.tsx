import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "12px",
  padding: "4px",
  width: "100%",
  marginTop: "12px",
});

const Track = styled("div")({
  height: "10px",
  width: "100%",
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  position: "relative",
  overflow: "hidden",
});

const Bar = styled("div")<{ progress: number; color: string }>(
  ({ progress, color }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: `${progress}%`,
    background: color,
    borderRadius: "8px",
    transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: `0 0 15px ${color}44`,
  }),
);

interface ProgressBarProps {
  progress: number;
  color: string;
  label?: string;
  valueSuffix?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color,
  label,
  valueSuffix = "%",
}) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      {label && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              color: "var(--text-main)",
              fontSize: "1rem",
            }}
          >
            {label}
          </span>
          <span style={{ color, fontWeight: 800 }}>
            {progress}
            {valueSuffix}
          </span>
        </div>
      )}
      <Container>
        <Track>
          <Bar progress={progress} color={color} />
        </Track>
      </Container>
    </div>
  );
};

export default ProgressBar;
