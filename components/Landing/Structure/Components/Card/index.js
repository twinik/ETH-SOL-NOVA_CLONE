import React from "react";
import ownStyles from "./Card.module.css";
export default function index({title,number,decription,text}) {
  return (
    <div className={ownStyles["card-container"]}>
      <div className={ownStyles["card-title"]}>{title}</div>
      <div className={ownStyles["card-content"]}>
        <h4 className={ownStyles["card-number"]}>{number}%</h4>
        <span className={ownStyles["card-text"]}>{text}</span>
        <span className={ownStyles["card-description"]}>
          {decription}
        </span>
      </div>
    </div>
  );
}
