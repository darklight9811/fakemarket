// Packages
import { useEffect, useMemo, useState } from "react"

// Component
import { PropTypes } from "./types"

const List = (props: PropTypes) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [list, setlist] = useState([])

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.loading) setlist(Array.from(Array((props.perRow || 4) * 2)).map((_, i) => <props.component key={i} loading />))
		else setlist(props.data.map(item => <props.component key={item[props.id || "id"]} {...item} />))
	}, [props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return <>{list}</>
}

export default List