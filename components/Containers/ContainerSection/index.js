import React from "react";
import ownStyles from "./ContainerSection.module.css";
export default function index({ children,className,backgroundColor }) {
  return (
    <div style={{backgroundColor:backgroundColor}}>
      <div className={`${ownStyles["container-section"]} ${className}`}>{children}</div>
    </div>
  );
}
