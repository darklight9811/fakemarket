// Packages
import { useMemo } from "react"
import { ThemeProvider } from "styled-components"

// Style
import GlobalStyle from "../../../styles/global"
import defaultTheme, { darkTheme } from "../../../styles/theme"

// Utils
import { deepMerge } from "../../../utils/object"

// Component
import { ProviderProps } from "./types"

const Provider = (props: ProviderProps) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const theme = useMemo(() => {
		return props.dark ? deepMerge(defaultTheme, darkTheme) : defaultTheme
	}, [props.dark])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{props.children}
		</ThemeProvider>
	)
}

export default Provider