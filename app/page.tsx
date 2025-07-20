"use client";

import { Title } from "@/components/Title";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/Card";
import { AnimatePresence, motion } from "framer-motion";
import { LampGraphics } from "@/components/LampGraphics";
import { useScreenStore } from "@/app/store";

export default function Home() {
  const [lightPhase, setLightPhase] = useState("off");
  const [showContent, setShowContent] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("s1");
  const { screen, setScreen } = useScreenStore();
  const [isClient, setIsClient] = useState(false);

  const cards = [
    { id: 1, title: "Project One", content: "Description One" },
    { id: 2, title: "Project Two", content: "Description Two" },
    { id: 3, title: "Project Three", content: "Description Three" },
  ];
  const [projectIndex, setProjectIndex] = useState(0);

  const nextCard = () => {
    setProjectIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setProjectIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    const updateScreen = () => {
      if (window.innerWidth < 768) {
        setScreen("mobile");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        setScreen("tablet");
      } else {
        setScreen("desktop");
      }
    };
    
    // Run immediately
    updateScreen();
    
    // Add resize listener
    window.addEventListener("resize", updateScreen);

    const handleScroll = () => {
      const section1 = document.getElementById("s1");
      const section2 = document.getElementById("s2");

      const section1Top = section1?.getBoundingClientRect().top ?? 0;
      const section2Top = section2?.getBoundingClientRect().top ?? 0;

      if (Math.abs(section1Top) < Math.abs(section2Top)) {
        setActiveSection("s1");
      } else {
        setActiveSection("s2");
      }
    };

    const main = mainRef.current;
    main?.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", updateScreen);
      main?.removeEventListener("scroll", handleScroll);
    };
  }, [setScreen]);

  // Show content immediately on mobile since there's no lamp animation
  useEffect(() => {
    if (isClient && screen === "mobile") {
      setShowContent(true);
    }
  }, [isClient, screen]);

  // const getLightOpacity = () => {
  //   switch (lightPhase) {
  //     case "off":
  //       return "opacity-0";
  //     case "on":
  //       return "opacity-100";
  //     case "final":
  //       return "opacity-80";
  //     default:
  //       return "opacity-0";
  //   }
  // };

  // const getTrapezoidOpacity = () => {
  //   switch (lightPhase) {
  //     case "off":
  //       return "opacity-0";
  //     case "on":
  //       return "opacity-60";
  //     case "final":
  //       return "opacity-40";
  //     default:
  //       return "opacity-0";
  //   }
  // };

  // const getEllipseOpacity = () => {
  //   switch (lightPhase) {
  //     case "off":
  //       return "opacity-0";
  //     case "on":
  //       return "opacity-60";
  //     case "final":
  //       return "opacity-40";
  //     default:
  //       return "opacity-0";
  //   }
  // };

  return (
    <div
      id="main"
      ref={mainRef}
      className={`w-screen h-screen snap-y snap-mandatory overflow-scroll scroll-smooth transition-colors duration-700 
        ${activeSection === "s1" ? "bg-deep-black" : "bg-rich-charcoal"}
      `}
    >
      <section
        id="s1"
        className={`relative h-screen snap-start max-w-screen overflow-x-hidden transition-opacity duration-700
     ${activeSection === "s2" ? "opacity-0" : "opacity-100"}
      `}
      >
        {/* Lamp Image - only show after loading */}
        {/* <img
          src="svgviewer-output.svg"
          alt="lamp"
          className={`absolute -top-70 right-32 w-120  transition-opacity duration-1000 `}
        /> */}

        {/* Light bulb glow - blinks according to sequence */}
        {/* <div
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
        /> */}

        {/* Yellow light gradient (trapezoid) - blinks according to sequence */}
        {/* <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
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
        </div> */}

        {/* Bottom ellipse light - blinks according to sequence */}
        {/* <div
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
        /> */}
        {/* Only render LampGraphics on non-mobile devices and after client-side hydration */}
        {isClient && screen !== "mobile" && (
          <LampGraphics
            showContent={showContent}
            setShowContent={setShowContent}
          />
        )}

        {/* Title - only show after loading */}
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Title />
        </div>
      </section>
      <section
        id="s2"
        className="w-screen h-screen snap-start flex flex-col items-center"
      >
        <h1 className="text-5xl text-center text-secondary font-playfair p-10">
          Projects
        </h1>
        <div className="flex w-screen justify-between">
          <button
            className="text-card-gray hover:text-shadow-lg text-shadow-lg/40 text-shadow-hover hover:text-shadow-cta text-[10rem] hover:scale-110 hover:opacity-70 transition-all duration-500"
            onClick={prevCard}
          >
            ❮
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={cards[projectIndex].id}
              initial={{ opacity: 0, scale: 0.8, translateY: 0 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, translateY: 200 }}
              transition={{ duration: 0.4 }}
              className="p-5"
            >
              <Card />
            </motion.div>
          </AnimatePresence>

          <button
            className="text-card-gray hover:text-shadow-lg text-shadow-lg/40 text-shadow-hover hover:text-shadow-cta text-[10rem] hover:scale-110 hover:opacity-70 transition-all duration-500"
            onClick={nextCard}
          >
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}
