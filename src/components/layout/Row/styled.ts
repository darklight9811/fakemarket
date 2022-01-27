// Packages
import styled, { css } from "styled-components"

// Styles
import { backgroundOffset, fadeIn } from "../../../styles/animations"

// Utils
import { mapColor } from "../../../utils/theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.div`
	animation: ${fadeIn} .5s;
	background-color: ${mapColor("background")};
	transition: transform .3s ease, box-shadow .4s ease;
	
	width: 100%;

	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 0 0 8px 8px;
	
	& > div:nth-child(2) {
		width: 100%;
	} 

	&:hover {
		cursor: pointer;
		transform: scale(1.03);
		box-shadow: 0px 2px 4px rgba(0,0,0,0.12);
	}
`

// -------------------------------------------------
// Image
// -------------------------------------------------

export const Image = styled.div<{skeleton?: boolean, src: string}>`
	background-size: ${({ skeleton }) => skeleton ? "1100% 100%": "contain"};
	background-position: center;
	background-repeat: no-repeat;
	${({ skeleton }) => skeleton && css`animation: ${backgroundOffset} 1.5s linear infinite;`}
	background-image: ${({ skeleton, src, theme }) => skeleton ?
		`linear-gradient(to right, transparent, ${mapColor("background", theme)}, transparent)`:
		`url(${src})`};

	padding: ${({ skeleton }) => skeleton ? "156px 110px" : 0};

	width: ${({ skeleton }) => skeleton ? 0 : 45}px;
	height: ${({ skeleton }) => skeleton ? 0 : 45}px;
`

// -------------------------------------------------
// Price
// -------------------------------------------------

export const Price = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	margin-top: 15px;
`