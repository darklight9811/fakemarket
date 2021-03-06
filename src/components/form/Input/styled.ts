// Packages
import styled from "styled-components"

// Utils
import { mapColor } from "../../../utils/theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.label`
	background-color: ${mapColor("backgroundAlt")};

	padding: 10px 20px;
	border-radius: 10px;

	font-size: 14px;

	display: flex;
	align-items: center;

	svg {
		margin-right: 10px;
	}
`

// -------------------------------------------------
// Input
// -------------------------------------------------

export const Input = styled.input`
	color: ${mapColor("contrast")};
	border: transparent;
	background-color: transparent;

	width: 100%;
`