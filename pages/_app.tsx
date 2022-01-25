// Packages
import { ThemeProvider } from "styled-components"

// Theme
import defaultTheme, { darkTheme } from "../src/styles/theme"
import GlobalStyle from "../src/styles/global"

// Store
import useConfig from "../src/store/models/config"

// Containers
import Navbar from "../src/containers/Navbar"
import { useCallback, useEffect, useMemo, useState } from "react"
import { deepMerge } from "../src/utils/object"

function MyApp({ Component, pageProps }) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [mode, setMode] = useConfig("mode", "setMode")

	// state
	const [themeType, setThemeType] = useState("light")

	// -------------------------------------------------
	// Callback
	// -------------------------------------------------

	const updateMode = useCallback(({ matches }: { matches: boolean }) => {
		setThemeType(matches ? "dark" : "light")
	}, [])

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (mode !== "default") return setThemeType(mode)

		if (window.matchMedia) {
			setThemeType(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")

			window.matchMedia('(prefers-color-scheme: dark').addEventListener("change", updateMode)

			return () => {
				window.matchMedia('(prefers-color-scheme: dark').removeEventListener("change", updateMode)
			}
		}
	}, [mode, updateMode])

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const theme = useMemo(() => {
		return themeType === "light" ? defaultTheme : deepMerge(defaultTheme, darkTheme)
	}, [themeType])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Navbar>
				<Component {...pageProps} />
			</Navbar>
		</ThemeProvider>
	)
}

export default MyApp