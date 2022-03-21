import React from "react";
import ownStyles from "./RoadMap.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import RoadItem from "./Components/RoadItem";
import { steps } from "./content";
export default function index() {
  return (
    <ContainerSection backgroundColor={"#3e2bc5"}>
      <LineTitle text={"OUR PROCESS"} />
      <SecondaryTitle
        style={{ textAlign: "left" }}
        text={"Launch Quickly & Smoothly"}
      />
      <SecondaryParagraph
        style={{ maxWidth: "600px" }}
        content={
          "We're familiar with NFT launches, and move at the speed of crypto. Don't hesitate to reach out no matter what stage your project is in."
        }
      />
      <div className={ownStyles["container-roadMap"]}>
        {steps.map((step, index) => (
          <RoadItem data={step} key={step.title} />
        ))}
      </div>
    </ContainerSection>
  );
}
