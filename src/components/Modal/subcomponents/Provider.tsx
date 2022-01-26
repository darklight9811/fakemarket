// Packages
import React from "react"

// Interfaces
import { ProviderProps } from "../types"

// Contexts
import ModalContext from "./context"

// Styles
import * as styled from "../styled"

// Services
import ModalService from "services/modal"

const Provider: React.FC<ProviderProps> = (props: ProviderProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// refs
	const container = React.useRef<HTMLDivElement>()

	// models
	const [ data, dispatch ] = ModalService.useModel()

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<ModalContext.Provider
			value={{
				display: data.display,
				open: dispatch.onOpen,
				close: dispatch.onClose,
				element: container.current as Element,
			}}
		>
			{props.children}

			<styled.Container
				id="modal-background"
				open={data.open}
				ref={container as any}
			/>
		</ModalContext.Provider>
	)
}

export default Provider
