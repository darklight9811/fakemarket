// Packages
import NextLink from "next/link"
import styled from "styled-components"

// Utils
import { mapColor } from "../../utils/theme"

export const Container = styled.nav`
	height: 70px;

	margin-bottom: 40px;

	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);

	background-color: ${({ theme }) => theme.mode === "dark" ? theme.colors.darkAlt : theme.colors.background}
`

export const Link = styled(NextLink)`
	color: ${mapColor("contrast")};
`