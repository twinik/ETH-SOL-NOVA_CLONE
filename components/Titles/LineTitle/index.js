import React from "react";
import ownStyles from "../Titles.module.css";
export default function index({ text }) {
  return (
    <div >
      <h3 className={ownStyles["LineTitle"]}>{text}</h3>
    </div>
  );
}
