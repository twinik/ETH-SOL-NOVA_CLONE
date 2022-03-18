import React from "react";
import ownStyles from "./Audience.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import ReactPlayer from "react-player/lazy";
import { features } from "./content";
import { CheckText } from "../../General";
export default function index() {
  const arrayHalfed = features.slice(0, features.length / 2);
  const arrayHalfed2 = features.slice(features.length / 2, features.length);
  return (
    <ContainerSection backgroundColor={"#1d0e8a"}>
      <LineTitle text={"IMPRESS YOUR AUDIENCE"} />
      <SecondaryTitle
        style={{ textAlign: "left" }}
        text={"Our Full Featured NFT Site"}
      />
      <SecondaryParagraph
        content={
          "Solana Blockchain-powered NFT project site - including minting capabilities, roadmap, attributes, rarity rankings & more."
        }
      />
      <ReactPlayer
        url="/assets/Videos/bcdXDRK.mp4"
        width={"100%"}
        height={"100%"}
        controls={true}
        style={{ margin: "2rem 0" }}
      />
      <div className={ownStyles["container-features"]}>
        <div>
          {arrayHalfed.map(({ text }, index) => (
            <CheckText key={text} text={text} />
          ))}
        </div>
        <div>
          {arrayHalfed2.map(({ text }, index) => (
            <CheckText key={text} text={text} />
          ))}
        </div>
      </div>
    </ContainerSection>
  );
}
