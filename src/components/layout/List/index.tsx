// Packages
import { Fragment, useMemo } from "react"

// Component
import { PropTypes } from "./types"

const List = (props: PropTypes) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const list = useMemo(() => {
		if (props.loading) return Array.from(Array((props.perRow || 4) * 2)).map(i => props.component({ loading: true }))

		return props.data.map(item => {
			return (
				<Fragment key={item[props.id || "id"]}>
					{props.component(item)}
				</Fragment>
			)
		})
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return <>{list}</>
}

export default List