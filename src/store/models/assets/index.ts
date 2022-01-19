// Imports
import useAssetSlice from "./slice"

// Utils
import { useExtractFromStore } from "../../../utils/store"

// Parts
export type { default as AssetType } from "./types"
export { default as assetInitialData } from "./data"
export { default as useAssetSlice } from "./slice"

// Types
import { FilterObject } from "../../../types/object"

const useAsset = <Return extends Parameters<Parameters<typeof useAssetSlice>[0]>[0], Keys extends (keyof Return)[]>(...key: Keys) => {
	const extracted = useExtractFromStore(useAssetSlice, key as string[])

	return Object.values(extracted) as FilterObject<Return, Keys>
}

export default useAsset