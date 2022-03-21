import React from "react";
import ownStyles from "./RoadItem.module.css";
export default function index({ data }) {
  const { title, subtitle, content } = data;
  return (
    <div className={ownStyles["container-item"]}>
      <div className={ownStyles["container-content-item"]}>
        <div className={ownStyles["container-content-header"]}>
          <span className={ownStyles["container-content-header-time"]}>
            {title}
          </span>
          <span className={ownStyles["container-content-header-title"]}>
            {subtitle}
          </span>
        </div>
        <ul className={ownStyles["container-content-list"]}>
          {content.map((item, index) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
