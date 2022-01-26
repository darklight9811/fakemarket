// Packages
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

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
import User from "../../components/general/User"
import useAuth from "../../store/models/auth"

const Navbar = (props: NavbarProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [user] = useAuth("data")
	const [mode, setMode] = useConfig("mode", "setMode")

	// states
	const [isToggled, setToggled] = useState(false)

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	useEffect(() => {
		if (mode === "default" && typeof window !== "undefined") setToggled(window.matchMedia('(prefers-color-scheme: dark)').matches)
		else setToggled(mode === "dark")
	}, [mode])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<styled.Container>
				<Box container vertical="center" horizontal="space-between">
					<Link href="/" passHref>
						<styled.Link>
							<Image src={mode === "dark" ? "/logo-white.svg" : "/logo.svg"} alt="fake market logo" width={14} height={14} /> FakeMarket
						</styled.Link>
					</Link>

					{navbarItems.map(item => <Link key={item.href} href={item.href} passHref><styled.Navlink>{item.label}</styled.Navlink></Link>)}

					<Box vertical="center" horizontal="space-around" itemMargin={"0 10px"}>
						<Toggle name="navbar" value={isToggled} onChange={value => setMode(value ? "dark" : "light")} />

						<Input placeholder="Search artwork" icon="search" />

						<User user={user} showName />
					</Box>
				</Box>
			</styled.Container>

			{props.children}
		</>
	)
}

export default Navbar