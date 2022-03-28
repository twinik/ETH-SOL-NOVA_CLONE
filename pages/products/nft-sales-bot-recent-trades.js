import React from "react";
import {
	Intro,
	DiscordSales,
	PremiereToolbox,
	OperateSystem,
	Twitter,
	Contact
} from "../../components/Products/SalesBot";
const Page = () => (
	<div>
		<Intro />
		<DiscordSales />
		<Twitter />
		<PremiereToolbox />
		<OperateSystem />
		<Contact />
		<style jsx global>{`
			body {
				background-color: #543fd3 !important;
			}
		`}</style>
	</div>
);

export default Page;
