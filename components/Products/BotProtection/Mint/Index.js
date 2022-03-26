import React from "react";
import ownStyles from "./Mint.module.css";
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
      backgroundColor={"#2b4aed"}
    >
      <div className={ownStyles["content"]}>
        <LineTitleTertiary
          classes={ownStyles["line-title"]}
          text={"NOT BOTS ALLOWED"}
        />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"On-Chain Bot Protection"}
        />
        <TertiaryParagraph
          content={"Only allow your users & community to mint your NFT launch."}
          style={{ color: "#fff" }}
        />
        <TertiaryParagraph
          content={
            "100% Bot-proof - completely on chain through our smart-contract, requiring the exchange of a whitelist token + SOL in order to execute a mint."
          }
          style={{ color: "#fff" }}
        />
        <IconTextTertiary
          icon={faCirclePlay}
          text={"Protecting Popular NFT Projects"}
          className={ownStyles["icon-text-sec"]}
        />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={457}
          height={653}
          loading="eager"
          objectFit="contain"
          layout="responsive"
          src={"/assets/BotProtection/nova-bot-protection.png"}
        />
      </div>
    </ContainerSection>
  );
}
