import React from "react";
import ownStyles from "./RuleEngine.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle, LineTitle } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextSecondary } from "../../../General";
import Image from "next/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#1940B0"}
			first={true}
		>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-launch-ruleset.png"}
				/>
			</div>
			<div className={ownStyles["content"]}>
				<LineTitle text={"NOVA LAUNCH RULE ENGINE"} />
				<SecondaryTitle text={"Our Advanced Rule Layering Engine"} />
				<TertiaryParagraph
					style={{ textAlign: "center", color: "#b9d2f4" }}
					content={
						"Art layering is for complex sets, and no one-size fits all."
					}
				/>
				<TertiaryParagraph
					style={{ textAlign: "center", color: "#b9d2f4" }}
					content={
						"Unlimited possibilites with a powerful rules engine to precisely & randomly generate your art collection."
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
