// Component
import * as styled from "./styled"
import { TypographyProps } from "./types"

const Typography = (props: TypographyProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		props.loading !== true ? <p>{props.children}</p> : <styled.Loading />
	)
}

export default Typography