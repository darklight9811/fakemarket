// Packages
import styled from "styled-components"

// Utils
import { mapColor } from "../../../utils/theme"

export const Container = styled.nav`
	height: 70px;
	position: relative;

	margin-bottom: 40px;

	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);

	background-color: ${({ theme }) => theme.mode === "dark" ? "#212121" : theme.colors.background};
`

export const Link = styled.a`
	color: ${({ theme }) => mapColor(theme.mode === "light" ? "primary" : "contrast")};
	text-decoration: none;

	font-size: 18px;

	& img {
		width: 14px;
	}
`

export const Navlink = styled.a`
	color: ${mapColor("contrast")};
	text-decoration: none;

	font-size: 18px;

	& img {
		width: 14px;
	}

	&:hover:before {
		width: 70px;
	}

	&:before {
		transition: width .3s ease;

		content: "";

		width: 55px;
		height: 3px;

		position: absolute;

		background-color: ${({ theme }) => mapColor(theme.mode === "light" ? "primary" : "contrast")};

		bottom: 0;
	}
`