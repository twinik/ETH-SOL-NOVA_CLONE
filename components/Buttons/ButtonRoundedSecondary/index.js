import React from "react";
import style from "./ButtonRoundedSecondary.module.css";

export default function ButtonRoundedSecondary({
  text,
  style: btnStyle,
  onClick,
  className,
}) {
  return (
    <button
      className={`${style["button-rounded"]} ${className}`}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}

export function ButtonRoundedTertiary({
  text,
  style: btnStyle,
  onClick,
  className,
}) {
  return (
    <button
      className={`${style["button-rounded"]} ${className} ${style["button-rounded-tertiary"]}`}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}

export function ButtonRoundedYellow({
  text,
  style: btnStyle,
  onClick,
  className,
}) {
  return (
    <button
      className={`${className} ${style["button-rounded-yellow"]}`}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}

export function ButtonRoundedBlueLight({
  text,
  style: btnStyle,
  onClick,
  className,
}) {
  return (
    <button
      className={`${className} ${style["button-rounded-blue-light"]}`}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}

export function ButtonRoundedGrey({
  text,
  style: btnStyle,
  onClick,
  className,
}) {
  return (
    <button
      className={`${className} ${style["button-rounded-grey"]}`}
      style={{ ...btnStyle }}
      onClick={() => alert("galo")}
    >
      {text}
    </button>
  );
}
