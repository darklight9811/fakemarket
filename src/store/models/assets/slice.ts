// Types
import PaginationType from "../../../types/pagination"

// Utils
import { omit } from "../../../utils/object"
import request from "../../../utils/request"

// Model
import assetInitialData from "./data"
import { createStore } from "../../../utils/store"

type State = typeof assetInitialData

const useAssetSlice = createStore((set, get) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...assetInitialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	fetch: async () => {
		const { limit, page, order, sort } = (get() as State).list
		const { data } = await request("atomicassets/v1/assets", { params: { limit, page, order, sort } })

		set((state: State) => ({ 
			list: {
				...state.list,
				data: data.data,
			}
		}))
	},
	paginate: (props: Omit<PaginationType, "data">) => {
		set((state: State) => ({
			list: {
				...state.list,
				...props
			}
		}))
	}
}))

useAssetSlice.subscribe(state => omit(state.list, ["data"]), useAssetSlice.getState().fetch)

export default useAssetSlice