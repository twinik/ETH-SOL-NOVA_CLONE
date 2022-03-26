import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedTertiary } from "../../../Buttons";
import Image from "next/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container-intro"]}
      backgroundColor={"#000C8E"}
      first={true}
    >
      <div className={ownStyles["content"]}>
        <SecondaryTitle
          style={{ whiteSpace: "pre-line" }}
          text={"Empower your NFT Holders"}
        />
        <MainParagraphWithIcon
          style={{ textAlign: "center", color: "#8ca2e5" }}
          content1={
            "Automatically assign Discord roles or access to member's only channels. Reward & recognize your NFT holders."
          }
          icon={
            <Image src="/assets/solana-sol-logo.svg" width={18} height={18} />
          }
          content2={` Solana network.`}
        />
        <div className={ownStyles["buttons"]}>
          <ButtonRoundedTertiary text={"TRY NOVA PASS NOW"} />
          <ButtonRoundedTertiary
            text={"ABOUT NOVA LAUNCH"}
            btnStyle={{ backgroundColor: "#415076 !important" }}
          />
        </div>

        <a href="#projects" className={ownStyles["seeProjectsLink"]}>
          Aplly for Nova Pass
        </a>
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
