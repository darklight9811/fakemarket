// Component
import * as styled from "./styled"
import { CardProps } from "./types"

// Styles
import { Division } from "../../../styles/layout"

// Components
import Button from "../../general/Button"
import Typography from "../../general/Typography"

const Card = (props: CardProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			<styled.Image skeleton={props.loading} src={`api/img/${props.asset?.data?.img}`} />

			<div>
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