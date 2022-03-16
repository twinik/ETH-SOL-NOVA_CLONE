import React from "react";
import Particles from "react-tsparticles";

export default function Index() {
  return (
    <Particles
      style={{ zIndex: -1 }}
      options={{
        autoPlay: {
          enable: true,
          interval: 5000,
          swapImageDuration: 1000,
        },
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#2f5bc7" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.05,
              sync: true,
              startValue: "max",
              count: 1,
            },
            value: {
              min: 0.3,
              max: 0.5,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
          links: {
            color: "#2f5bc7",
            enable: true,
            frequency: 0.4,
          },
        },
      }}
    />
  );
}
