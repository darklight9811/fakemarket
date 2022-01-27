import styled from "styled-components"
import { mapColor } from "../../../utils/theme"

export const Container = styled.label<{checked?: boolean}>`
	position: relative;
	display: inline-block;

	width: 34px;
	height: 20px;

	&:hover {
		cursor: pointer;
	}

	&:hover:after {
		right: ${({ checked }) => checked ? "23%" : "-17%"};
	}

	& > input {
		display: none;
	}

	&:before {
		content: "";
		display: inline-block;

		width: 34px;
		height: 20px;

		background-color: ${({ theme, checked }) => mapColor(checked ? "primary" : "#CBD5E0", theme)};
		border-radius: 136px;
	}

	&:after {
		content: "";
		display: inline-block;
		position: absolute;

		width: 16px;
		height: 16px;

		background-color: ${({ theme }) => mapColor("light", theme)};
		border-radius: 50%;

		top: 50%;
		right: ${({ checked }) => checked ? "25%":"-18%"};
		transform: translate(-50%, -50%);

		transition-property: right, background-color;
		transition-duration: .2s;
	}
`