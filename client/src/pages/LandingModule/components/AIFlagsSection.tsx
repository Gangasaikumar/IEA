import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BiotechIcon from "@mui/icons-material/Biotech";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLanguage } from "../../../context/useLanguage";
import ProgressBar from "../../../components/atomic/ProgressBar";
import {
  SectionWrapper,
  ContentGrid,
  FeatureList,
  FeatureItem,
  SnapshotCard,
  CheckpointBox,
  ActionButton,
} from "./AIFlagsSection.styles";

const AIFlagsSection = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="ai-screening">
      <div className="container">
        <ContentGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "100px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-color)",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "24px",
                backdropFilter: "blur(4px)",
              }}
            >
              <RocketLaunchIcon
                sx={{ fontSize: 16, color: "var(--primary)" }}
              />
              {t("aiFlagsSection.badge")}
            </div>

            <h2
              className="gradient-text"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-1.5px",
                lineHeight: 1.6,
                marginBottom: "24px",
                padding: "15px 0",
              }}
            >
              {t("aiFlagsSection.title")}
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                marginBottom: "40px",
                maxWidth: "540px",
                lineHeight: 1.6,
              }}
            >
              {t("aiFlagsSection.description")}
            </p>

            <FeatureList>
              <FeatureItem>
                <div className="icon-box">
                  <CloudUploadIcon sx={{ fontSize: 20 }} />
                </div>
                <div>
                  <h4>{t("aiFlagsSection.features.0.title")}</h4>
                  <p>{t("aiFlagsSection.features.0.desc")}</p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <div className="icon-box">
                  <BiotechIcon sx={{ fontSize: 20 }} />
                </div>
                <div>
                  <h4>{t("aiFlagsSection.features.1.title")}</h4>
                  <p>{t("aiFlagsSection.features.1.desc")}</p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <div className="icon-box">
                  <FactCheckIcon sx={{ fontSize: 20 }} />
                </div>
                <div>
                  <h4>{t("aiFlagsSection.features.2.title")}</h4>
                  <p>{t("aiFlagsSection.features.2.desc")}</p>
                </div>
              </FeatureItem>
            </FeatureList>

            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{
                marginTop: "48px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {t("aiFlagsSection.cta")}{" "}
              <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <SnapshotCard>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ff5f56",
                      opacity: 0.8,
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#ffbd2e",
                      opacity: 0.8,
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#27c93f",
                      opacity: 0.8,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.80rem",
                    color: "var(--text-muted)",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {t("aiFlagsSection.card.title")}
                </span>
              </div>

              <ProgressBar
                label={t("aiFlagsSection.card.eb1a")}
                progress={85}
                color="#10b981"
              />

              <ProgressBar
                label={t("aiFlagsSection.card.niw")}
                progress={92}
                color="var(--primary)"
              />

              <CheckpointBox>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    color: "#ffbd2e",
                    marginBottom: "24px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  <FactCheckIcon sx={{ fontSize: 18 }} />
                  {t("aiFlagsSection.card.status")}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <ActionButton
                    variant="primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t("aiFlagsSection.card.accept")}
                  </ActionButton>
                  <ActionButton
                    variant="secondary"
                    whileHover={{
                      scale: 1.03,
                      background: "rgba(255, 255, 255, 0.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t("aiFlagsSection.card.decline")}
                  </ActionButton>
                </div>
              </CheckpointBox>
            </SnapshotCard>
          </motion.div>
        </ContentGrid>
      </div>
    </SectionWrapper>
  );
};

export default AIFlagsSection;
