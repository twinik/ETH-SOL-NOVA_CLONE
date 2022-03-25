import React from "react";
import ownStyles from "./Launches.module.css";
import { ContainerSection } from "../../Containers";
import { SecondaryTitle, LineTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import ContainerNft from "../Description/Components/NftContainer";
import CardNft2 from "./Components/CardNft2";
import {nfts2} from './content'
export default function index() {
  return (
    <ContainerSection backgroundColor={"#3221ad"} id="projects">
      <SecondaryTitle style={{ textAlign: "center" }} text={"FEATURED NOVA LAUNCHES"} />
      <SecondaryParagraph
        style={{ textAlign: "center" }}
        content={"Our Platform Empowers Creators, Games & Projects for Success"}
      />
      <LineTitle style={{}} text={"Recent Project activity"} />
      <ContainerNft />
      <div className={ownStyles["container-nfts"]}>
        {nfts2.map((nft, index) => (
          <CardNft2 key={index} {...nft} />
        ))}
      </div>
    </ContainerSection>
  );
}
