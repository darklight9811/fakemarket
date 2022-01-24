// Packages
import styled from "styled-components";

// Utils
import { mapColor } from "../../../utils/theme";

export const Container = styled.button`
	background-color: transparent;

	border: 1px solid ${mapColor("contrast")};
	border-radius: 16px;

	padding: 4px 8px;
`