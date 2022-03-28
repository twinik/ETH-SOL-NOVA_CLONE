import React from "react";
import ownStyles from "./MintGating.module.css";
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
      backgroundColor={"#1d36ba"}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={2546}
          height={1390}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/BotProtection/nova-mint-gate-settings.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitle text={"MANY WAYS TO GATE YOUR MINT"} />
        <SecondaryTitle text={"Mint Gating"} />
        <TertiaryParagraph
          content={
            "Nova Launch offers many ways to protect your mint, from Discord role & guild authentication, limited to NFT holders, password, & many more. Easily setup a mint gate through our platform."
          }
          colorClass={"white"}
        />
      </div>
    </ContainerSection>
  );
}
