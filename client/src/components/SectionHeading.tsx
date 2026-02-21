import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

const SectionHeader = styled("div")({
  textAlign: "center",
  marginBottom: "80px",
});

const Badge = styled(motion.div)({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "6px 14px",
  borderRadius: "100px",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid var(--border-color)",
  color: "var(--text-muted)",
  fontSize: "0.8rem",
  fontWeight: 600,
  marginBottom: "24px",
  backdropFilter: "blur(4px)",
});

const Title = styled(motion.h2)({
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: 700,
  letterSpacing: "-1px",
  marginBottom: "24px",
  color: "var(--text-main)",
  lineHeight: 1.6,
  padding: "15px 0",
});

const Description = styled(motion.p)({
  maxWidth: "650px",
  margin: "0 auto",
  color: "var(--text-muted)",
  fontSize: "1.1rem",
  lineHeight: 1.6,
});

interface SectionHeadingProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: React.ReactNode;
  description?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
}) => {
  return (
    <SectionHeader>
      {badge && (
        <Badge
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badge.icon}
          {badge.text}
        </Badge>
      )}

      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </Title>

      {description && (
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </Description>
      )}
    </SectionHeader>
  );
};

export default SectionHeading;
