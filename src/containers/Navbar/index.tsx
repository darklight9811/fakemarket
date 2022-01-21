// Packages
import Link from "next/link"
import Image from "next/image"

// Components
import Toggle from "../../components/form/Toggle"

// Component
import { Container } from "./styled"
import { NavbarProps } from "./types"
import navbarItems from "../../resources/navbar"

const Navbar = (props: NavbarProps) => {
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

				<Toggle />
			</Container>
			{props.children}
		</>
	)
}

export default Navbar