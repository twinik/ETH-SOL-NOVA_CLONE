import React from "react";
import ownStyles from "../Paragraphs.module.css";
export default function index({ content, style }) {
  return (
    <p className={ownStyles["SecondaryParagraph"]} style={{ ...style }}>
      {content}
    </p>
  );
}

export function para2({ content, style, colorClass }) {
  return (
    <p
      className={`${ownStyles["SecondaryParagraph"]} ${ownStyles["terParagraph"]} ${ownStyles[colorClass]}`}
      style={{ ...style }}
    >
      {content}
    </p>
  );
}
