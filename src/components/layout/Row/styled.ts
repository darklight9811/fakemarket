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
	background-color: ${mapColor("backgroundAlt")};
	border-bottom: 5px solid ${mapColor("primary")};
	transition: transform .3s ease, box-shadow .4s ease;
	
	width: 100%;

	padding: 20px;

	z-index: 0;
	display: flex;
	overflow: hidden;
	position: relative;
	align-items: center;
	flex-direction: column;

	border-radius: 8px;
	
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

	margin-right: 15px;
	padding: ${({ skeleton }) => skeleton ? "23px 23px" : 0};

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

export const Backdrop = styled.img`
	z-index: -1;
	opacity: 0.05;

	position: absolute;
	top: -5%;
	left: 5%;

	width: 100px;
`