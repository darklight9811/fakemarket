// Packages
import create from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

// Types
import PaginationType from "../../../types/pagination"

// Utils
import { omit } from "../../../utils/object"
import request from "../../../utils/request"

// Model
import assetInitialData from "./data"

const useAssetSlice = create(subscribeWithSelector((set, get) => ({
	// -------------------------------------------------
	// State
	// -------------------------------------------------

	...assetInitialData,

	// -------------------------------------------------
	// Dispatches
	// -------------------------------------------------

	fetch: async () => {
		const { limit, page, order, sort } = get().list
		const { data } = await request("atomicassets/v1/assets", { params: { limit, page, order, sort } })

		set(state => ({ 
			list: {
				...state.list,
				data: data.data,
			}
		}))
	},
	paginate: (props: Omit<PaginationType, "data">) => {
		set(state => ({
			list: {
				...state.list,
				...props
			}
		}))
	}
})))

useAssetSlice.subscribe(state => omit(state.list, ["data"]), useAssetSlice.getState().fetch)

export default useAssetSlice