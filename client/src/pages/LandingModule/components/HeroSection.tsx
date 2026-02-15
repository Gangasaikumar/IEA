import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { containerVariants, itemVariants } from "../animations";
import { useLanguage } from "../../../context/useLanguage";

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleGetStarted = () => {
    navigate("/client");
  };

  return (
    <section
      className="section-container"
      style={{
        textAlign: "center",
        paddingTop: "180px",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 900,
            marginBottom: "24px",
            lineHeight: 1.1,
            cursor: "default",
          }}
        >
          {t("hero.title")} <br />
          <span className="gradient-text">{t("hero.highlight")}</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.25rem",
            color: "var(--text-muted)",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={handleGetStarted}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "0 auto",
            }}
          >
            {t("hero.cta")} <ArrowForward />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
