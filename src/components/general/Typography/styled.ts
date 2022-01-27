// Packages
import styled from "styled-components";

// Theme
import { backgroundOffset } from "../../../styles/animations";

// Utils
import { mapColor } from "../../../utils/theme";
import { TypographyProps } from "./types";

export const Font = styled.span<TypographyProps>`
	${({ bold }) => bold ? `font-weight: ${typeof bold === "boolean" ? "bold" : bold};` : ""}
	${({ fs: size }) => size && `font-size: ${typeof size === "number" ? `${size}px`:size};`}
`

export const Loading = styled.span<{ loading?: boolean }>`
	background-size: 1100% 100%;
	background-image: linear-gradient(to right, transparent, ${mapColor("background")}, transparent);
	animation: ${backgroundOffset} 1.5s linear infinite;

	padding: ${({ loading }) => loading ? "156px 110px" : 0};

	width: 100%;
	height: 1em;
	display: inline-block;
`