// Component
import Component, { useModal } from "."
import { Story } from "../../../utils/types"
import Button from "../../general/Button"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Modal",
	component: Component,
	argTypes: {
		children: {
			description: "Content to be displayed inside the modal",
			type: "string",
		},
	},
	args: {
		id: "test-modal",
		children: "Hi I'm a modal",
	},
	decorators: [
		Story => <Component.Provider><Story /></Component.Provider>,
	],
})

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Modal = (props) => {
	const { open } = useModal()

	return (
		<>
			<Button onClick={() => open("test-modal")}>Open me</Button>
			<Component {...props} />
		</>
	)
}