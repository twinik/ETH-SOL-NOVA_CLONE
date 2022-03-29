import React from "react";
import ownStyles from "./RarityEngine.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle, LineTitleTertiary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextSecondary } from "../../../General";
import Image from "next/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#3E2BC5"}
			first={true}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-rarity-ranking.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitleTertiary
					classes={ownStyles["line-title"]}
					text={"NOVA LAUNCH RARITY ENGINE"}
				/>
				<SecondaryTitle text={"Fine Tuned Rarity Rankings"} />
				<TertiaryParagraph
					style={{ textAlign: "center" }}
					colorClass="white"
					content={
						"Our statistically accurate rarity ranking calculations."
					}
				/>
				<TertiaryParagraph
					style={{ textAlign: "center" }}
					colorClass="white"
					content={
						"With options to customize & fine tune the attributes & layers that matter most."
					}
				/>
				<IconTextSecondary
					text={"Used by Popular NFT Projects"}
					className={ownStyles["icon-text-sec"]}
				/>
			</div>
		</ContainerSection>
	);
}
