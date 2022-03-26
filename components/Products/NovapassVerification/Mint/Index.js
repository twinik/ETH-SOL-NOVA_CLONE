import React from "react";
import ownStyles from "./Mint.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle, LineTitleTertiary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconText2 } from "../../../General";
import Image from "next/image";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container-intro"]}
      backgroundColor={"#000537"}
      first={true}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={2642}
          height={1404}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nova-pass-verification/novapass-config.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitleTertiary
          classes={ownStyles["line-title"]}
          text={"NOVA PASS AUTOMATED ROLES ENGINE"}
        />
        <SecondaryTitle text={"Flexible & Easy to Setup"} />
        <TertiaryParagraph
          style={{ color: "#d2d3ff" }}
          content={
            "Connect our Discord bot & get setup with Nova Pass to verify Holders of your NFTs easily & seamlessly."
          }
        />
        <TertiaryParagraph
          style={{ color: "#d2d3ff" }}
          content={
            "Featuring many different ways to authenticate & multiple role assignment."
          }
        />
        <div style={{ width: "100%" }}>
          <IconText2
            text={"Multiple Configuration Options"}
            className={ownStyles["icon-text"]}
            icon={faCheck}
          />

          <IconText2
            text={"Secure - Our Bot has Limited Permissions"}
            className={ownStyles["icon-text"]}
            icon={faCheck}
          />

          <IconText2
            text={"Self-setup - Quick & Easy to Install"}
            className={ownStyles["icon-text"]}
            icon={faCheck}
          />

          <IconText2
            text={
              "Maintains Role Sync - Removes role if NFTs are not longer held"
            }
            className={ownStyles["icon-text"]}
            icon={faCheck}
          />
        </div>
      </div>
    </ContainerSection>
  );
}
