import styled from "styled-components";
import { mapColor } from "../../../utils/theme";

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

	&:hover {
		cursor: pointer;
	}
`

export const Select = styled.select`
	color: ${mapColor("contrast")};
	border: transparent;
	background-color: transparent;

	width: 100%;

	&:hover {
		cursor: pointer;
	}
`