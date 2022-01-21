// Component
import Typography from "../../general/Typography"
import * as styled from "./styled"
import { CardProps } from "./types"

const Card = (props: CardProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			<styled.Image skeleton={props.loading} src={"https://s3-alpha-sig.figma.com/img/e9d9/11b2/5dcebe30e5d5046cea5ef99f442c1ca7?Expires=1643587200&Signature=eOZVMwYLlaONg~xl4PbhDf2EjGwku-ogWA6ECPiGNx1~PSjkZWo35MW8Znn~h2DlB3yhHdCaxupaZjNu1rLrHL-W3fxZx0q9cR16z7OyPAvyfLS8-TxqILcR8DB4dNC79ZrsHGq~0dAvg2L9aOQeXLv9UnUxc-7XAv7fNDES7PLtIz2SF1lVBhMeUvhhc2sAn2eBcvsuyY-iXvtvuK7YTWQi6iW-VzZd9sBm1JE0TqGbCJ8UEvEtwG5Y3UIdfuitZQONQ1a4wlZa86Y3Fi~RsL-wPGN9kQS3P6SknR~gBY3lHyaO6QUrTUggW-vym5L-jlAjCxIH3sg9dRz-yhNqsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"} />

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