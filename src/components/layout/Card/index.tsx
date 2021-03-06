// Component
import * as styled from "./styled"
import { CardProps } from "./types"

// Styles
import { Division } from "../../../styles/layout"

// Components
import Button from "../../general/Button"
import Typography from "../../general/Typography"
import { useModal } from "../Modal"

// Store
import useAsset from "../../../store/models/assets"

const Card = (props: CardProps) => {
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
		if (props.asset && !props.loading) {
			open("buy-asset")
			select(props.asset.id)
		}
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container onClick={onSelect}>
			{!props.loading && <styled.Backdrop src={`api/img/${props.asset?.data?.img || props.asset?.data?.backimg}`} />}
			<styled.Image skeleton={props.loading} src={`api/img/${props.asset?.data?.img || props.asset?.data?.backimg}`} />

			<div style={{ width: "100%" }}>
				<p>
					<Typography loading={props.loading} bold>{props.asset?.name}</Typography>
				</p>
				<p>
					<Typography loading={props.loading}><Typography bold>Rarity:</Typography> Common</Typography>
				</p>

				<Division my="24px" />

				<styled.Price>
					<Typography loading={props.loading}>Fixed price</Typography>

					{!props.loading && <Button>{props.asset?.price}</Button>}
				</styled.Price>
			</div>
		</styled.Container>
	)
}

export default Card