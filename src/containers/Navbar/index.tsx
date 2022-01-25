// Packages
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"

// Components
import Toggle from "../../components/form/Toggle"

// Component
import * as styled from "./styled"
import { NavbarProps } from "./types"
import navbarItems from "../../resources/navbar"

// Store
import useConfig from "../../store/models/config"

// Styles
import { Box } from "../../styles/layout"

const Navbar = (props: NavbarProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [mode, setMode] = useConfig("mode", "setMode")

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const isToggled = useMemo(() => {
		if (mode === "default" && typeof window !== "undefined") return window.matchMedia('(prefers-color-scheme: dark)').matches

		return mode === "dark"
	}, [mode])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<styled.Container>
				<Box container vertical="center">
					<styled.Link href="/">
						<a>
							<Image src="/logo.svg" alt="fake market logo" width={28} height={28} /> FakeMarket
						</a>
					</styled.Link>

					{navbarItems.map(item => <styled.Link key={item.href} href={item.href}>{item.label}</styled.Link>)}

					<Toggle value={isToggled} onChange={value => setMode(value ? "dark" : "light")} />
				</Box>
			</styled.Container>

			{props.children}
		</>
	)
}

export default Navbar