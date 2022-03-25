import React from "react";
import ownStyles from "./Confidence.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle, LineTitleSecondary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { CheckTextSecondary } from "../../../General";

import Image from "next/dist/client/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#6e19c2"}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={385}
          height={201}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nova-launch-nfts.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitleSecondary
          style={{ marginTop: "1.5rem" }}
          text={"The trusted minting platform"}
        />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"Instill Confidence"}
        />
        <TertiaryParagraph
          content={
            "Powering some of the most respected projects on the Solana ecosystem, we provide both creators & communities a fast, secure minting experience."
          }
        />
        <CheckTextSecondary text={"Resistant against bots"} />
        <CheckTextSecondary text={"No hacked mints"} />
      </div>
    </ContainerSection>
  );
}
