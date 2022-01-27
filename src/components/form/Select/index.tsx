// Packages
import Icon from "../../general/Icon"

// Component
import * as styled from "./styled"
import { InputProps } from "./types"

const Select = ({ onChange, ...props }: InputProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			{props.icon && <Icon name={props.icon} />}
			<styled.Select {...props} onChange={e => onChange?.(e.target.value)} />
		</styled.Container>
	)
}

export default Select