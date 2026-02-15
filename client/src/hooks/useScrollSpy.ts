import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const useScrollSpy = (
  itemCount: number,
  elementIdPrefix: string = "step-",
) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [manualScroll, setManualScroll] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (manualScroll) return; // Skip updates during click-driven scroll

    const viewportHeight = window.innerHeight;
    const centerPoint = viewportHeight * 0.4; // 40% from top as the "active line"

    let closestStep = activeStep;
    let minDistance = Infinity;

    for (let i = 0; i < itemCount; i++) {
      const element = document.getElementById(`${elementIdPrefix}${i}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - centerPoint);

        if (distance < minDistance) {
          minDistance = distance;
          closestStep = i;
        }
      }
    }

    if (closestStep !== activeStep) {
      setActiveStep(closestStep);
    }
  });

  const scrollToStep = (index: number) => {
    setManualScroll(true);
    setActiveStep(index);

    const el = document.getElementById(`${elementIdPrefix}${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      // Release lock after scroll animation (approximate duration)
      setTimeout(() => setManualScroll(false), 700);
    }
  };

  return { activeStep, scrollToStep };
};
