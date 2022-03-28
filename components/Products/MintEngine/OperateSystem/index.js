import React from "react";
import ownStyles from "./OperateSystem.module.css";
import { ContainerSection } from "../../../../components/Containers";
import { LineTitle, SecondaryTitle } from "../../../../components/Titles";
import { SecondaryParagraph } from "../../../../components/Paragraphs";
import { ButtonRoundedTertiary } from "../../../../components/Buttons";

import CardMint from "./Components/CardMint";
import { Mints } from "./content";

export default function index() {
	return (
		<ContainerSection backgroundColor={"#2e186a"}>
			<div className={ownStyles["content"]}>
				<LineTitle
					text={"The Complete NFT Operating System"}
					colorClass="violeta"
				/>
				<SecondaryTitle text={"Many ways to mint."} />
				<SecondaryParagraph
					content={
						"Whether you want to have Nova Launch host your site, or you're embedding on your \n own site, app, or game - we've got you covered."
					}
				/>
			</div>
			<div className={ownStyles["container-mints"]}>
				{Mints.map(({ title, description, image, subtitle }, index) => (
					<CardMint
						key={title}
						title={title}
						description={description}
						image={image}
						subtitle={subtitle}
					/>
				))}
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center"
				}}
			>
				<ButtonRoundedTertiary text={"Apply to Mint with Us"} />
			</div>
		</ContainerSection>
	);
}
