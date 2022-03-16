import React from "react";
import { ContainerSection } from "../../Containers";
import ownStyles from "./Description.module.css";
import { LineTitle, SecondaryTitle } from "../../Titles";
import CardFeature from "./Components/CardFeature";
import { features } from "./content";
export default function index() {
  return (
    <ContainerSection
      className={ownStyles["container"]}
      backgroundColor={"#3221ad"}
    >
      <LineTitle text={"Not Just a Launchpad"} />
      <SecondaryTitle text={"Nova Launch is the Complete NFT Platform"} />
      <div className={ownStyles["features-container"]}>
        {features.map(({ title, icon, description, url="" }, index) => (
          <CardFeature
            key={title}
            title={title}
            icon={icon}
            description={description}
            url={url}
          />
        ))}
      </div>
    </ContainerSection>
  );
}
