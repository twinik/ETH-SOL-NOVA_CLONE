import React from "react";
import {
	Intro,
	Granular,
	RarityEngine,
	OperateSystem,
	Contact
} from "../../components/Products/RarityRanking";
const Page = () => (
	<div>
		<Intro />
		<RarityEngine />
		<Granular />
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
