import React from "react";
import {
	Intro,
	Mint,
	Rarity,
	Composable,
	OperateSystem,
	Contact
} from "../../components/Products/BotProtection";

const Page = () => (
	<div>
		<Intro />
		<Mint />
		<Rarity />
		<Composable />
		<OperateSystem />
		<Contact />
		<style jsx global>{`
			body {
				background-color: #1f39c3 !important;
			}
		`}</style>
	</div>
);

export default Page;
