import React from "react";
import {
	Intro,
	Composable,
	Mint,
	OperateSystem,
	Contact
} from "../../components/Products/NovapassVerification";

const Page = () => (
	<div>
		<Intro />
		<Composable />
		<Mint />
		<OperateSystem />
		<Contact />

		<style jsx global>{`
			body {
				background-color: #000c8e !important;
			}
		`}</style>
	</div>
);

export default Page;
