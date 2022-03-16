import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import ownStyles from "./icons.module.css";

export default function twitter() {
  return <FontAwesomeIcon className={ownStyles["icon"]} icon={faTwitter} />;
}
