import React from "react";
import ownStyles from "./CardNft.module.css";
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
      <p className={ownStyles["card-detail"]}>{detail}</p>
      <div className={ownStyles["card-time"]}>5 Hour ago</div>
    </div>
  );
}
