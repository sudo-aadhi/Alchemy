"use client";
import { useState } from "react";
import { Badge } from "./essentials/badge";
import ParticlesComponent from "./essentials/particleBackground";

const Main = () => {
  return (
    <div className="relative w-full h-screen bg-[#000000] flex items-center justify-center overflow-hidden">
      <BackgroundBlurComponent />
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <BannerTextComponent />
        <EllipseComponent />
        <ParticlesComponent />
        <BannerDescriptionComponent />
        <Badge text="Deep Dive Into Components" />
      </div>
    </div>
  );
};

const BackgroundBlurComponent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-t from-[#474e87] to-transparent blur-[150px] shadow-[0_0_200px_rgba(255,255,255,0.4)] opacity-60"></div>
    </div>
  );
};

const BannerTextComponent = () => {
  return (
    <div className="text-center z-10 relative bottom-[50px]">
      <h1
        className="text-white text-5xl font-bold mb-4 font-instrument"
        style={{
          textShadow:
            "0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        Crafted Components
      </h1>
      <h2
        className="text-white text-5xl font-bold font-instrument"
        style={{
          textShadow:
            "0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.3)",
        }}
      >
        Flawlessly Crafted Animations
      </h2>
    </div>
  );
};

const EllipseComponent = () => {
  const [color, setColor] = useState();

  const handleColor = () => {};

  return (
    <div className="flex items-center justify-center w-[2850px] h-[2850px] bg-black rounded-full absolute top-[300px] bg-gradient-to-t from-black via-[#ffffff] to-black z-20 shadow-[0_0_60px_20px_rgba(255,255,255,0.4)]">
      <div
        className="flex items-center w-[2850px] h-[2850px] rounded-full absolute top-[5px] bg-[#0A0A0A]"
        style={{ boxShadow: "0 0 80px 5px rgb(46, 56, 148, 1)" }}
      ></div>
    </div>
  );
};

const BannerDescriptionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[4px] px-6 text-center  relative bottom-[20px]">
      <p className="text-lg text-[#737279]">
        A powerful{" "}
        <span className="text-white font-normal">Component Library</span> built
        on
        <span className="text-white font-normal"> Framer Motion </span>
        and
        <span className="text-white font-normal"> Next.js</span>
      </p>
      <p className="text-[#737279]">
        that makes your website a million times better.
      </p>
    </div>
  );
};

export default Main;
