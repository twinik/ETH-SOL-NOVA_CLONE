import React from "react";
import ownStyles from "./Production.module.css";
import { ContainerSection } from "../../Containers";
import Image from "next/image";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import { IconText } from "../../General";

export default function index() {
  return (
    <ContainerSection
      className={ownStyles["Production-container"]}
      backgroundColor={"#3e2bc5"}
    >
      <div className="Production-image">
        <Image
          width={230}
          height={200}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/gfx-n.png"}
        />
      </div>
      <div style={{ gridArea: "content" }}>
        <LineTitle
          style={{ textAlign: "left", marginTop: "2rem"}}
          text={"Custom Developed Smart Contract"}
        />

        <SecondaryTitle
          text={"Our Production Tested \n\r Smart Contract"}
          style={{ textAlign: "left",whiteSpace: "pre-line" }}
        />
        <SecondaryParagraph content="Not just Candy Machine - we custom developed our own Solana minting on-chain smart contract." />
        <SecondaryParagraph
          content={`From helping NFT projects run presales, to full scale live mints that sell out in minutes, Nova Launch's highly optimized custom smart contract ensures a smooth & successful mint process.`}
        />
        <IconText
          className={ownStyles["Production-icon"]}
          style={{ marginTop: "2rem" }}
          text="See Metaplex Talk About Our Smart Contract Work"
        />
      </div>
    </ContainerSection>
  );
}
