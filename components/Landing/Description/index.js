import React from "react";
import { ContainerSection } from "../../Containers";
import ownStyles from "./Description.module.css";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import CardFeature from "./Components/CardFeature";
import { features, Exclusive } from "./content";
import CardScore from "./Components/CardScore";
import NftContainer from './Components/NftContainer';
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#3221ad"}
    >
      <LineTitle text={"Not Just a Launchpad"} />
      <SecondaryTitle style={{textAlign:'center'}} text={"Nova Launch is the Complete NFT Platform"} />
      <div className={ownStyles["features-container"]}>
        {features.map(({ title, icon, description, url = "" }, index) => (
          <CardFeature
            key={title}
            title={title}
            icon={icon}
            description={description}
            url={url}
          />
        ))}
      </div>
      <LineTitle text={"AND MORE EXCLUSIVE FEATURES"} />
      <SecondaryParagraph
        style={{ marginTop: 0 }}
        content={
          "We're always building new & innovative features for you & your community - your NFT project will grow with us."
        }
      />
      <div className={ownStyles["container-exclusive"]}>
        {Exclusive.map(({ detail, value }, index) => (
          <CardScore key={detail} detail={detail} value={value} />
        ))}
      </div>
      <LineTitle text={"Recent Project activity"} />
      <NftContainer />
    </ContainerSection>
  );
}
