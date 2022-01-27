// Component
import * as styled from "./styled"
import { CardProps } from "./types"

// Styles
import { Box, Division } from "../../../styles/layout"

// Components
import Button from "../../general/Button"
import Typography from "../../general/Typography"
import { useModal } from "../Modal"
import useAsset from "../../../store/models/assets"

const Row = (props: CardProps) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const { open } = useModal()
	const [select] = useAsset("select")

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onSelect = () => {
		open("buy-asset")
		select(props.asset.id)
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container onClick={onSelect}>
			<Box direction="row" vertical="center" horizontal="space-between" fill>
				<styled.Image skeleton={props.loading} src={`api/img/${props.asset?.data?.img}`} />

				<p>
					<Typography loading={props.loading} bold>{props.asset?.name}</Typography>
				</p>
				<p>
					<Typography loading={props.loading}><Typography bold>Rarity:</Typography> Common</Typography>
				</p>

				<Typography loading={props.loading}>Fixed price</Typography>

				{!props.loading && <Button>{props.asset?.price}</Button>}
			</Box>
		</styled.Container>
	)
}

export default Row