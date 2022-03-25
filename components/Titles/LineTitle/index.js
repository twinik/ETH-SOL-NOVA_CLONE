import React from "react";
import ownStyles from "../Titles.module.css";
export default function index({ text, style }) {
	return (
		<h3 style={{ ...style }} className={ownStyles["LineTitle"]}>
			{text}
		</h3>
	);
}

export function line2({ text, style }) {
	return (
		<h3
			style={{ ...style }}
			className={`${ownStyles["LineTitle"]} ${ownStyles["LineSecond"]}`}
		>
			{text}
		</h3>
	);
}

export function line3({ text, style, classes }) {
	return (
		<h3
			style={{ ...style }}
			className={`${ownStyles["LineTitle"]} ${ownStyles["LineSecond"]} ${classes}`}
		>
			{text}
		</h3>
	);
}
