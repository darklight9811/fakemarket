// Packages
import styled from "styled-components"

// Utils
import { mapColor, shadeColor } from "../../../utils/theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.button<{ color?: "primary" | "danger" | "success", width?: string }>`
	transition: background-color .2s ease, box-shadow .2s ease;
	background-color: ${({ color }) => color ? mapColor(color):"transparent"};

	color: ${({ color }) => mapColor(color ? "light" : "contrast")};
	
	svg path {
		fill: ${({ color }) => mapColor(color ? "light" : "contrast")};
	}

	border: 1px solid ${({ color, theme }) => color ? "transparent":mapColor("contrast", theme)};
	border-radius: ${({ color }) => color ? "10px":"16px"};

	${({ width }) => width ? `width: ${width}`: ""};
	padding: ${({ color }) => color ? "8px 24px":"4px 8px"};

	&:hover {
		cursor: pointer;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
		background-color: ${({ color, theme }) => color ? shadeColor(mapColor(color, theme), 20):"transparent"};
	}
`