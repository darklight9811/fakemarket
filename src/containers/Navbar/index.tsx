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
import Input from "../../components/form/Input"

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
				<Box container vertical="center" horizontal="space-around">
					<Link href="/" passHref>
						<styled.Link>
							<Image src="/logo.svg" alt="fake market logo" width={14} height={14} /> FakeMarket
						</styled.Link>
					</Link>

					{navbarItems.map(item => <Link key={item.href} href={item.href} passHref><styled.Link>{item.label}</styled.Link></Link>)}

					<div>
						<Toggle name="navbar" value={isToggled} onChange={value => setMode(value ? "dark" : "light")} />
						<Input placeholder="Search artwork" icon="search" />
					</div>
				</Box>
			</styled.Container>

			{props.children}
		</>
	)
}

export default Navbar