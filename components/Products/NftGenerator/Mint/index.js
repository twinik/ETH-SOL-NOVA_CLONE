import React from "react";
import ownStyles from "./Mint.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle, LineTitleTertiary } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import Image from "next/dist/client/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container"]}
			backgroundColor={"#122272"}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-launch-nfts.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitleTertiary
					classes={ownStyles["line-title"]}
					text={"NOVA LAUNCH NFT GENERATOR"}
				/>
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"Your Art is Everything"}
				/>
				<TertiaryParagraph
					content={
						"Complete control over your NFT collection, before, during, and after minting."
					}
				/>
				<TertiaryParagraph
					content={"Fine tune your collection's rarity & more."}
				/>
			</div>
		</ContainerSection>
	);
}
