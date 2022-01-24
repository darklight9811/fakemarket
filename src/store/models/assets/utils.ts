import { AssetType } from "."
import { add, autoPipe, keep, rename } from "../../../utils/functional"

const sanitizer = autoPipe(
	keep("asset_id", "data", "name"),
	rename({asset_id: "id"}),
	add({ price: `${(Math.random() * 0.1).toFixed(3)} WAX` }),
)

export const sanitize = (asset: AssetType | AssetType[]) => sanitizer(asset)