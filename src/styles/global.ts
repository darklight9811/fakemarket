import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`${() => ({
	"*": {
		fontFamily: "'Oswald', sans-serif",
	},
	body: {
		margin: 0,
	},
	p: {
		margin: "8px 0",
	}
})}`

export default GlobalStyle