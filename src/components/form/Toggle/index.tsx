// Component
import { useEffect, useState } from "react"
import * as styled from "./styled"
import { ToggleProps } from "./types"

const Toggle = (props: ToggleProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [checked, setChecked] = useState(props.value)

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	useEffect(() => { if (checked !== props.value) setChecked(props.value) }, [checked, props.value])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container htmlFor={props.name} checked={checked}>
			<input
				id={props.name}
				name={props.name}
				checked={checked}
				type="checkbox"
				onChange={() => setChecked(last => { props.onChange?.(!last); return !last })}
			/>
		</styled.Container>
	)
}

export default Toggle