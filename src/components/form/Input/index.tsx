// Packages
import { useRef } from "react"
import Icon from "../../general/Icon"

// Component
import * as styled from "./styled"
import { InputProps } from "./types"

const Input = (props: InputProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// refs
	const timer = useRef<NodeJS.Timeout>()

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onChange = (value: string) => {
		if (!props.onChange) return

		if (!props.debounce) return props.onChange(value)

		if (timer.current) {
			clearTimeout(timer.current)
			timer.current = undefined
		}

		timer.current = setTimeout(() => props.onChange(value), props.debounce * 1000)
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			{props.icon && <Icon name={props.icon} />}
			<styled.Input {...props} onChange={(e) => onChange(e.target.value)} />
		</styled.Container>
	)
}

export default Input