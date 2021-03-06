// Packages
import { useCallback, useEffect, useState } from "react"

// Store
import useConfig from "../store/models/config"

// Components
import Modal from "../components/layout/Modal"
import Navbar from "../components/layout/Navbar"
import Provider from "../components/general/Provider"

function MyApp({ Component, pageProps }) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [mode] = useConfig("mode")

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
			setThemeType(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

			window.matchMedia("(prefers-color-scheme: dark").addEventListener("change", updateMode)

			return () => {
				window.matchMedia("(prefers-color-scheme: dark").removeEventListener("change", updateMode)
			}
		}
	}, [mode, updateMode])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Provider dark={themeType === "dark"}>
			<Modal.Provider>
				<Navbar>
					<Component {...pageProps} />
				</Navbar>
			</Modal.Provider>
		</Provider>
	)
}

export default MyApp
