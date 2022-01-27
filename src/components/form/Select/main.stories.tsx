// Component
import Component from "."
import { Story } from "../../../utils/types"

// Utils
import icons from "../../general/Icon/icons"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Select",
	component: Component,
	argTypes: {
		name: {
			description: "Value to be used with the label for and form keyword",
			type: "string",
		},
		onChange: {
			description: "Callback when the user changes the input select",
			type: "function",
		},
		placeholder: {
			description: "Text to be displayed when there is no value in the select",
			type: "string",
		},
		icon: {
			description: "Icon to be used prefixing the form",
			options: Object.keys(icons),
			control: {
				type: "select",
			},
		},
	},
	args: {
		name: "test",
		placeholder: "Test select",
		icon: "search",
	},
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Select = (props) => (
	<Component {...props}>
		<option>Test</option>
		<option>Test 2</option>
		<option>Test 3</option>
	</Component>
)