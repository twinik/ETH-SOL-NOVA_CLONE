import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedYellow } from "../../../Buttons";
import Image from "next/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container-intro"]}
      backgroundColor={"#1f39c3"}
      first={true}
    >
      <div className={ownStyles["content"]}>
        <SecondaryTitle
          style={{ whiteSpace: "pre-line" }}
          text={"Bot-Proof Minting"}
        />
        <MainParagraphWithIcon
          style={{ color: "#fff" }}
          content1={
            "Ensure that your NFT mint does not get botted. Advanced bot-protection, whitelisting, gating & more."
          }
        />

        <MainParagraphWithIcon
          style={{ color: "#fff" }}
          content1={
            "Powered by Nova Launch - the Premier Platform for NFT projects on the"
          }
          icon={
            <Image src="/assets/solana-sol-logo.svg" width={18} height={18} />
          }
          content2={` Solana network.`}
        />

        <ButtonRoundedYellow text={"Mint with nova launch"} />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={512}
          height={512}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/BotProtection/bot.png"}
        />
      </div>
    </ContainerSection>
  );
}
