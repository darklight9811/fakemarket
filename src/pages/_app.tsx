// Packages
import { ThemeProvider } from "styled-components"

// Theme
import defaultTheme from "../styles/theme"
import GlobalStyle from "../styles/global"
import Navbar from "../containers/Navbar"

function MyApp({ Component, pageProps }) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Navbar>
				<Component {...pageProps} />
			</Navbar>
		</ThemeProvider>
	)
}

export default MyApp
