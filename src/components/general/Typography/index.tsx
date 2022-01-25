// Component
import * as styled from "./styled"
import { TypographyProps } from "./types"

const Typography = (props: TypographyProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		props.loading !== true ? <styled.Font {...props}>{props.children}</styled.Font> : <styled.Loading />
	)
}

export default Typography