"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const Title = () => {
  const titles = [
    
    { text: "a Creator", icon: "/undraw_photograph_gwbm.svg" },
    { text: "a Creator", icon: "/undraw_photograph_gwbm.svg" },
    { text: "a Designer", icon: "/undraw_choose-color_qtyu.svg" },
    { text: "Batman", icon: "/bat-svgrepo-com.svg" },
    { text: "a Developer", icon: "/undraw_app-dark-mode_6ji2.svg" },
  ];

  const textRef = useRef(null);
  const iconRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 }); 

    titles.forEach((title, index) => {
      tl.to(textRef.current, {
        scrambleText: {
          text: title.text,
          speed: 1, 
          chars: title.text === "a Developer" ? "*" : "?!",
        },
        ease: "power2.out",
        duration: 1,
        onStart: () => setCurrentIndex(index),
      })
        .to(
          iconRef.current,
          {
            rotation: 0,
            scale: 1.0,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          "<"
        ) 
        .to(iconRef.current, {
          scale: 1,
          duration: 0.2,
        });
    });
  }, []);

  return (
    <div className="max-w-screen max-h-screen flex justify-center">
      <div className="h-screen w-full md:w-7/9 flex flex-col md:flex-row-reverse items-center justify-center md:items-end">
        <div className="flex md:flex-3/12 mb-20 md:mb-70">
          <div className="w-30 md:w-50 ">
            <img
              ref={iconRef}
              src={titles[currentIndex].icon}
              alt={titles[currentIndex].text}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex md:flex-9/12 flex-col gap-1 md:gap-15 mb-1 md:mb-20">
          <div className="text-primary text-center md:text-start">
            <span className="font-nunito text-xl md:text-4xl">Hi, I'm </span>
            <span className="font-nunito text-xl md:text-4xl">Siddhesh</span>
          </div>
          <div className="text-secondary font-nunito text-4xl md:text-8xl ">
            <span>I'm </span>
            <span ref={textRef} className="font-playfair text-4xl md:text-8xl"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
