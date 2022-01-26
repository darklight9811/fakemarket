// Packages
import Icon from "../../general/Icon"

// Component
import * as styled from "./styled"
import { InputProps } from "./types"

const Input = (props: InputProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			{props.icon && <Icon name={props.icon} />}
			<styled.Input {...props} />
		</styled.Container>
	)
}

export default Input