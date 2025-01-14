import React from "react";
import ownStyles from "./OperateSystem.module.css";
import { ContainerSection } from "../../../../components/Containers";
import {
  LineTitleTertiary,
  SecondaryTitle,
} from "../../../../components/Titles";
import { SecondaryParagraph } from "../../../../components/Paragraphs";
import { ButtonRoundedBlueLight } from "../../../../components/Buttons";

import CardMint from "./Components/CardMint";
import { Mints } from "./content";

export default function index() {
  return (
    <ContainerSection backgroundColor={"#0b0c22"}>
      <div className={ownStyles["content"]}>
        <LineTitleTertiary
          classes={ownStyles["line-title"]}
          text={"THE COMPLETE NFT OPERATING SYSTEM"}
        />
        <SecondaryTitle text={"We are Nova Launch"} />
        <SecondaryParagraph
          content={
            "The Nova Team combines a passion for art, NFTs, industry expertise & proven \nrecord in helping successful NFT partners to make your NFT launch a reality."
          }
        />
      </div>
      <div className={ownStyles["container-mints"]}>
        {Mints.map(({ title, description, image, subtitle }, index) => (
          <CardMint
            key={title}
            title={title}
            description={description}
            image={image}
            subtitle={subtitle}
          />
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonRoundedBlueLight text={"Apply To Mint With Us"} />
      </div>
    </ContainerSection>
  );
}
