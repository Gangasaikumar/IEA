import { motion } from "framer-motion";
import { RocketLaunch } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useLanguage } from "../../../context/useLanguage";

const CallToAction = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/client");
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 40px",
          background: "var(--liquid-bg)",
          backdropFilter: "blur(40px)",
          border: "2px solid var(--liquid-border)",
          borderRadius: "48px",
          boxShadow: "var(--liquid-shadow)",
          maxWidth: "900px",
          margin: "0 auto",
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          textAlign: "center",
        }}
      >
        {/* Radiant Highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "inline-flex",
            padding: "20px",
            background: "rgba(var(--primary-rgb), 0.1)",
            borderRadius: "24px",
            color: "var(--primary)",
            marginBottom: "32px",
            boxShadow: "0 10px 30px rgba(var(--primary-rgb), 0.2)",
          }}
        >
          <RocketLaunch style={{ fontSize: "2.5rem" }} />
        </motion.div>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-1.5px",
            whiteSpace: "pre-line", // Allow newlines from translation
          }}
        >
          <span className="gradient-text">{t("ctaSection.title")}</span>
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "48px",
            color: "var(--text-muted)",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6,
          }}
        >
          {t("ctaSection.subtitle")}
        </p>

        <motion.button
          className="btn-primary"
          onClick={handleGetStarted}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(var(--primary-rgb), 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "20px 48px",
            fontSize: "1.2rem",
            borderRadius: "100px",
            fontWeight: 800,
          }}
        >
          {t("ctaSection.button")}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
