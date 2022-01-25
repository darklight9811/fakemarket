import { keyframes } from "styled-components"

export const backgroundOffset = keyframes`
	0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 100% 0%;
	}
`

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translate(0, -20px);
	}
`