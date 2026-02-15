import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";
import { TipsAndUpdates } from "@mui/icons-material";
import { containerVariants, itemVariants } from "../animations";
import { immigrantVisas, nonImmigrantVisas } from "../data/landingData";
import { useLanguage } from "../../../context/LanguageContext";

// Styled Components
const VisaTabsContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginBottom: "60px",
  background: "var(--acrylic-bg)",
  backdropFilter: "blur(30px)",
  padding: "8px",
  borderRadius: "24px",
  width: "fit-content",
  margin: "0 auto 60px auto",
  border: "1.5px solid var(--acrylic-edge)",
  boxShadow: "var(--acrylic-shadow)",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: "6px !important",
    gap: "6px !important",
    width: "95% !important",
  },
}));

const VisaTabButton = styled("button")<{ $active: boolean }>(
  ({ theme, $active }) => ({
    padding: "16px 36px",
    borderRadius: "18px",
    background: $active
      ? "linear-gradient(135deg, var(--primary), var(--accent))"
      : "rgba(var(--primary-rgb), 0.05)",
    color: $active ? "white" : "var(--text-muted)",
    border: $active ? "none" : "1.5px solid var(--border-color)",
    fontWeight: 800,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: $active ? "0 10px 20px rgba(var(--primary-rgb), 0.3)" : "none",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      padding: "10px 12px !important",
      fontSize: "0.85rem !important",
      whiteSpace: "normal !important",
      lineHeight: "1.2 !important",
      minHeight: "54px !important",
      display: "flex !important",
      flexDirection: "column !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      textAlign: "center !important",
      flex: "1 !important",
    },
  }),
);

const TabSubtitle = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "block !important",
    fontSize: "0.8em !important",
    opacity: "0.9 !important",
    marginTop: "2px !important",
  },
}));

const VisaExplorer = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"immigrant" | "non-immigrant">(
    "immigrant",
  );

  return (
    <section
      id="solutions"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-dark)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 8vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-1.5px",
              color: "var(--text-main)",
              lineHeight: 1.1,
            }}
          >
            {t("visa.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1rem, 4vw, 1.1rem)",
              color: "var(--text-muted)",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: 500,
            }}
          >
            {t("visa.subtitle")}
          </motion.p>
        </div>

        <VisaTabsContainer variants={itemVariants}>
          <VisaTabButton
            onClick={() => setActiveTab("immigrant")}
            $active={activeTab === "immigrant"}
          >
            {t("visa.tab1")}{" "}
            <TabSubtitle className="tab-subtitle">
              {t("visa.tab1sub")}
            </TabSubtitle>
          </VisaTabButton>
          <VisaTabButton
            onClick={() => setActiveTab("non-immigrant")}
            $active={activeTab === "non-immigrant"}
          >
            {t("visa.tab2")}{" "}
            <TabSubtitle className="tab-subtitle">
              {t("visa.tab2sub")}
            </TabSubtitle>
          </VisaTabButton>
        </VisaTabsContainer>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {(activeTab === "immigrant"
              ? immigrantVisas
              : nonImmigrantVisas
            ).map((visa, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "28px",
                  background: "var(--acrylic-bg)",
                  backdropFilter: "blur(24px)",
                  border: "1.5px solid var(--border-color)",
                  boxShadow: "var(--acrylic-shadow)",
                  borderRadius: "24px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      padding: "14px",
                      background:
                        "linear-gradient(135deg, var(--primary), var(--accent))",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 16px rgba(var(--primary-rgb), 0.2)",
                    }}
                  >
                    {visa.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        marginBottom: "2px",
                        color: "var(--text-main)",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {visa.type}
                    </h3>
                    {"category" in visa && (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--primary)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {visa.category}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {t("visa.audience")}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-main)",
                        lineHeight: 1.4,
                      }}
                    >
                      {visa.target}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {t("visa.req")}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-main)",
                        lineHeight: 1.4,
                      }}
                    >
                      {visa.req}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "4px",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-color)",
                    }}
                  >
                    {"self" in visa && (
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                        }}
                      >
                        <TipsAndUpdates
                          sx={{ fontSize: 16, color: "var(--primary)" }}
                        />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-main)",
                          }}
                        >
                          {t("visa.self")}: <strong>{visa.self}</strong>
                        </span>
                      </div>
                    )}
                    {"duration" in visa && (
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-main)",
                          }}
                        >
                          {t("visa.duration")}: <strong>{visa.duration}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default VisaExplorer;
