// Model
import initialData from "./data"
import { createStore } from "../../../utils/store"

const useAuthSlice = createStore(() => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...initialData,
}));

export default useAuthSlice