import React from "react";
import ownStyles from "./Twitter.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextTertiary } from "../../../General";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import Image from "next/dist/client/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#2A1F69"}
    >
      <div className={ownStyles["content"]}>
        <LineTitle text={"AVAILABLE FOR TWITTER AS WELL"} colorClass="violet" />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"Twitter NFT Sales Bot Notifications & Alerts"}
        />
        <TertiaryParagraph content={"Reach your audience on Twitter."} />
        <IconTextTertiary
          icon={faCirclePlay}
          text={"Used by Popular NFT Projects"}
          className={ownStyles["icon-text-sec"]}
        />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={385}
          height={201}
          loading="eager"
          objectFit="contain"
          layout="responsive"
          src={"/assets/nova-twitter-sales-bot.png"}
        />
      </div>
    </ContainerSection>
  );
}
