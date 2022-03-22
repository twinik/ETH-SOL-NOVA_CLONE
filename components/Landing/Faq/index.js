import React from "react";
import ownStyles from "./Faq.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import Tab from "./Components/Tab";
import { tabs } from "./content";
import Image from "next/image";

export default function index() {
  return (
    <ContainerSection backgroundColor={"#3221ad"} id="faq">
      <LineTitle text={"FAQ"} />
      <SecondaryTitle
        style={{ textAlign: "left" }}
        text={"Frequently Asked Questions"}
      />
      <div className={ownStyles["container-table"]}>
        <Tab data={tabs} />
        <div className={ownStyles["image"]}>
          <Image
            width={350}
            height={362}
            loading="eager"
            layout="responsive"
            src={"/assets/gfx-p.png"}
          />
        </div>
      </div>
    </ContainerSection>
  );
}
