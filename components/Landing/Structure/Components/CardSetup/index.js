import React from "react";
import ownStyles from "./CardSetup.module.css";
import { ButtonRoundedSecondary } from "../../../../Buttons";
export default function index({ title, decription, btnText, btnRef,style }) {
  return (
    <div style={{...style}} className={ownStyles["card-container"]}>
      <div className={ownStyles["card-title"]}>{title}</div>
      <div className={ownStyles["card-content"]}>
        <span className={ownStyles["card-text"]}>{decription}</span>
        <ButtonRoundedSecondary style={{width:'90%',paddingTop:'1rem',paddingBottom:'1rem'}} text={btnText} />
      </div>
    </div>
  );
}
