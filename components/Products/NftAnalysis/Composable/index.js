import React from "react";
import ownStyles from "./Composable.module.css";
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
      backgroundColor={"#0b0c22"}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={2760}
          height={1416}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nft-analysis/nova-nft-holders.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitleTertiary
          classes={ownStyles["line-title"]}
          text={"HELP YOUR NFTS SUCCEED"}
        />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"Holder Analytics & More"}
        />
        <TertiaryParagraph
          content={
            "Segmented & exportable data about your NFT holders, marketplace sales, mints, & more."
          }
          style={{ color: "#fff" }}
        />
      </div>
    </ContainerSection>
  );
}
