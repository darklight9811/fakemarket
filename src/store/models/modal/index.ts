// Imports
import { useMemo } from "react"
import useModalSlice from "./slice"

// Utils
import { useExtractFromStore } from "../../../utils/store"

// Parts
export { default as modalInitialData } from "./data"
export { default as useModalSlice } from "./slice"

// Types
import { FilterObject } from "../../../types/object"

const useModalConfig = <Return extends Parameters<Parameters<typeof useModalSlice>[0]>[0], Keys extends (keyof Return)[]>(...key: Keys) => {
	const extracted = useExtractFromStore(useModalSlice, key as string[])

	const arr = useMemo(() => Object.values(extracted) as FilterObject<Return, Keys>, [extracted])

	return arr
}

export default useModalConfig