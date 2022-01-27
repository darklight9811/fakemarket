// Model
import initialData from "./data"
import { createStore } from "../../../utils/store"

type State = typeof initialData

const useConfigSlice = createStore("config")((set: any) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...initialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	setMode: async (mode: "dark" | "light" | "default") => {
		set(() => ({ mode }))
	},
}));

export default useConfigSlice