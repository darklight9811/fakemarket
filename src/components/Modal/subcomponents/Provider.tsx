// Packages
import React from "react"

// Interfaces
import { ProviderProps } from "../types"

// Contexts
import ModalContext from "./context"

// Styles
import * as styled from "../styled"

// Services
import useModalConfig from "../../../store/models/modal"

const Provider: React.FC<ProviderProps> = (props: ProviderProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// refs
	const container = React.useRef<HTMLDivElement>()

	// models
	const [display, open, onOpen, onClose] = useModalConfig("display", "open", "onOpen", "onClose")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ModalContext.Provider
			value={{
				display: display,
				open: onOpen,
				close: onClose,
				element: container.current as Element,
			}}
		>
			{props.children}

			<styled.Container
				id="modal-background"
				open={open}
				ref={container as any}
			/>
		</ModalContext.Provider>
	)
}

export default Provider
