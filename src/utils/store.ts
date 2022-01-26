// Packages
import create from "zustand"
import pipe from "ramda/es/pipe"
import shallow from 'zustand/shallow'
import { useCallback, useMemo } from "react"
import { persist } from "zustand/middleware"

// Utils
import { omit, only } from "./object"

export const useExtractFromStore = (store, keyOrKeys?: string[] | string) => {
	const keys = useMemo(() => Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys], [keyOrKeys])

	const cb = useCallback((state) => {
		return keyOrKeys ? only(state, keys) : state
	}, [keys, keyOrKeys])

	return store(cb, shallow)
}

export const createStore = pipe(
	(...args: [any]) => persist(...args, { name: "fakestore", partialize: (state) => omit(state, "open") }),
	create,
) as typeof create

export const paginationChanged = (curr, prev) =>
	curr.list.limit !== prev.list.limit ||
	curr.list.order !== prev.list.order ||
	curr.list.page !== prev.list.page ||
	curr.list.sort !== prev.list.sort