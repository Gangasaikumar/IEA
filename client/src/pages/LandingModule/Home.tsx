import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../../components/Navbar";
import SettingsControls from "../../components/SettingsControls";
import MouseSpotlight from "../../components/MouseSpotlight";
import MeshCanvas from "./components/MeshCanvas";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisaExplorer from "./components/VisaExplorer";
import JourneyMap from "./components/JourneyMap";
import CapabilitiesMarquee from "./components/CapabilitiesMarquee";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="landing-page-root">
      <MeshCanvas />
      <MouseSpotlight />
      <Navbar />
      <SettingsControls />

      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--primary)",
          transformOrigin: "0%",
          zIndex: 1001,
        }}
      />

      <HeroSection />
      <AboutSection />
      <VisaExplorer />
      <JourneyMap />
      <CapabilitiesMarquee />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
