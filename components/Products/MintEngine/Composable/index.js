import React from "react";
import ownStyles from "./Composable.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle, LineTitleSecondary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextSecondary } from "../../../General";
import Image from "next/image";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container-intro"]}
      backgroundColor={"#571aaa"}
      first={true}
    >
      <div className={ownStyles["image"]}>
        <Image
          width={385}
          height={201}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nova-launch-dashboard.png"}
        />
      </div>
      <div className={ownStyles["content"]}>
        <LineTitleSecondary text={"COMPOSABLE SMART CONTRACT"} />
        <SecondaryTitle text={"Setup a Mint, easily."} />
        <TertiaryParagraph
          style={{ textAlign: "center" }}
          content={
            "Create presales, live minting, gated mints & more through our platform."
          }
        />
        <TertiaryParagraph
          style={{ textAlign: "center" }}
          content={
            "A completely seamless experience to launching your NFT project on Solana."
          }
        />
        <IconTextSecondary text={"A Trusted, Production-Tested Smart Contract"} />
      </div>
    </ContainerSection>
  );
}
