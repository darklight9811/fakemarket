import { AssetType } from "."
import { add, autoPipe, keep, rename } from "../../../utils/functional"

const sanitizer = autoPipe(
	keep("asset_id", "data", "name", "schema"),
	rename({asset_id: "id"}),
	add(() => ({ price: `${(Math.random() * 0.1 + 0.001).toFixed(3)} WAX` })),
)

export const sanitize = (asset: AssetType | AssetType[]) => sanitizer(asset)