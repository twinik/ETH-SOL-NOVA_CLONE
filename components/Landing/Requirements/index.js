import React from "react";
import ownStyles from "./Requirements.module.css";
import { ContainerSection } from "../../Containers";
import { SecondaryTitle, LineTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import Image from "next/image";
import Link from "next/link";
export default function index() {
  return (
    <ContainerSection
      backgroundColor={"#3221ad"}
      className={ownStyles["container-Requirements"]}
    >
      <div>
        <LineTitle text={"Be prepared"} />
        <SecondaryTitle
          style={{ textAlign: "left" }}
          text={"See our NFt Requirements"}
        />
        <SecondaryParagraph
          content={
            "We've prepared a set of requirements & info needed for your launch. While not required to start a launch with us - it always helps to know what to prepare."
          }
        />
      </div>
      <div className={ownStyles["container-pdf"]}>
        <div className={ownStyles["container-image"]}>
          <Image
            width={25}
            height={35}
            loading="eager"
            objectFit="cover"
            layout="responsive"
            src={"/assets/alt-sm-b.png"}
            className={ownStyles["image-alt"]}
          />
        </div>
        <div>
          <h6 className={ownStyles["text-alt"]}>Requirements</h6>
          <Link href="/">
            <a className={ownStyles["btn-pdf"]}>Pdf</a>
          </Link>
        </div>
      </div>
    </ContainerSection>
  );
}
