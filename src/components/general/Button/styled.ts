// Packages
import styled from "styled-components";

// Utils
import { mapColor } from "../../../utils/theme";

export const Container = styled.button<{ color?: "primary" | "danger" | "success", width?: string }>`
	background-color: ${({ color }) => color ? mapColor(color):"transparent"};

	color: ${({ color }) => mapColor(color ? "light" : "contrast")};

	border: 1px solid ${({ color, theme }) => color ? "transparent":mapColor("contrast", theme)};
	border-radius: ${({ color }) => color ? "10px":"16px"};

	${({ width }) => width ? `width: ${width}`: ""};
	padding: ${({ color }) => color ? "8px 24px":"4px 8px"};

	&:hover {
		cursor: pointer;
	}
`