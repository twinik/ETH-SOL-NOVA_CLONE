import React from "react";
import ownStyles from "./Structure.module.css";
import { ContainerSection } from "../../Containers";
import { LineTitle, SecondaryTitle } from "../../Titles";
import { SecondaryParagraph } from "../../Paragraphs";
import Card from "./Components/Card";
import CardSetup from "./Components/CardSetup";
import { initials, tableData } from "./content";
import Table from "./Components/Table";
export default function index() {
	return (
		<ContainerSection backgroundColor={"#3e2bc5"} id="pricing">
			<LineTitle text={"OUR PRICING"} />
			<SecondaryTitle
				style={{ textAlign: "left" }}
				text={"Fair Fee Structure"}
			/>
			<SecondaryParagraph
				style={{ maxWidth: "600px" }}
				content={
					"Pay as you go network transaction fees & a fair revenue share model that incentivizes your project's success - initial mint & long term."
				}
			/>
			<div className={ownStyles["container-content"]}>
				<div className={ownStyles["container-cards"]}>
					{initials.map(
						({ text, description, number, title }, index) => (
							<Card
								key={index}
								text={text}
								title={title}
								decription={description}
								number={number}
							/>
						)
					)}
				</div>
				<CardSetup
					style={{ marginTop: "2rem", gridArea: "setup" }}
					title={"Custom Setups \n\r Contact us"}
					decription={"Tell us about your project & let's talk."}
					btnText={"Create a Nova Launch Account"}
					btnRef="/signup"
				/>
				<Table
					style={{ marginTop: "2rem", gridArea: "table" }}
					data={tableData}
				/>
			</div>
		</ContainerSection>
	);
}
