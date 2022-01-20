// Packages
import { ThemeProvider } from "styled-components"

// Theme
import defaultTheme from "../styles/theme"
import GlobalStyle from "../styles/global"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
