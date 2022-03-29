import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedTertiary, ButtonRoundedGrey } from "../../../Buttons";
import Image from "next/image";
import Link from "next/link";

export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#000C8E"}
			first={true}
		>
			<div className={ownStyles["content"]}>
				<SecondaryTitle text={"Empower your NFT Holders"} />
				<MainParagraphWithIcon
					colorClass="darkerBlue"
					content1={
						"Automatically assign Discord roles or access to member's only channels. Reward & recognize your NFT holders. Powered by Nova Launch - the Premier Solana NFT Platform & trusted NFT partner on the"
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
				<div className={ownStyles["buttons"]}>
					<ButtonRoundedTertiary text={"TRY NOVA PASS NOW"} />
					<ButtonRoundedGrey text={"ABOUT NOVA LAUNCH"} />
				</div>

				<Link href="#projects">
					<span className={ownStyles["seeProjectsLink"]}>
						Apply for Nova Pass
					</span>
				</Link>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={600}
					height={720}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={
						"/assets/nova-pass-verification/novapass-feature-demo.png"
					}
				/>
			</div>
		</ContainerSection>
	);
}
