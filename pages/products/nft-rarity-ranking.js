import React from "react";
import {
	Intro,
	Mint,
	Composable,
	OperateSystem,
	Rarity,
	Contact
} from "../../components/Products/RarityRanking";
const Page = () => (
	<div>
		<Intro />
		<Composable />
		<Mint />
		<OperateSystem />
		<Contact />
		<style jsx global>{`
			body {
				background-color: #152c87 !important;
			}
		`}</style>
	</div>
);

export default Page;
