// Packages
import Link from "next/link"
import Image from "next/image"

// Components
import Toggle from "../../components/form/Toggle"

// Component
import { Container } from "./styled"
import { NavbarProps } from "./types"
import navbarItems from "../../resources/navbar"
import useConfig from "../../store/models/config"
import { useMemo } from "react"

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
		if (mode === "default") return window.matchMedia('(prefers-color-scheme: dark)').matches

		return mode === "dark"
	}, [mode])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Container>
				<Link href="/">
					<a>
						<Image src="/favicon.svg" alt="fake market logo" width={28} height={28} /> FakeMarket
					</a>
				</Link>

				{navbarItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}

				<Toggle value={isToggled} onChange={value => setMode(value ? "dark" : "light")} />
			</Container>
			{props.children}
		</>
	)
}

export default Navbar