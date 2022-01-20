// Packages
import styled from "styled-components";

// Theme
import { backgroundOffset } from "../../../styles/animations";

// Utils
import { mapColor } from "../../../utils/theme";

export const Loading = styled.p<{ loading?: boolean }>`
	background-image: linear-gradient(to right, transparent 0%, ${mapColor("background")} 50%, transparent 100%);
	animation: ${backgroundOffset} 2s linear infinite;

	padding: ${({ loading }) => loading ? "156px 110px" : 0};

	width: 100%;
	height: 1em;
`