import React from "react";
import ownStyles from "./CheckText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function index({className="", text,style}) {
  return (
    <div
      className={`${className} ${ownStyles["container"]}`}
      style={{ ...style }}
    >
      <div className={ownStyles["icon"]}>
        <FontAwesomeIcon icon={faCheck} size="lg" />
      </div>
      <span className={ownStyles["text"]}>{text}</span>
    </div>
  );
}

export function second({className="", text,style}) {
  return (
    <div
      className={`${className} ${ownStyles["container"]} ${ownStyles["container-second"]}`}
      style={{ ...style }}
    >
      <div className={`${ownStyles["icon"]} ${ownStyles["icon-second"]}`}>
        <FontAwesomeIcon icon={faCheck} size="lg" />
      </div>
      <span className={`${ownStyles["text"]} ${ownStyles["text--second"]}`}>{text}</span>
    </div>
  );
}