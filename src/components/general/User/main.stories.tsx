// Component
import Component from "."
import { Story } from "../../../utils/types"
import img from "../../../../public/user.png"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "User",
	component: Component,
	argTypes: {
		onClick: {
			description: "Callback when the user clicks the user component",
			type: "function",
		},
	},
	args: {
		user: {
			id: "isajd12easd231321",
			name: "Leslie Alexander",
			avatar: img,
		},
		children: "Hi I'm a button",
	},
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const User = (props) => <Component {...props} />