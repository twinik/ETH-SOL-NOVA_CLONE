import React from "react";
import ownStyles from "../Paragraphs.module.css";
export default function index({ content, style, colorClass }) {
	return (
		<p
			className={`${ownStyles["MainParagraph"]} ${ownStyles[colorClass]}`}
			style={{ ...style }}
		>
			{content}
		</p>
	);
}

export function MainParagraphWithIcon({
	content1,
	content2,
	icon,
	style,
	colorClass
}) {
	return (
		<p
			className={`${ownStyles["MainParagraph"]} ${ownStyles[colorClass]}`}
			style={{ ...style }}
		>
			{content1} {icon} {content2}
		</p>
	);
}
