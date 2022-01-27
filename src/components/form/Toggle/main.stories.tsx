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
		onChange: {
			description: "Callback when the user clicks the toggle",
			type: "function",
		},
		value: {
			description: "Initial value given to the toggle",
		},
	},
	args: {
		name: "test",
	},
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Toggle = (props) => <ToggleComponent {...props} />