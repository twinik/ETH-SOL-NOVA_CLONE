import React from "react";
import ownStyles from "./IconText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function index({ text, style, className }) {
	return (
		<div
			className={`${className} ${ownStyles["container"]}`}
			style={{ ...style }}
		>
			<div className={ownStyles["icon"]}>
				<FontAwesomeIcon icon={faPlay} />
			</div>
			<span className={ownStyles["text"]}>{text}</span>
		</div>
	);
}

export function iconText2({ text, style, className }) {
	return (
		<div
			className={`${className} ${ownStyles["container"]} `}
			style={{ ...style }}
		>
			<div
				className={`${ownStyles["icon"]} ${ownStyles["icon-secondary"]}`}
			>
				<FontAwesomeIcon icon={faPlay} />
			</div>
			<span
				className={`${ownStyles["text"]} ${ownStyles["text-secondary"]}`}
			>
				{text}
			</span>
		</div>
	);
}

export function iconText3({ text, style, className, icon }) {
	return (
		<div
			className={`${className} ${ownStyles["container"]} `}
			style={{ ...style }}
		>
			<div
				className={`${ownStyles["icon"]} ${ownStyles["icon-secondary"]}`}
			>
				<FontAwesomeIcon icon={icon} />
			</div>
			<span
				className={`${ownStyles["text"]} ${ownStyles["text-secondary"]}`}
			>
				{text}
			</span>
		</div>
	);
}
