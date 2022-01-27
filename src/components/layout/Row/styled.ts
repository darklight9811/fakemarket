// Packages
import styled, { css } from "styled-components"

// Styles
import { backgroundOffset, fadeIn } from "../../../styles/animations"

// Utils
import { mapColor } from "../../../utils/theme"

export const Container = styled.div`
	background-color: ${mapColor("background")};
	animation: ${fadeIn} .5s;
	
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
	}
`

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

export const Price = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	margin-top: 15px;
`