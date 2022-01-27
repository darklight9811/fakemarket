import { createGlobalStyle } from "styled-components"
import { mapColor } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Oswald', sans-serif;
	}

	body {
		margin: 0;
		background-color: ${mapColor("background")};
		color: ${mapColor("contrast")};
		transition-property: background-color, color;
		transition-duration: .2s;
	}

	p: {
		margin: 8px 0
	}

	svg path {
		fill: ${mapColor("contrast")};
	}
`;

export default GlobalStyle