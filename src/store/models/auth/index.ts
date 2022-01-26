// Imports
import { useMemo } from "react"
import useConfigSlice from "./slice"

// Utils
import { useExtractFromStore } from "../../../utils/store"

// Parts
export { default as authInitialData } from "./data"
export { default as useAuthSlice } from "./slice"

// Types
import { FilterObject } from "../../../types/object"

const useAuth = <Return extends Parameters<Parameters<typeof useConfigSlice>[0]>[0], Keys extends (keyof Return)[]>(...key: Keys) => {
	const extracted = useExtractFromStore(useConfigSlice, key as string[])

	const arr = useMemo(() => Object.values(extracted) as FilterObject<Return, Keys>, [extracted])

	return arr
}

export default useAuth