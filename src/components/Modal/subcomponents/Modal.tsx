// Packages
import { useContext, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

// Contexts
import modalContext from "./context"

// Component
import Props from "../types"

// Styles
import * as styled from "../styled"

const ModalMain: unknown = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const { element, display, close, open } = useContext(modalContext)

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.startOpen) open(props.id)
	}, [props.startOpen, props.id, open])

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const isCloseable = useMemo(() => props.closeable === undefined || props.closeable, [
		props.closeable,
	])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	if (display === props.id) {
		return createPortal((
			<>
				<styled.Background
					aria-label="backdrop"
					tabIndex={0}
					role="button"
					onKeyPress={() => true}
					onClick={() => isCloseable && close()}
				/>
				<styled.Modal style={{ maxWidth: props.width }} key={props.id}>
					<div className="d-flex">
						<div>
							{props.title && <styled.Title>{props.title}</styled.Title>}
							{
								props.subtitle &&
								<styled.Subtitle>{props.subtitle}</styled.Subtitle>
							}
						</div>

						{isCloseable && (
							<styled.Button type="button" onClick={() => close()}>
								<i className="fa fa-times" />
							</styled.Button>
						)}
					</div>

					<styled.Body>
						{props.children}
					</styled.Body>
				</styled.Modal>
			</>
		), element)
	}

	return null
}

export default ModalMain as React.FC<Props>
