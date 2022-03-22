import React from "react";
import ownStyles from "./Footer.module.css";
import Image from 'next/image';
export default function index() {
  return (
    <div className={ownStyles["container-footer"]}>
      <div style={{ width: 300 }}>
        <Image src={"/nova-launch-logo.png"} alt="Nova Launch Logo" layout="responsive" width={300} height={42} />
      </div>
      <p className={ownStyles["footer-paragraph"]}>
       {"Copyright © 2022, Nova Launch. \n All trademarks and copyrights belong to their respective owners."}
      </p>
    </div>
  );
}
