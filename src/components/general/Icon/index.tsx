// Packages
import { createElement } from "react"

// Component
import icons from "./icons"
import { IconProps } from "./types"

const Icon = (props: IconProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return createElement(icons[props.name])
}

export default Icon