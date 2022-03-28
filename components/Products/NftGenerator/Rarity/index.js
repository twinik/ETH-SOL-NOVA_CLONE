import React from "react";
import ownStyles from "./Rarity.module.css";
import { ContainerSection } from "../../../Containers";
import { LineTitle, SecondaryTitle } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextTertiary } from "../../../General";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/dist/client/image";

export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container"]}
			backgroundColor={"#1940B0"}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-launch-nft-rarity.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitle text={"ADVANCED RARITY ASSURANCE"} />
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"Rarity is Key"}
				/>
				<TertiaryParagraph
					content={
						"By the time your community is minting, it's too late. Rest easy with our rarity calculations before uploading."
					}
				/>
				<IconTextTertiary
					icon={faCheck}
					text={"No Duplicates - Ever"}
					className={ownStyles["icon-text-sec"]}
				/>
				<IconTextTertiary
					icon={faCheck}
					text={"Automatically Checks for Errors"}
					className={ownStyles["icon-text-sec"]}
				/>
			</div>
		</ContainerSection>
	);
}
