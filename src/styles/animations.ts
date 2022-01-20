import { keyframes } from "styled-components";

export const backgroundOffset = keyframes`
	from {
		background-position-x: 0;
	}
	to {
		background-position-x: 14em;
	}
`

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translate(0, -20px);
	}
`