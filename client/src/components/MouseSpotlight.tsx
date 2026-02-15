import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseSpotlight = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springConfig = { stiffness: 100, damping: 40, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50, // Below interactions, above backgrounds
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.04) 0%, transparent 70%)",
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default MouseSpotlight;
