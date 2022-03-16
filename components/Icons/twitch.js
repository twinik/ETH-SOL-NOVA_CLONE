import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import ownStyles from './icons.module.css'
export default function Twitch() {
  return <FontAwesomeIcon className={ownStyles["icon"]} icon={faTwitch} />;
}
