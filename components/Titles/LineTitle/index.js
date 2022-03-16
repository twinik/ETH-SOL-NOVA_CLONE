import React from "react";
import ownStyles from "../Titles.module.css";
export default function index({ text }) {
  return <h3 className={ownStyles["LineTitle"]}>{text}</h3>;
}
