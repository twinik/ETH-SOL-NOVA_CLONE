import React from "react";
import ownStyle from "./CardFeature.module.css";
import { SecondaryParagraph } from "../../../../Paragraphs";
import Image from "next/dist/client/image";
export default function index({ image, title, description,subtitle}) {
  return (
    <div className={ownStyle["card-container"]}>
      <div className={ownStyle["card-image"]}>
        <Image
          width={200}
          height={200}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={image}
        />
      </div>
      <h6 className={ownStyle["card-title"]}>{title}</h6>
      <h6 className={ownStyle["card-subtitle"]}>{subtitle}</h6>
      <div className={ownStyle["line"]}></div>
      <SecondaryParagraph content={description} />
    </div>
  );
}
