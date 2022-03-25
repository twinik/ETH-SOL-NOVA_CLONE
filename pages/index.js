import styles from "./index.module.css";
import React, { useState, useEffect, Suspense } from "react";
import {
  Intro,
  FeatureProject,
  Description,
  Production,
  Minting,
  Design,
  Audience,
  Structure,
  Requirements,
  RoadMap,
  Launches,
  Faq,
  Contact,
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
      <Requirements />
      <RoadMap />
      <Launches />
      <Faq />
      <Contact />
      
    </div>
  );
}
