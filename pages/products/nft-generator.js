import React from "react";
import {
	Intro,
	Mint,
	Composable,
	OperateSystem,
	Rarity,
	Contact
} from "../../components/Products/NftGenerator";
const Page = () => (
	<div>
		<Intro />
		<Mint />
		<Composable />
		<OperateSystem />
		<Rarity />
		<Contact />
		<style jsx global>{`
			body {
				background-color: #152c87 !important;
			}
		`}</style>
	</div>
);

export default Page;
