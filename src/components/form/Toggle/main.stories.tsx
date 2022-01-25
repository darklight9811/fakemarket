// Component
import ToggleComponent from "."
import { Story } from "../../../utils/types"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Toggle",
	component: ToggleComponent,
	argTypes: {
		children: {
			description: "The button's content",
			type: "string",
		},
		onClick: {
			description: "Callback when the user clicks the button",
			type: "function"
		}
	},
	args: {
		children: "Hi I\'m a button",
	}
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Toggle = (props) => <ToggleComponent {...props} />