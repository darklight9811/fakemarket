// Component
import Component from "."
import { Story } from "../../../utils/types"
import icons from "./icons"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Icon",
	component: Component,
	argTypes: {
		name: {
			description: "Name of the icon to be used",
			options: Object.keys(icons),
			control: {
				type: "select",
			},
		},
	},
	args: {
		name: "search",
	},
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Icon = (props) => <Component {...props} />