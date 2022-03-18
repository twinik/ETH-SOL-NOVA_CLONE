import React from "react";
import ownStyles from "./Design.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import { ButtonRoundedSecondary } from "../../Buttons";
import { CheckText } from "../../General";
import Image from "next/image";
export default function Index() {
  return (
    <ContainerSection
      backgroundColor={"#3e2bc5"}
      className={ownStyles["container-design"]}
    >
      <div className={ownStyles["container-header"]}>
        <LineTitle text={"BEAUTIFUL FRONTEND DESIGN"} />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"Highly Effective NFT Site Design"}
        />
        <SecondaryParagraph
          content={
            "Put on your best first impression. Our no-code templating engine enables NFT projects to produce highly functional mint sites that convert."
          }
        />
      </div>
      <div className={ownStyles["container-cards"]}>
        <div className={ownStyles["Card"]}>
          <div className={ownStyles["image"]}>
            <Image
              width={320}
              height={220}
              loading="eager"
              objectFit="cover"
              layout="responsive"
              src={"/assets/Design/gfx-sm-a.png"}
            />
          </div>
          <SecondaryParagraph
            content={
              "No coding experience needed. Our specially designed NFT project site platform allows you to customize & deploy a project site with your roadmap & more."
            }
          />
        </div>
        <div className={ownStyles["Card"]}>
          <div className={ownStyles["image"]}>
            <Image
              width={320}
              height={310}
              loading="eager"
              objectFit="cover"
              layout="responsive"
              src={"/assets/Design/gfx-sm-d.png"}
            />
          </div>
          <SecondaryParagraph
            content={
              "Powered by our on-chain Solana smart contract - Nova Launch makes minting easy & attractive, with a timer countdown & support for most popular Solana wallets."
            }
          />
        </div>
      </div>

      <ButtonRoundedSecondary
        style={{
          margin: "auto",
          display: "block",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
        text={"See a demo mint site"}
      />
      <div className={ownStyles["manage-container"]}>
        <Image
          width={385}
          height={201}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/nova-launch-dashboard.png"}
        />
        <div>
          <LineTitle
            style={{ marginTop: "2rem", marginBottom: ".8rem" }}
            text={"Manage Your NFT Project"}
          />
          <SecondaryTitle
            style={{ textAlign: "left" }}
            text={"Easy to Use Backend Portal"}
          />
          <SecondaryParagraph
            content={
              "Easily manage your NFT project site with our custom backend admin panel."
            }
          />
          <CheckText
            text={
              "Easy Configure Roadmap, Smart Contract Settings, Project Details & Content & More"
            }
          />
          <CheckText
            text={
              "Produces a professional NFT site with no code needed - leave it to us"
            }
          />
          <CheckText
            text={
              "Update & keep your community informed & impressed - built in marketing tools."
            }
          />
        </div>
      </div>
    </ContainerSection>
  );
}
