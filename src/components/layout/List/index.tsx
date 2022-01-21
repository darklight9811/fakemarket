// Packages
import { useMemo } from "react"

// Component
import { PropTypes } from "./types"

const List = (props: PropTypes) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const list = useMemo(() => {
		if (props.loading) return Array.from(Array((props.perRow || 4) * 2)).map((_, i) => <props.component key={i} loading />)

		return props.data.map(item =>
			<props.component key={item[props.id || "id"]} {...item} />
		)
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return <>{list}</>
}

export default List