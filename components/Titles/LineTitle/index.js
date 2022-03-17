import React from "react";
import ownStyles from "../Titles.module.css";
export default function index({ text, style }) {
  return (
    <h3 style={{ ...style }} className={ownStyles["LineTitle"]}>
      {text}
    </h3>
  );
}
