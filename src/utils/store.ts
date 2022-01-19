// Packages
import shallow from 'zustand/shallow'
import { useCallback, useMemo } from "react"

// Utils
import { only } from "./object"

export const useExtractFromStore = (store, keyOrKeys?: string[] | string) => {
	const keys = useMemo(() => Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys], [keyOrKeys])

	const cb = useCallback((state) => {
		return keyOrKeys ? only(state, keys) : state
	}, [keys, keyOrKeys])

	return store(cb, shallow)
}