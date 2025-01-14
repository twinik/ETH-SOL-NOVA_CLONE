import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraph } from "../../../Paragraphs";
import { ButtonRoundedTertiary } from "../../../Buttons";
import Image from "next/image";
export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#571aaa"}
			first={true}
		>
			<div className={ownStyles["content"]}>
				<SecondaryTitle
					style={{ whiteSpace: "pre-line" }}
					text={"Secure, Worry-free \n Live Minting"}
				/>
				<MainParagraph
					style={{ textAlign: "center" }}
					colorClass={"purple"}
					content={
						"No coding required. Let Nova Launch - the trusted partner in high volume, best-in-class NFT live minting on the  Solana network handle your smart contract needs."
					}
				/>
				<ButtonRoundedTertiary text={"Mint with Nova Launch"} />
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-launch-dashboard.png"}
				/>
			</div>
		</ContainerSection>
	);
}
