import React from "react";
import ownStyle from "./CardFeature.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SecondaryParagraph } from "../../../../Paragraphs";
import { ButtonRoundedSecondary } from "../../../../Buttons";
export default function index({ icon, title, description, url }) {
  return (
    <div className={ownStyle["card-container"]}>
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        className={ownStyle["card-icon"]}
      />
      <h6 className={ownStyle["card-title"]}>{title}</h6>
      <SecondaryParagraph content={description} />
      {url != "" && (
        <ButtonRoundedSecondary
          className={ownStyle["card-button"]}
          text={url.text}
        />
      )}
    </div>
  );
}
