// Packages
import { fireEvent, render, screen } from "@testing-library/react"

// Component
import Button from ".."
import Provider from "../../Provider"

describe("Button general tests", () => {
	test("Test if component breaks on render", () => {
		// Arrange
		const callback = jest.fn()

		// Act
		render(<Provider><Button onClick={callback}>Test button</Button></Provider>)
		fireEvent.click(screen.getByText("Test button"))

		// Assert
		expect(callback).toBeCalled()
	})
})