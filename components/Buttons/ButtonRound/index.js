import React from "react";
import style from "./ButtonRound.module.css";

export default function ButtonRound({ text }) {
  return (
    <button className={style["button-round"]} onClick={() => alert("galo")}>
      {text}
    </button>
  );
}
