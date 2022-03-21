import React from "react";
import ownStyles from "./CardNft2.module.css";
import Image from "next/image";
export default function index({ name, detail, image }) {
  return (
    <div className={ownStyles["card-container"]}>
      <Image
        width={200}
        height={200}
        loading="eager"
        objectFit="cover"
        layout="responsive"
        src={image}
        className={ownStyles["image"]}
      />
      <p className={ownStyles["card-name"]}>{name}</p>
      <p className={ownStyles["card-detail"]}>
        <span className={ownStyles["card-detail-colored"]}>SOLD OUT </span>
        {detail}
      </p>
    </div>
  );
}
