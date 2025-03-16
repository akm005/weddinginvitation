import  { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const scalar = 10;
    const marrygold = confetti.shapeFromText({ text: "🏵️", scalar });
    const rleaf = confetti.shapeFromText({ text: "🍁", scalar });
    const rose = confetti.shapeFromText({ text: "🌹", scalar });
    let timeout;
    let animationFrameId;
    let isConfettiRunning = false;
    let confettiStartTime = 0;

    const startConfetti = () => {
      confettiStartTime = Date.now();
      animationFrameId = requestAnimationFrame(frame);
    };

    const stopConfetti = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const frame = () => {
      confetti({
        particleCount: 1,
        angle: 60,
        spread: 30,
        origin: { x: 0 },
        shapes: [marrygold,rleaf,rose],
      });

      confetti({
        particleCount: 1,
        angle: 120,
        spread: 30,
        origin: { x: 1 },
        shapes: [marrygold,rleaf,rose],
      });

      if (isConfettiRunning) {
        animationFrameId = requestAnimationFrame(frame);
      }
    };

    const cycleConfetti = () => {
      if (isConfettiRunning) {
        if (Date.now() - confettiStartTime >= 2000) {
          stopConfetti();
          isConfettiRunning = false;

          timeout = setTimeout(() => {
            isConfettiRunning = true;
            startConfetti();
          }, 3000);
        }
      } else {
        isConfettiRunning = true;
        startConfetti();
      }
    };

    cycleConfetti();

    const interval = setInterval(cycleConfetti, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      stopConfetti();
    };
  }, []);

  return null;
};

export default ConfettiEffect;
