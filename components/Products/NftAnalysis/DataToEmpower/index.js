import React from "react";
import ownStyles from "./DataToEmpower.module.css";
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
      backgroundColor={"#10122d"}
    >
      <div className={ownStyles["content"]}>
        <LineTitle text={"DATA TO EMPOWER YOUR NFT PROJECT"} />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"Actionable Insights"}
        />
        <TertiaryParagraph
          content={
            "Identify key opportunities, your community insights, and more."
          }
          style={{ color: "#a2b4d2" }}
        />
        <TertiaryParagraph
          content={"Plus expert advice & guidance from our seasoned team."}
          style={{ color: "#a2b4d2" }}
        />
        <IconTextTertiary
          icon={faCirclePlay}
          text={"Learn about Nova Launch"}
          className={ownStyles["icon-text-sec"]}
        />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={2760}
          height={1416}
          loading="eager"
          objectFit="contain"
          layout="responsive"
          src={"/assets/nft-analysis/nova-nft-reports.png"}
        />
      </div>
    </ContainerSection>
  );
}
