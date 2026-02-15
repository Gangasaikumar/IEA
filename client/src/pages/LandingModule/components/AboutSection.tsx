import { motion } from "framer-motion";
import { Assignment, AutoGraph } from "@mui/icons-material";
import { containerVariants, itemVariants } from "../animations";
import { useLanguage } from "../../../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-container"
      style={{ padding: "40px 24px" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card"
        style={{ padding: "40px", textAlign: "center" }}
      >
        <motion.h2
          variants={itemVariants}
          style={{ marginBottom: "40px", fontSize: "2rem" }}
        >
          {t("aboutSection.title")}
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <motion.div
            variants={itemVariants}
            className="glass-card"
            style={{
              padding: "32px",
              border: "1px solid var(--border-color)",
            }}
          >
            <div style={{ color: "var(--primary)", marginBottom: "16px" }}>
              <Assignment />
            </div>
            <h3 style={{ color: "var(--accent)", marginBottom: "16px" }}>
              {t("aboutSection.card1.title")}
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              {t("aboutSection.card1.desc")}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass-card"
            style={{
              padding: "32px",
              border: "1px solid var(--border-color)",
            }}
          >
            <div style={{ color: "var(--primary)", marginBottom: "16px" }}>
              <AutoGraph />
            </div>
            <h3 style={{ color: "var(--accent)", marginBottom: "16px" }}>
              {t("aboutSection.card2.title")}
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              {t("aboutSection.card2.desc")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
