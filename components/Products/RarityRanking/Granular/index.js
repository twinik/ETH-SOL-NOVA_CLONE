import React from "react";
import ownStyles from "./Granular.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import Image from "next/dist/client/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container"]}
			backgroundColor={"#3221AD"}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-rarity-ranking-list.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitle text={"GRANULAR SCORING CONTROL"} />
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"Rarity is Everything"}
				/>
				<TertiaryParagraph
					style={{ color: "#fff", fontSize: "1.1rem" }}
					content={
						"Not all NFTs are created equal. Enable communities to gauge rareness and trade, encouraging higher volume & interest in your NFTs."
					}
				/>
				<TertiaryParagraph
					style={{ color: "#fff", fontSize: "1rem" }}
					content={"Fine tune your collection's rarity & more."}
				/>
			</div>
		</ContainerSection>
	);
}
