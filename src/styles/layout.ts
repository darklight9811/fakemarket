import styled, { css } from "styled-components";

type BoxProps = Partial<{
	container: boolean;
	vertical: "top" | "center" | "bottom";
	horizontal: "left" | "center" | "right" | "space-around" | "space-between" | "space-evenly";
	itemMargin: number | string;
}>

export const Box = styled.div<BoxProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: 100%;

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
`

export const Division = styled.hr<{ color?: string }>`
	
`