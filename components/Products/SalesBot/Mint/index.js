import React from "react";
import ownStyles from "./Mint.module.css";
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
			backgroundColor={"#5D46E8"}
		>
			<div className={ownStyles["content"]}>
				<LineTitleTertiary
					classes={ownStyles["line-title"]}
					text={"DISCORD SALES NOTIFICATION BOT"}
				/>
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={
						"Stream live marketplace sales alerts to your discord."
					}
				/>
				<TertiaryParagraph
					content={"Support for all popular Solana marketplaces."}
				/>
				<TertiaryParagraph
					content={"Options to fine tune your alerts & settings."}
				/>
				<IconTextTertiary
					icon={faCirclePlay}
					text={"Used by Popular NFT Projects"}
					className={ownStyles["icon-text-sec"]}
				/>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="contain"
					layout="responsive"
					src={"/assets/discord-sales-bot-message.png"}
				/>
			</div>
		</ContainerSection>
	);
}
