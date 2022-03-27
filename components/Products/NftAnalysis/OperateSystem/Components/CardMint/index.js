import React from "react";
import ownStyle from "./CardFeature.module.css";
import { TertiaryParagraph } from "../../../../../Paragraphs";
import Image from "next/dist/client/image";
export default function index({ image, title, description, subtitle }) {
  return (
    <div className={ownStyle["card-container"]}>
      <div className={ownStyle["card-image"]}>
        <Image
          width={160}
          height={145}
          loading="eager"
          objectFit="cover"
          layout="responsive"
          src={image}
        />
      </div>
      <h6 className={ownStyle["card-title"]}>{title}</h6>
      <h6 className={ownStyle["card-subtitle"]}>{subtitle}</h6>
      <div className={ownStyle["line"]}></div>
      <TertiaryParagraph content={description} style={{ color: "#a2b4d2" }} />
    </div>
  );
}
