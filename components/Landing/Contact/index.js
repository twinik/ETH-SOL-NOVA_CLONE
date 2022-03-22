import React from "react";
import ownStyles from "./Production.module.css";
import { ContainerSection } from "../../Containers";
import Image from "next/image";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import { IconTextSpecial } from "../../General";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function index() {
  return (
    <ContainerSection
      className={ownStyles["Production-container"]}
      backgroundColor={"#3e2bc5"}
    >
      <div className={ownStyles["container-content"]}>
        <LineTitle
          style={{ textAlign: "center", marginTop: "2rem" }}
          text={"Contact"}
        />

        <SecondaryTitle text={"Get in Touch"} />
        <SecondaryParagraph
          style={{ textAlign: "center" }}
          content="Any questions? Reach out to us and we’ll get back to you shortly."
        />
        <div className={ownStyles["container-socialMedia"]}>
          <IconTextSpecial icon={faEnvelope} text={"contact@novalaunch.art"} />
          <IconTextSpecial
            icon={faDiscord}
            text={"Join: Nova Launch Discord"}
          />
          <IconTextSpecial icon={faTwitter} text={"Twitter: @nova_launch"} />
        </div>
      </div>
      <div className={ownStyles["Production-image"]}>
        <Image
          width={230}
          height={200}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={"/assets/gfx-q.png"}
        />
      </div>
    </ContainerSection>
  );
}
