import React from "react";
import ownStyles from "./IconText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function index({ text, style, className }) {
  return (
    <div
      className={`${className} ${ownStyles["container"]}`}
      style={{ ...style }}
    >
      <div className={ownStyles["icon"]}>
        <FontAwesomeIcon icon={faPlay} />
      </div>
      <span className={ownStyles["text"]}>{text}</span>
    </div>
  );
}
