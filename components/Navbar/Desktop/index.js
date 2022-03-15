import React, { useState } from "react";
import Image from "next/image";
import { ButtonRounded } from "../../Buttons";
import { OptionsMenu } from "../content";
import ownStyles from "./Desktop.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuDropdown from "../../Navbar/Components/MenuDropdown";
export default function mobile({ style, logo, width }) {
  return (
    <div
      className={
        width < 10
          ? style["nav-container"]
          : `${style["nav-container"]} ${style["active"]}`
      }
    >
      <div style={{ width: 250 }}>
        <Image src={logo} alt="Nova Launch Logo" layout="responsive" />
      </div>

      <div className={ownStyles["nav-links-container"]}>
        {OptionsMenu.map((option, index) => (
          <span className={ownStyles["nav-link"]}>{option}</span>
        ))}
        <FontAwesomeIcon
          className={ownStyles["nav-link"]}
          style={{ fontSize: "1em" }}
          icon={faTwitter}
        />
        <div
          style={{
            borderRight: "thin solid #ffffff3b",
            width: "1px",
            height: "16px",
          }}
        >
          {" "}
        </div>
        <MenuDropdown>
          <span className={ownStyles["nav-link"]} style={{fontSize:'.8em'}}>
            Products{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
            />
          </span>
        </MenuDropdown>
        <ButtonRounded text={"Launch your nft mint"} />
      </div>
    </div>
  );
}
