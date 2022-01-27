// Model
import initialData from "./data"
import { createStore } from "../../../utils/store"

const useAuthSlice = createStore("auth")(() => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...initialData,
}));

export default useAuthSlice