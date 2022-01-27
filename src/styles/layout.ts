import styled, { css } from "styled-components"
import { marginProp, paddingProp } from "../types/layout"
import { mapColor, margin, padding } from "../utils/theme"
import defaultTheme from "./theme"

type BoxProps = Partial<{
	round: number | string;
	background: keyof typeof defaultTheme["colors"];
	container: boolean;
	direction: "row" | "column";
	vertical: "top" | "center" | "bottom";
	horizontal: "left" | "center" | "right" | "space-around" | "space-between" | "space-evenly";
	itemMargin: number | string;
	fill: boolean;
}> & marginProp & paddingProp

export const Box = styled.div<BoxProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	flex-wrap: wrap;
	height: 100%;
	
	${({ fill }) => fill && css`width: 100%;`}

	${({ itemMargin }) => itemMargin ? css`
		& > * {
			margin: ${itemMargin};
		}
	` : ""}

	${({ vertical }) => vertical ? css`align-items: ${vertical};`:""}
	${({ horizontal }) => horizontal ? css`justify-content: ${horizontal};`:""}

	${({ container }) => container ? css`
		margin: auto;

		@media screen and (max-width: 576px) {
			width: 100%;
		}
		@media screen and (min-width: 576px) and (max-width: 768px) {
			width: 540px;
		}
		@media screen and (min-width: 768px) and (max-width: 992px) {
			width: 720px;
		}
		@media screen and (min-width: 992px) and (max-width: 1200px) {
			width: 960px;
		}
		@media screen and (min-width: 1200px) and (max-width: 1400px) {
			width: 1140px;
		}
		@media screen and (min-width: 1400px) {
			width: 1320px;
		}
	` : ""};

	${({ background, theme }) => background ? css`background-color: ${mapColor(background, theme)};`:""}

	${({ round }) => round ? `border-radius: ${round};`: ""}

	${margin}
	${padding}
`


export const Division = styled.hr<marginProp & paddingProp>`
	${margin}
	${padding}
`