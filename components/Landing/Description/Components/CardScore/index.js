import React from "react";
import ownStyles from "./CardScore.module.css";
export default function index({ detail, value }) {
  return (
    <div className={ownStyles["CardContainer"]}>
      <div className={ownStyles["CardValue"]}>{value}</div>
      <div className={ownStyles["CardDetail"]}>{detail}</div>
    </div>
  );
}
