import React, { useState } from "react";
import ownStyles from "./Tab.module.css";
import { useTransition, animated, config } from "react-spring";
import { Accordion, AccordionProps, createStyles } from "@mantine/core";

export default function index({ data }) {
	const [activeTab, setActiveTab] = useState(0);
	const FadeIn = useTransition(activeTab, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		config: { ...config.molasses, duration: 500 }
	});

	const useStyles = createStyles((theme, _params, getRef) => ({
		icon: { ref: getRef("icon") },

		control: {
			ref: getRef("control"),
			border: 0,
			color: theme.colorScheme === "dark" ? theme.white : theme.black,
			"&:hover": {
				backgroundColor: "#3e2bc5",
				opacity: 1
			},
			color: "white",
			fontFamily: "poppins",
			fontWeight: 400,
			cursor: "pointer",
			borderRadius: "6px",
			padding: "25px 30px 20px 30px",
			border: "2px solid rgba(7,188,255,.3)",
			backgroundColor: "#3e2bc5",
			"&:@media (max-width: 768px)": {
				color: "red"
			}
		},

		item: {
			borderBottom: 0,
			overflow: "hidden",
			transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
			borderRadius: theme.radius.sm,
			marginBottom: "1rem"
		},

		itemOpened: {
			border: "2px solid #07bcff",
			backgroundColor: "#3e2bc5",
			borderRadius: "6px",
			[`& .${getRef("control")}`]: {
				opacity: 1,
				border: "none",
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				color: "#07bcff",
				fontWeight: 300,
				paddingBottom: 10
			},

			[`& .${getRef("icon")}`]: {
				transform: "rotate(45deg)"
			}
		},

		content: {
			paddingLeft: 0,
			color: "#e4e1ff",
			padding: "0 19px 20px 19px",
			fontWeight: 300,
			lineHeight: "26.04px",
			fontFamily: "poppins",
			fontSize: ".9em",
			textAlign: "left"
		}
	}));

	const { classes } = useStyles();

	return (
		<div>
			<div className={ownStyles["tab-container-button"]}>
				{data.map(({ title }, index) => {
					return (
						<button
							className={
								activeTab === index
									? `${ownStyles["tab-button"]} ${ownStyles["tab-button-active"]}`
									: ownStyles["tab-button"]
							}
							onClick={() => {
								setActiveTab(index);
							}}
							key={index}
						>
							{title}
						</button>
					);
				})}
			</div>
			{FadeIn((animStyle, item) => (
				<animated.div style={{ ...animStyle }}>
					<Accordion
						style={{ marginTop: "2rem" }}
						iconPosition="right"
						classNames={classes}
						transitionDuration={500}
					>
						{data[item].content.map(
							({ question, answer }, index) => {
								const answers = answer.split("\n");

								return (
									<Accordion.Item
										key={answer}
										label={question}
										style={{}}
									>
										{answers.map((answer, index) => {
											return <p key={index}>{answer}</p>;
										})}
									</Accordion.Item>
								);
							}
						)}
					</Accordion>
				</animated.div>
			))}
		</div>
	);
}
