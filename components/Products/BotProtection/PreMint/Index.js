import React from "react";
import ownStyles from "./PreMint.module.css";
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
      backgroundColor={"#000d4d"}
    >
      <div className={ownStyles["content"]}>
        <LineTitle text={"PRE-MINT REGISTRATION"} />
        <SecondaryTitle text={"Authenticate your Mint"} />
        <TertiaryParagraph
          content={
            "Easily pre-register your community for an upcoming mint through Discord (and more social communities coming soon)."
          }
          colorClass={"white"}
        />
        <IconTextTertiary
          icon={faCirclePlay}
          text={"Used by Popular NFT Projects"}
          className={ownStyles["icon-text-sec"]}
        />
      </div>
      <div className={ownStyles["image"]}>
        <Image
          width={1262}
          height={1358}
          loading="eager"
          objectFit="contain"
          layout="responsive"
          src={"/assets/BotProtection/nova-premint-registration.png"}
        />
      </div>
    </ContainerSection>
  );
}
