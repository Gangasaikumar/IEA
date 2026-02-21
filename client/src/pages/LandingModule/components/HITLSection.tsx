import SecurityIcon from "@mui/icons-material/Security";
import ComputerIcon from "@mui/icons-material/Computer";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/useLanguage";
import SectionHeading from "../../../components/SectionHeading";
import {
  SectionWrapper,
  InfinitySymbol,
  WorkflowGrid,
  WorkflowItem,
  StepNumber,
  LaneContainer,
  LaneCard,
} from "./HITLSection.styles";

const HITLSection = () => {
  const { t } = useLanguage();

  const workflowSteps = [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    { id: "04" },
  ];

  return (
    <SectionWrapper id="hitl-workflow">
      <div className="container">
        <SectionHeading
          badge={{
            icon: <SecurityIcon sx={{ fontSize: 14, color: "#ffbd2e" }} />,
            text: t("hitlSection.badge"),
          }}
          title={
            <>
              {t("hitlSection.titlePrefix")}
              <InfinitySymbol>∞</InfinitySymbol>
              {t("hitlSection.titleSubtitle")}{" "}
              <span
                className="gradient-text"
                style={{
                  display: "inline-block",
                  padding: "10px 0",
                  verticalAlign: "middle",
                }}
              >
                {t("hitlSection.workflow")}
              </span>
            </>
          }
          description={t("hitlSection.description")}
        />

        <WorkflowGrid>
          {workflowSteps.map((step, index) => (
            <WorkflowItem
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <StepNumber>{step.id}</StepNumber>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "20px",
                    color: "var(--text-main)",
                    lineHeight: 1.4,
                    padding: "4px 0",
                  }}
                >
                  {t(`hitlSection.steps.${index}.title`)}
                </h3>
                <LaneContainer>
                  <LaneCard type="ai">
                    <h4>
                      <ComputerIcon sx={{ fontSize: 14 }} />{" "}
                      {t("hitlSection.aiLane")}
                    </h4>
                    <p>{t(`hitlSection.steps.${index}.ai`)}</p>
                  </LaneCard>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    style={{
                      color: "var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                  </motion.div>

                  <LaneCard type="human" whileHover={{ scale: 1.02 }}>
                    <h4>
                      <PersonSearchIcon sx={{ fontSize: 14 }} />{" "}
                      {t("hitlSection.humanCheckpoint")}
                    </h4>
                    <p>{t(`hitlSection.steps.${index}.human`)}</p>
                  </LaneCard>
                </LaneContainer>
              </div>
            </WorkflowItem>
          ))}
        </WorkflowGrid>
      </div>
    </SectionWrapper>
  );
};

export default HITLSection;
