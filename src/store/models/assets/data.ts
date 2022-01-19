// Types
import type AssetType from "./types";

// Model
import type PaginationType from "../../../types/pagination";

const assetInitialData = {
	selected: undefined as AssetType | undefined,
	list: {
		data: [],
		page: 1,
		limit: parseInt(process.env.NEXT_PUBLIC_PERPAGE || "10"),
	} as PaginationType<AssetType>,
}

export default assetInitialData