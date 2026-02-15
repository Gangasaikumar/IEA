import { useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
} from "framer-motion";
import { styled } from "@mui/material/styles";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { features } from "../data/landingData";
import { useLanguage } from "../../../context/useLanguage";

// Styled Components
const MarqueeCard = styled(motion.div)(({ theme }) => ({
  width: "320px",
  padding: "40px",
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  borderRadius: "24px",
  border: "1px solid var(--border-color)",
  background: "var(--acrylic-bg)",
  backdropFilter: "blur(20px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "280px",
    padding: "24px",
  },
}));

const ControlButton = styled(motion.button)(() => ({
  padding: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "1px solid var(--border-color)",
  borderRadius: "12px",
  background: "var(--acrylic-bg)",
  color: "var(--text-main)",
  backdropFilter: "blur(10px)",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "var(--primary)",
    color: "white",
    borderColor: "var(--primary)",
  },
}));

const CapabilitiesMarquee = () => {
  const { t } = useLanguage();
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const cardWidth = 320;
  const gap = 24;
  const oneSetWidth = features.length * (cardWidth + gap);
  const baseX = useMotionValue(-oneSetWidth * 2); // Start centered in the middle of 5 sets

  // Computed virtual index for dots
  const [virtualIndex, setVirtualIndex] = useState(0);

  // ... (keep animation logic same)

  useAnimationFrame((_, delta) => {
    if (isCarouselPaused) return;

    const moveBy = 0.05 * delta; // Adjust speed
    let nextX = baseX.get() - moveBy;

    // Centering reset (Bidirectional)
    if (nextX <= -oneSetWidth * 3) {
      nextX += oneSetWidth;
    } else if (nextX >= -oneSetWidth) {
      nextX -= oneSetWidth;
    }

    baseX.set(nextX);

    // Update dots (derived from modulo position)
    const active =
      Math.abs(Math.round(baseX.get() / (cardWidth + gap))) % features.length;
    if (active !== virtualIndex) setVirtualIndex(active);
  });

  const handleNext = () => {
    let nextX = baseX.get() - (cardWidth + gap);
    if (nextX <= -oneSetWidth * 3) nextX += oneSetWidth;
    baseX.set(nextX);
    setIsCarouselPaused(true);
  };

  const handlePrev = () => {
    let nextX = baseX.get() + (cardWidth + gap);
    if (nextX >= -oneSetWidth) nextX -= oneSetWidth;
    baseX.set(nextX);
    setIsCarouselPaused(true);
  };

  return (
    <section className="section-container" style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "8px",
              letterSpacing: "-1.5px",
              color: "var(--text-main)",
            }}
          >
            {t("capabilities.title")}
          </h2>
          <p style={{ color: "var(--text-muted)", fontWeight: 500 }}>
            {t("capabilities.subtitle")}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <ControlButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
          >
            <ChevronLeft sx={{ fontSize: 20 }} />
          </ControlButton>
          <ControlButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCarouselPaused(!isCarouselPaused)}
          >
            {isCarouselPaused ? (
              <PlayArrow sx={{ fontSize: 20 }} />
            ) : (
              <Pause sx={{ fontSize: 20 }} />
            )}
          </ControlButton>
          <ControlButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
          >
            <ChevronRight sx={{ fontSize: 20 }} />
          </ControlButton>
        </div>
      </div>

      <div
        style={{ overflow: "hidden", padding: "20px 0" }}
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            x: baseX,
          }}
        >
          {[
            ...features,
            ...features,
            ...features,
            ...features,
            ...features,
          ].map((feature, i) => {
            const originalIndex = i % features.length;
            return (
              <MarqueeCard key={i} whileHover={{ y: -10, scale: 1.02 }}>
                <div style={{ color: "var(--accent)", marginBottom: "16px" }}>
                  {feature.icon}
                </div>
                <h4
                  style={{
                    marginBottom: "12px",
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  {t(`capabilities.features.${originalIndex}.title`)}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {t(`capabilities.features.${originalIndex}.desc`)}
                </p>

                {/* Visual Accent */}
                <AnimatePresence>
                  {virtualIndex === originalIndex && (
                    <motion.div
                      layoutId="carousel-glow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 50% 120%, rgba(var(--primary-rgb), 0.1), transparent 70%)",
                        zIndex: -1,
                      }}
                    />
                  )}
                </AnimatePresence>
              </MarqueeCard>
            );
          })}
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        {features.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              baseX.set(-(features.length * 2 + i) * (cardWidth + gap));
              setIsCarouselPaused(true);
            }}
            style={{
              width: virtualIndex === i ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                virtualIndex === i ? "var(--primary)" : "var(--border-color)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesMarquee;
