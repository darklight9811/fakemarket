// Component
import Typography from "../../general/Typography"
import * as styled from "./styled"
import { CardProps } from "./types"

const Card = (props: CardProps) => {
	console.log(props)

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			<styled.Image skeleton={props.loading} src={`https://ipfs.atomichub.io/ipfs/${props.asset?.data?.img}`} />

			<div>
				<p>
					<Typography loading={props.loading} bold>{props.asset?.name}</Typography>
				</p>
				<p>
					<Typography loading={props.loading}><Typography bold>Rarity:</Typography> Common</Typography>
				</p>
			</div>
		</styled.Container>
	)
}

export default Card