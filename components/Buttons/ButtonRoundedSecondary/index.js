import React from "react";
import style from "./ButtonRoundedSecondary.module.css";

export default function ButtonRoundedSecondary({ text, style: btnStyle, onClick }) {
  return (
    <button
      className={style["button-rounded"]}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}
