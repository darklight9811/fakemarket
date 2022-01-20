// Packages
import { Fragment, useMemo } from "react"

// Component
import * as styled from "./styled"
import { PropTypes } from "./types"

const List = (props: PropTypes) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const list = useMemo(() => {
		if (props.loading) return Array.from(Array(5)).map(i => props.component({ loading: true }))

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

	return (
		<styled.Container>
			{list}
		</styled.Container>
	)
}

export default List