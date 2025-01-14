import React from "react";
import ownStyles from "./VerifiedDiscord.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle, LineTitleTertiary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextTertiary } from "../../../General";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import Image from "next/dist/client/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#0a1992"}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={800}
          height={400}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nova-pass-verification/novapass-feature-logo.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitle text={"VERIFIED DISCORD TO SOLANA WALLET"} />
        <SecondaryTitle text={"Authenticated Discord Wallets"} />
        <TertiaryParagraph
          content={
            "Privacy focused but verifiable Discord to Solana Wallet connections. Discord users can link a Solana wallet in under 5 seconds & be eligible for special roles & more."
          }
          colorClass={"lightViolet"}
        />
        <TertiaryParagraph
          content={"Continuously role syncing - even if NFTs change hands."}
          colorClass={"lightViolet"}
        />
      </div>
    </ContainerSection>
  );
}
