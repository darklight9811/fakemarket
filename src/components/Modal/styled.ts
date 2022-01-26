import styled from "styled-components"
import { mapColor } from "../../utils/theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.div<{ open: boolean}>`
	display: flex;
	align-items: center;
	justify-content: center;

	position: fixed;
	z-index: 1000;

	width: 100%;
	height: 100%;

	top: 0;
	left: 0;

	opacity: ${({ open }) => open ? 1:0};
	transition: opacity .2s ease;
	${({ open }) => open ? "":"pointer-events: none"};
`

// -------------------------------------------------
// Background
// -------------------------------------------------

export const Background = styled.div`
	position: fixed;
	
	width: 100%;
	height: 100%;
	
	top: 0;
	left: 0;
	
	background-color: rgba(0,0,0, 0.8);
`

// -------------------------------------------------
// Modal
// -------------------------------------------------

export const Modal = styled.div`
	background-color: ${mapColor("backgroundAlt")};

	position: absolute;
	display: inline-block;

	margin: auto;
	padding: 2rem;

	border-radius: .28571429rem;

	width: calc(100% - 32px);
	max-width: 420px;

	transform: translate(0, -50px);
	transition: transform .3s ease;

	svg.border {
		position: absolute;

		width: 150px;
		min-width: 100px;
	}

	svg.border:nth-child(1) {
		top: -10px;
		left: -10px;
	}

	svg.border:nth-child(4) {
		bottom: -10px;
		right: -10px;

		transform: rotate(180deg);
	}

	svg * {
		stroke: ${mapColor("background")};
	}

	div {
		animation: fadein .2s ease;
	}
`

// -------------------------------------------------
// Button
// -------------------------------------------------

export const Button = styled.button`
	background: transparent;
	border: none;

	color: ${mapColor("contrast")};
	transition: color .2s ease;
	
	float: right;

	padding: 0;
	margin: 0;

	position: absolute;

	right: 40px;
	top: 30px;
	font-size: 20px;

	&:hover svg {
		filter: drop-shadow(0 0 2px ${mapColor("contrast")});
	}

	&:hover {
		cursor: pointer;
	}

	svg {
		width: 25px;
		
		transition: filter .2s ease;

		* {
			stroke: ${mapColor("contrast")};
		}
	}
`

// -------------------------------------------------
// Title
// -------------------------------------------------

export const Title = styled.h2`
	font-weight: 700;
	line-height: 1.28571429em;
	font-size: 1.5rem;

	margin: 0;
`

// -------------------------------------------------
// Subtitle
// -------------------------------------------------

export const Subtitle = styled.h3`
	font-weight: 700;
	line-height: 1.28571429em;
	font-size: 1rem;

	margin-bottom: 0;
`

// -------------------------------------------------
// Body
// -------------------------------------------------

export const Body = styled.div`
	margin-top: 20px;
`