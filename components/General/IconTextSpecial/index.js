import React from "react";
import ownStyles from "./IconText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function index({ text, style, className = "", icon }) {
  const wrapText = text.split(" ");
  return (
    <div
      className={`${className} ${ownStyles["container"]}`}
      style={{ ...style }}
    >
      <div className={ownStyles["icon"]}>
        <FontAwesomeIcon color="#3221ad" icon={icon} />
      </div>
      <span className={ownStyles["text"]}>
        {wrapText[0] + " "}
        <span className={ownStyles["text-styled"]}>{wrapText[1]}</span>
      </span>
    </div>
  );
}
