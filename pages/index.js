import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import {
  Intro,
  FeatureProject,
  Description,
  Production,
  Minting,
  Design,
  Audience,
  Structure,
} from "../components/Landing";
import Particles from "../components/Particles";
export default function Home() {
  return (
    <div>
      <Intro />
      <FeatureProject />
      <Description />
      <Production />
      <Minting />
      <Design />
      <Audience />
      <Structure />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: poppins;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
