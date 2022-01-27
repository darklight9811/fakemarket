// Packages
import { useEffect, useRef, useState } from "react"

// Components
import Icon from "../../general/Icon"

// Component
import * as styled from "./styled"
import { InputProps } from "./types"

const Input = (props: InputProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [value, setvalue] = useState(props.value || "")

	// refs
	const timer = useRef<NodeJS.Timeout>()

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		setvalue(props.value)
	}, [props.value])

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

		setvalue(value)

		timer.current = setTimeout(() => props.onChange(value), props.debounce * 1000)
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			{props.icon && <Icon name={props.icon} />}
			<styled.Input {...props} value={value} onChange={(e) => onChange(e.target.value)} />
		</styled.Container>
	)
}

export default Input