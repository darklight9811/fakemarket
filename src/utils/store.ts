// Packages
import create from "zustand"
import pipe from "ramda/es/pipe"
import shallow from 'zustand/shallow'
import { useCallback, useMemo } from "react"
import { subscribeWithSelector, persist } from "zustand/middleware"

// Utils
import { only } from "./object"

export const useExtractFromStore = (store, keyOrKeys?: string[] | string) => {
	const keys = useMemo(() => Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys], [keyOrKeys])

	const cb = useCallback((state) => {
		return keyOrKeys ? only(state, keys) : state
	}, [keys, keyOrKeys])

	return store(cb, shallow)
}

export const createStore = pipe(subscribeWithSelector, persist, create)