// Model
import initialData from "./data"
import { createStore } from "../../../utils/store"

type State = typeof initialData

const useModalSlice = createStore("modal")((set: any) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...initialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	onOpen: async (id?: string) => {
		set(() => ({ open: true, ...(id ? { display: id }: {}) }))
	},
	onClose: async () => {
		set(() => ({open: false}))
	}
}));

export default useModalSlice