import React from "react";
import ownStyles from "./Mint.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle, LineTitleSecondary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import Image from "next/dist/client/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#3c1c94"}
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
          text={"Mint on the Solana Network"}
        />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"We turn art into NFTs"}
        />
        <TertiaryParagraph
          content={
            "Start with attributes & layers to build a generative series, or upload your existing art. We'll create the smart contract & upload to the blockchain, enabling a no-code experience to launching your NFT mint."
          }
        />
        <TertiaryParagraph
          content={"We've launched dozens of successful projects already."}
        />
      </div>
    </ContainerSection>
  );
}
