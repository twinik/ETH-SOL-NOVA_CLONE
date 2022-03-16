import React from "react";
import { ContainerSection } from "../../Containers";
import ownStyles from "./FeatureProject.module.css";
import Image from "next/dist/client/image";
import Gif from "../../../public/assets/BabyDinoGif.gif";
import { ButtonRoundedSecondary, ButtonRound } from "../../Buttons";
import { Twitch, Twitter } from "../../Icons";
export default function index() {
  return (
    <ContainerSection backgroundColor={"#3e2bc5"}>
      <h2 className={ownStyles["Feature-title"]}>
        FEATURED PROJECTS LAUNCHING NOW
      </h2>
      <div className={ownStyles["card-container"]}>
        <div style={{ flex: 1 }}>
          <Image
            width={350}
            height={350}
            loading="eager"
            objectFit="cover"
            layout="responsive"
            className={ownStyles["card-image"]}
            src={Gif}
          />
        </div>
        <div className={ownStyles["card-content"]}>
          <span className={ownStyles["card-title"]}>Baby Dino Kingz</span>
          <span className={ownStyles["card-description"]}>
            3,333 Baby Dino Kingz flying around the Solana Blockchain
          </span>
          <div className={ownStyles["card-icons"]}>
            <ButtonRound text={"3333 TOTAL NFTS"} />
            <Twitch />
            <Twitter />
          </div>
        </div>
        <div style={{ flex: 1,margin: "auto" }}>
          <ButtonRoundedSecondary
            style={{ width: "fit-content" }}
            text={"Mint Now"}
          />
        </div>
      </div>
    </ContainerSection>
  );
}
