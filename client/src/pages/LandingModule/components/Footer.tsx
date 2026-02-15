import { styled } from "@mui/material/styles";
import { useLanguage } from "../../../context/LanguageContext";

const FooterContainer = styled("footer")({
  textAlign: "center",
  padding: "60px 40px",
  borderTop: "1px solid var(--border-color)",
  color: "var(--text-muted)",
});

const Footer = () => {
  const { t } = useLanguage();
  return (
    <FooterContainer>
      <div style={{ marginBottom: "24px", fontWeight: 700 }}>
        <span className="gradient-text">{t("footer.agency")}</span>
      </div>
      <p>{t("footer.rights")}</p>
    </FooterContainer>
  );
};

export default Footer;
