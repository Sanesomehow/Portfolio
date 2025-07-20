import { useEffect, useState } from "react";

export const LampGraphics = ({showContent, setShowContent}: {
    showContent: boolean,
    setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const [lightPhase, setLightPhase] = useState("off");

    useEffect(() => {
        const sequence = async () => {
      // Phase 1: Turn lights on
      setTimeout(() => setLightPhase("on"), 300);

      // Phase 2: Turn lights off
      setTimeout(() => setLightPhase("off"), 700);

      // Phase 3: Turn lights on again (final state)
      setTimeout(() => setLightPhase("final"), 1100);

      // Phase 4: Show content
      setTimeout(() => setShowContent(true), 1500);
    };

    sequence();
    }, [])

    const getLightOpacity = () => {
    switch (lightPhase) {
      case "off":
        return "opacity-0";
      case "on":
        return "opacity-100";
      case "final":
        return "opacity-80";
      default:
        return "opacity-0";
    }
  };

  const getTrapezoidOpacity = () => {
    switch (lightPhase) {
      case "off":
        return "opacity-0";
      case "on":
        return "opacity-60";
      case "final":
        return "opacity-40";
      default:
        return "opacity-0";
    }
  };

  const getEllipseOpacity = () => {
    switch (lightPhase) {
      case "off":
        return "opacity-0";
      case "on":
        return "opacity-60";
      case "final":
        return "opacity-40";
      default:
        return "opacity-0";
    }
  };

  return (
    <div>
        {/* Lamp Image - only show after loading */}
        <img
          src="svgviewer-output.svg"
          alt="lamp"
          className={`absolute -top-70 right-32 w-120 transition-opacity duration-1000 
            ${screen === 'desktop' ? :}`}
        />
        <img
          src="svgviewer-output.svg"
          alt="lamp"
          className={`absolute z-1 -top-70 right-32 w-120 opacity-20 transition-opacity duration-1000 `}
        />

        {/* Light bulb glow - blinks according to sequence */}
        <div
          className={`absolute transition-opacity duration-500 ${getLightOpacity()}`}
          style={{
            width: "235px",
            height: "29px",
            top: "19%",
            right: "8.5%",
            transform: "translateX(-50%)",
            borderRadius: "50% / 50%",
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 0, 0.9) 0%, rgba(255, 200, 0, 0.5) 60%, transparent 100%)",
            boxShadow: "0 40px 60px 20px rgba(255, 255, 0, 0.4)",
            filter: "blur(1px)",
          }}
        />

        {/* Yellow light gradient (trapezoid) - blinks according to sequence */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div
            className={`absolute w-250 h-96 transition-opacity duration-500 ${getTrapezoidOpacity()}`}
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 150, 0.4) 0%, rgba(255, 255, 150, 0.1) 80%, transparent 100%)",
              clipPath: "polygon(40% 0%, 62% 0%, 80% 100%, 0% 210%)",
              top: "20.2%",
              left: "42.7%",
              filter: "blur(2px)",
            }}
          />
        </div>

        {/* Bottom ellipse light - blinks according to sequence */}
        <div
          className={`absolute pointer-events-none transition-opacity duration-500 ${getEllipseOpacity()}`}
          style={{
            bottom: "25%",
            right: "11%",
            width: "400px",
            height: "80px",
            background:
              "radial-gradient(ellipse at center, rgba(255, 220, 100, 0.4) 0%, rgba(255, 200, 50, 0.2) 50%, rgba(0, 0, 0, 0.1) 70%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(4px)",
            transform: "scaleX(1.5)",
          }}
        />

    </div>
  )
}