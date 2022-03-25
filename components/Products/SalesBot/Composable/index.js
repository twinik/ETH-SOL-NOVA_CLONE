import React from "react";
import ownStyles from "./Composable.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle, LineTitleTertiary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextTertiary } from "../../../General";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import Image from "next/dist/client/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container"]}
			backgroundColor={"#4936B5"}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-sales-page-settings.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitleTertiary
					classes={ownStyles["line-title"]}
					text={"FINE TUNE YOUR SALES PAGE"}
				/>
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"The Premier Toolbox for NFT Projects"}
				/>
				<TertiaryParagraph
					content={
						"Setup and customize your sales bots and sales page on Nova Launch, the premier launchpad & platform for NFT projects."
					}
				/>
			</div>
		</ContainerSection>
	);
}
