import React from "react";
import ownStyles from "./NftContainer.module.css";
import CardNft from '../CardNft'
import { Nfts } from "../../content";
export default function index({}) {
  return (
    <div className={ownStyles["container-recents"]}>
      {Nfts.map(({ name, detail, image }, index) => (
        <CardNft key={name} name={name} detail={detail} image={image} />
      ))}
    </div>
  );
}
