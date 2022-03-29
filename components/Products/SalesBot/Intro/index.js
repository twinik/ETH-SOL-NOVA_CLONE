import React from "react";
import ownStyles from "./Intro.module.css";
import { ContainerSection } from "../../../Containers";
import { SecondaryTitle } from "../../../Titles";
import { MainParagraphWithIcon } from "../../../Paragraphs/MainParagraph";
import { ButtonRoundedTertiary } from "../../../Buttons";
import Image from "next/image";
import Link from "next/link";

export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container-intro"]}
			backgroundColor={"#543FD3"}
			first={true}
		>
			<div className={ownStyles["content"]}>
				<SecondaryTitle
					style={{ whiteSpace: "pre-line" }}
					text={
						"Show off your NFT project's marketplace sales & trades"
					}
				/>
				<MainParagraphWithIcon
					style={{ textAlign: "center", color: "#ffffff" }}
					content1={
						"Easily setup recent trades & marketplace sales tracking page & Discord or Twitter sales bot. Powered by Nova Launch - the Premier Platform for NFT projects on the"
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
				<ButtonRoundedTertiary
					text={"See an Example Sales Page"}
					className={ownStyles["button"]}
				/>
				<Link href="/">
					<span className={ownStyles["seeProjectsLink"]}>
						TRY NOVA LAUNCH NOW - 100% FREE
					</span>
				</Link>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="cover"
					layout="responsive"
					src={"/assets/nova-sales-page.png"}
				/>
			</div>
		</ContainerSection>
	);
}
