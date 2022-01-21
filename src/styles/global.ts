import { createGlobalStyle } from "styled-components"
import { mapColor } from "../utils/theme"

const GlobalStyle = createGlobalStyle`${({ theme }) => ({
	"*": {
		fontFamily: "'Oswald', sans-serif",
	},
	body: {
		margin: 0,
		backgroundColor: mapColor("background")({ theme }),
	},
	p: {
		margin: "8px 0",
	}
})}`

export default GlobalStyle