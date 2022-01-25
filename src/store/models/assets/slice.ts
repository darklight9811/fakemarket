// Types
import PaginationType from "../../../types/pagination"

// Utils
import request from "../../../utils/request"

// Model
import assetInitialData from "./data"
import { createStore, paginationChanged } from "../../../utils/store"
import { sanitize } from "./utils"

type State = typeof assetInitialData

const useAssetSlice = createStore((set: any, get: any) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...assetInitialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	fetch: async () => {
		set(() => ({ loading: true }))

		const { limit, page, order, sort } = (get() as State).list
		const { data } = await request("atomicassets/v1/assets", { params: { limit, page, order, sort } })

		set((state: State) => ({
			loading: false,
			list: {
				...state.list,
				data: sanitize(data.data),
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
}));

// -------------------------------------------------
// Listeners
// -------------------------------------------------

useAssetSlice.subscribe((curr, prev) => {
	if (paginationChanged(curr, prev)) {
		useAssetSlice.getState().fetch()
	}
})

export default useAssetSlice