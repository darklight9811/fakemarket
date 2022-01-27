import styled from "styled-components"
import { mapColor } from "../../../utils/theme"

// -------------------------------------------------
// Container
// -------------------------------------------------

export const Container = styled.label`
	transition: box-shadow .4s ease;
	background-color: ${mapColor("backgroundAlt")};

	padding: 10px 20px;
	border-radius: 10px;

	font-size: 14px;

	display: flex;
	align-items: center;

	svg {
		margin-right: 10px;
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.12);
	}
`

// -------------------------------------------------
// Select
// -------------------------------------------------

export const Select = styled.select`
	color: ${mapColor("contrast")};
	border: transparent;
	background-color: transparent;

	width: 100%;

	&:hover {
		cursor: pointer;
	}
`