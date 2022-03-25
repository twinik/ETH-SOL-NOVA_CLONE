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
			backgroundColor={"#152C87"}
			first={true}
		>
			<div className={ownStyles["content"]}>
				<SecondaryTitle
					style={{ whiteSpace: "pre-line" }}
					text={"Generate a Flawless \n NFT Collection"}
				/>
				<MainParagraphWithIcon
					style={{ textAlign: "center", color: "#af9cff" }}
					content1={`Nova Launch - the Premier Launchpad for Solana NFT projects - trusted partner in high volume, best-in-class NFT live minting on the`}
					icon={
						<Image
							src="/assets/solana-sol-logo.svg"
							width={18}
							height={18}
						/>
					}
					content2={` Solana network.`}
				/>
				<ButtonRoundedTertiary text={"Apply for Nova Launch Quote"} />
				<a href="#projects" className={ownStyles["seeProjectsLink"]}>
					See some recent NFT launches
				</a>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-launch-nft-generator.png"}
				/>
			</div>
		</ContainerSection>
	);
}
