import React from "react";
import ownStyles from "./IconText2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function index({ text, style, className = "", icon }) {
  return (
    <div
      className={`${className} ${ownStyles["container"]}`}
      style={{ ...style }}
    >
      <div className={ownStyles["icon"]}>
        <FontAwesomeIcon color="#2b56f5" icon={icon} />
      </div>
      <span className={ownStyles["text"]}>{text}</span>
    </div>
  );
}
