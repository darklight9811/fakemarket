// Component
import ButtonComponent from "."
import { Story } from "../../../utils/types"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Button",
	component: ButtonComponent,
	argTypes: {
		children: {
			description: "The button's content",
			type: "string",
		},
		onClick: {
			description: "Callback when the user clicks the button",
			type: "function",
		},
	},
	args: {
		children: "Hi I'm a button",
	},
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Button = (props) => <ButtonComponent {...props} />