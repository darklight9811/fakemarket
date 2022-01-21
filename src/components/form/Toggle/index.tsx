// Component
import { ToggleProps } from "./types"

const Toggle = (props: ToggleProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<input checked={props.value} type="checkbox" onChange={(event) => props.onChange && props.onChange(event.target.checked)} />
	)
}

export default Toggle