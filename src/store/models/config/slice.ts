// Model
import initialData from "./data"
import { createStore } from "../../../utils/store"

type State = typeof initialData

const useAssetSlice = createStore((set: any) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...initialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	fetch: async (mode: "dark" | "light" | "default") => {
		set(() => ({ mode }))
	},
}));

export default useAssetSlice