import React from "react";
import { ContainerSection } from "../../../Containers";
import { LineTitleTertiary } from "../../../Titles";
import { SecondaryTitle } from "../../../Titles";
import { TertiaryParagraph } from "../../../Paragraphs";
import { IconTextTertiary } from "../../../General";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ownStyles from "./Contact.module.css";

export default function index() {
	return (
		<ContainerSection
			className={ownStyles["container"]}
			backgroundColor={"#5D46E8"}
		>
			<div className={ownStyles["content"]}>
				<LineTitleTertiary
					classes={ownStyles["line-title"]}
					text={"CONTACT"}
				/>
				<SecondaryTitle
					style={{ textAlign: "left" }}
					text={"Get In Touch"}
				/>
				<TertiaryParagraph
					content={
						"Any questions? Reach out to us and we’ll get back to you shortly."
					}
				/>
				<a href="" className={ownStyles["contactLink"]}>
					<IconTextTertiary
						icon={faEnvelope}
						text={"contact@novalaunch.art"}
						className={ownStyles["icon-text-sec"]}
					/>
				</a>
				<a href="" className={ownStyles["contactLink"]}>
					<IconTextTertiary
						icon={faDiscord}
						text={"Join: Nova Launch Discord"}
						className={ownStyles["icon-text-sec"]}
					/>
				</a>
				<a href="" className={ownStyles["contactLink"]}>
					<IconTextTertiary
						icon={faTwitter}
						text={"Twitter: @nova_launch"}
						className={ownStyles["icon-text-sec"]}
					/>
				</a>
			</div>
			<div className={ownStyles["image"]}>
				<Image
					width={385}
					height={201}
					loading="eager"
					objectFit="contain"
					layout="responsive"
					src={"/assets/gfx-q.png"}
				/>
			</div>
		</ContainerSection>
	);
}
