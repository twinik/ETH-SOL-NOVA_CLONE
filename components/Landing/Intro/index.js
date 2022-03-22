import React from "react";
import ownStyles from "./Intro.module.css";
import { MainTitle } from "../../Titles";
import { MainParagraph } from "../../Paragraphs";
import { ButtonRoundedSecondary } from "../../Buttons";
import Swiper from "../../Swiper";
import { ContainerSection } from "../../Containers";

export default function index() {
  const baseAssetsUrl = "/assets";
  const data = [
    {
      image: baseAssetsUrl + "/nova-launch-dashboard.png",
      description:
        "Tools loved by the community - from gating your mint for presales and more.",
    },
    {
      image: baseAssetsUrl + "/nova-launch-nft-generator.png",
      description:
        "The best-in-class NFT generator to flawlessly create your NFT images & data.",
    },
    {
      image: baseAssetsUrl + "/nova-launch-nfts.png",
      description:
        "Easily Manage & Fine Tune your NFT Collection before Uploading Permanently to the Blockchain",
    },
    {
      image: baseAssetsUrl + "/nova-launch-rarity-table.png",
      description: "Always adding new innovative tools for NFT projects.",
    },
    {
      image: baseAssetsUrl + "/nova-launch-website.png",
      description:
        "No-Code Required - Use our website builder to set up a secure, highly optimized site. Unlimited possibilities.",
    },
  ];

  return (
    <ContainerSection className={ownStyles["Intro-container"]} first={true} id="why-nova">
      <MainTitle text={"Empowering NFT Creators"}  />
      <MainParagraph
        style={{ marginTop: "0" }}
        content={`Nova Launch - the Premier Launchpad & Comprehensive Platform for
          Solana NFT projects - trusted partner in high volume, best-in-class
          NFT live minting & community building on the Solana network.`}
      />
      <ButtonRoundedSecondary text={"Sign up for Nova Launch - 100% Free"} />
      <span
        style={{
          fontSize: "0.7em",
          marginTop: "1rem",
          fontWeight: 400,
          color: "#e4e1ffea",
        }}
      >
        See some recent NFT launches
      </span>
      <Swiper data={data} />
    </ContainerSection>
  );
}
