// Component
import Component from "."
import { Story } from "../../../utils/types"
import icons from "../../general/Icon/icons"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Input",
	component: Component,
	argTypes: {
		name: {
			description: "Value to be used with the label for and form keyword",
			type: "string"
		},
		onChange: {
			description: "Callback when the user changes the input value",
			type: "function"
		},
		placeholder: {
			description: "Text to be displayed when there is no value in the input",
			type: "string"
		},
		icon: {
			description: "Icon to be used prefixing the form",
			options: Object.keys(icons),
			control: {
				type: "select"
			}
		}
	},
	args: {
		name: "test",
		placeholder: "Test input",
		icon: "search",
	}
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Input = (props) => <Component {...props} />