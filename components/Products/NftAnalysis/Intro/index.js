import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedBlueLight } from "../../../Buttons";
import Image from "next/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container-intro"]}
      backgroundColor={"#08091b"}
      first={true}
    >
      <div className={ownStyles["content"]}>
        <SecondaryTitle
          style={{ whiteSpace: "pre-line" }}
          text={"Know what's happening with your NFT Project"}
        />
        <MainParagraphWithIcon
          style={{ color: "#c4afff" }}
          content1={
            "Actionable insights on transactions for your NFT project. Powered by Nova Launch - the Premier Platform for NFT projects on the"
          }
          icon={
            <Image src="/assets/solana-sol-logo.svg" width={18} height={18} />
          }
          content2={` Solana network.`}
        />
        <ButtonRoundedBlueLight text={"Try nova launch now"} />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={2440}
          height={1416}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nft-analysis/nova-recent-activity.png"}
        />
      </div>
    </ContainerSection>
  );
}
