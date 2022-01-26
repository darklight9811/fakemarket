import { createGlobalStyle } from "styled-components"
import { mapColor } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Oswald', sans-serif;
	}

	body, #root {
		margin: 0;
		background-color: ${mapColor("background")};
		color: ${mapColor("contrast")};
		transition-property: background-color, color;
		transition-duration: .2s;
	}

	p: {
		margin: 8px 0
	}
`;

export default GlobalStyle