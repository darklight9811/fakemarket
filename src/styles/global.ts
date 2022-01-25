import { createGlobalStyle } from "styled-components"
import { mapColor } from "../utils/theme"

const GlobalStyle = createGlobalStyle`${({ theme }) => ({
	"*": {
		fontFamily: "'Oswald', sans-serif",
	},
	body: {
		margin: 0,
		backgroundColor: mapColor("background", theme),
		color: mapColor("contrast", theme),
		transitionProperty: "background-color, color",
		transitionDuration: ".2s",
	},
	p: {
		margin: "8px 0",
	}
})}`

export default GlobalStyle