// Packages
import styled from "styled-components"

// Styles
import { backgroundOffset, fadeIn } from "../../../styles/animations"

// Utils
import { mapColor } from "../../../utils/theme"

export const Container = styled.div`
	background-color: ${mapColor("backgroundAlt")};
	animation: ${fadeIn} .5s;
	
	width: 258;
	height: 488;

	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-items: center;
`

export const Image = styled.img<{skeleton?: boolean}>`
	background-image: linear-gradient(to right, transparent 0%, ${mapColor("background")} 50%, transparent 100%);
	animation: ${backgroundOffset} 2s linear infinite;

	padding: ${({ skeleton }) => skeleton ? "156px 110px" : 0};

	width: ${({ skeleton }) => skeleton ? 0 : 220}px;
	height: ${({ skeleton }) => skeleton ? 0 : 312}px;
`