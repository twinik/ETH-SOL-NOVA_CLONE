import React from "react";
import ownStyles from "./ContainerSection.module.css";
export default function index({ children,className }) {
  return (
    <div>
      <div className={`${ownStyles["container-section"]} ${className}`}>{children}</div>
    </div>
  );
}
