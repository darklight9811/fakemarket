// Component
import * as styled from "./styled"
import { ButtonProps } from "./types"

const Button = (props: ButtonProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container {...props} />
	)
}

export default Button