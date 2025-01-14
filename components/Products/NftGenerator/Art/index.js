import React from "react";
import ownStyles from "./Art.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle } from "../../../Titles";
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
				<LineTitle text={"NOVA LAUNCH NFT GENERATOR"} />
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"Your Art is Everything"}
				/>
				<TertiaryParagraph
					style={{ fontSize: "16px" }}
					colorClass={"white"}
					content={
						"Complete control over your NFT collection, before, during, and after minting."
					}
				/>
				<TertiaryParagraph
					style={{ color: "#b9d2f4" }}
					content={"Fine tune your collection's rarity & more."}
				/>
			</div>
		</ContainerSection>
	);
}
