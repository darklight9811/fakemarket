// Packages
import React from "react"

// Imports
import _context 	from "./subcomponents/context"
import _Modal 		from "./subcomponents/Modal"
import _Provider 	from "./subcomponents/Provider"

// Interfaces
import { ModalComponent, Context } from "./types"

// Build
const Modal 	= _Modal as ModalComponent
Modal.context 	= _context
Modal.Provider 	= _Provider
Modal.useModal 	= () => React.useContext(_context)

// Exports
export default Modal
export const context 	= _context
export const Provider 	= _Provider
export const useModal 	= (): Context => React.useContext(_context)
