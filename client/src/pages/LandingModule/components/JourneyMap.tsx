import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { itemVariants } from "../animations";
import { flows } from "../data/landingData";
import { useLanguage } from "../../../context/useLanguage";
import { useScrollSpy } from "../../../hooks/useScrollSpy";

// Styled Components
const SidebarContainer = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "140px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  paddingLeft: "24px",
  borderLeft: "2px solid var(--border-color)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StepCard = styled(motion.div)<{ $isActive: boolean }>(
  ({ theme, $isActive }) => ({
    padding: "40px",
    borderRadius: "24px",
    background: $isActive ? "var(--acrylic-bg)" : "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    border: $isActive
      ? "1.5px solid var(--primary)"
      : "1px solid var(--border-color)",
    marginBottom: "80px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: $isActive
      ? "0 20px 40px rgba(var(--primary-rgb), 0.15)"
      : "none",
    transform: $isActive ? "scale(1.02)" : "scale(1)",
    [theme.breakpoints.down("md")]: {
      padding: "24px",
      marginBottom: "40px",
    },
  }),
);

const JourneyMap = () => {
  const { t } = useLanguage();
  // Create translated flows preserving icons and ids
  const translatedFlows = flows.map((flow, index) => ({
    ...flow,
    title: t(`journey.steps.${index}.title`),
    navTitle: t(`journey.steps.${index}.navTitle`),
    description: t(`journey.steps.${index}.desc`),
  }));

  const { activeStep, scrollToStep } = useScrollSpy(translatedFlows.length);

  return (
    <section id="process" style={{ padding: "100px 0" }}>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-1.5px",
              color: "var(--text-main)",
            }}
          >
            {t("journey.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(1rem, 4vw, 1.15rem)",
              color: "var(--text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t("journey.subtitle")}
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "60px",
            position: "relative",
          }}
        >
          {/* Sticky Sidebar (Desktop) */}
          <SidebarContainer>
            {translatedFlows.map((step, idx) => (
              <motion.div
                key={step.id}
                animate={{
                  scale: activeStep === idx ? 1.05 : 1,
                  opacity: activeStep === idx ? 1 : 0.5,
                  x: activeStep === idx ? 10 : 0,
                }}
                onClick={() => scrollToStep(idx)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background:
                    activeStep === idx
                      ? "linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), transparent)"
                      : "transparent",
                  borderLeft:
                    activeStep === idx
                      ? "4px solid var(--primary)"
                      : "4px solid transparent",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background:
                      activeStep === idx
                        ? "var(--primary)"
                        : "var(--border-color)",
                    color: activeStep === idx ? "white" : "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {idx + 1}
                </div>
                <span
                  style={{
                    fontWeight: activeStep === idx ? 700 : 500,
                    color:
                      activeStep === idx
                        ? "var(--text-main)"
                        : "var(--text-muted)",
                    fontSize: "0.95rem",
                  }}
                >
                  {step.navTitle}
                </span>
              </motion.div>
            ))}
          </SidebarContainer>

          {/* Steps Content */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <style>
              {`
                @media (max-width: 900px) {
                   .container > div[style*="grid-template-columns"] {
                      grid-template-columns: 1fr !important;
                   }
                }
              `}
            </style>
            {translatedFlows.map((step, idx) => (
              <StepCard
                key={step.id}
                id={`step-${idx}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                $isActive={activeStep === idx}
              >
                {/* Mobile Badge */}
                <div
                  className="mobile-step-badge"
                  style={{
                    display: "none", // Hidden on desktop via CSS if needed, but simplistic check here
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "var(--primary)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  Step {idx + 1}
                </div>
                <style>
                  {`
                    @media (max-width: 900px) {
                      .mobile-step-badge { display: block !important; }
                    }
                  `}
                </style>

                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      background:
                        activeStep === idx
                          ? "linear-gradient(135deg, var(--primary), var(--accent))"
                          : "var(--card-bg)",
                      color: activeStep === idx ? "white" : "var(--text-muted)",
                      boxShadow:
                        activeStep === idx
                          ? "0 10px 20px rgba(var(--primary-rgb), 0.3)"
                          : "none",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        marginBottom: "8px",
                        color:
                          activeStep === idx
                            ? "var(--text-main)"
                            : "var(--text-muted)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "var(--text-muted)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (Visual only) */}
                {idx !== translatedFlows.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "58px", // Align with icon center
                      bottom: "-80px",
                      width: "2px",
                      height: "80px",
                      background:
                        "linear-gradient(to bottom, var(--border-color), transparent)",
                      zIndex: 0,
                    }}
                  />
                )}
              </StepCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;
