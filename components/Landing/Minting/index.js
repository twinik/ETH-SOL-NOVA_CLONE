import React from "react";
import ownStyles from "./Minting.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import CardMint from "./Components/CardMint";
import { Mints } from "./content";
import { ButtonRoundedSecondary } from "../../Buttons";
import { IconText } from "../../General";
export default function index() {
  return (
    <ContainerSection
      id={"minting"}
      className={ownStyles["container-minting"]}
      backgroundColor={"#1d0e8a"}
    >
      <LineTitle text={"WHY MINT WITH NOVA LAUNCH"} />
      <SecondaryTitle
        style={{ textAlign: "left" }}
        text={"Full Service Minting"}
      />
      <SecondaryParagraph
        content={
          "The Nova Team combines a passion for art, NFTs, industry expertise & proven record in helping successful NFT partners to make your NFT launch a reality."
        }
      />
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
      <div className={ownStyles["container-buttons"]}>
        <ButtonRoundedSecondary text={"Sign Up for Nova Launch - 100% Free"} />
        <IconText
          style={{ marginTop: "1rem" }}
          text={"See Why Nova Launch is Trusted for NFTs"}
        />
      </div>
    </ContainerSection>
  );
}
