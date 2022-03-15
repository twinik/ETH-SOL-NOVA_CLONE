import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../public/nova-launch-logo.png";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useWindowSize } from "../../hooks/useWindowDimensions.js";

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  const { width, height } = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return width > 1000 ? (
    <Desktop style={style} logo={logo} width={clientWindowHeight} />
  ) : (
    <Mobile style={style} logo={logo} width={clientWindowHeight} />
  );
}
