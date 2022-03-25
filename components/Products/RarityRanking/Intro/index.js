import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedTertiary } from "../../../Buttons";
import Image from "next/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#3927BA"}
			first={true}
		>
			<div className={ownStyles["content"]}>
				<SecondaryTitle
					style={{ whiteSpace: "pre-line" }}
					text={"Rarity Rankings\nFor your NFT \nCollection"}
				/>
				<MainParagraphWithIcon
					style={{ textAlign: "center", color: "#af9cff" }}
					content1={
						"Customizable rarity ranking display of your NFT project, no-code needed. By Nova Launch - the Premier Platform for NFT projects on the"
					}
					icon={
						<Image
							src="/assets/solana-sol-logo.svg"
							width={18}
							height={18}
						/>
					}
					content2={` Solana network.`}
				/>
				<ButtonRoundedTertiary text={"See a Demo Ranking"} />
				<a href="" className={ownStyles["seeProjectsLink"]}>
					TRY NOVA LAUNCH NOW
				</a>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/lotus-gang-rarity.png"}
				/>
			</div>
		</ContainerSection>
	);
}
