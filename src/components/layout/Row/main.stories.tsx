// Component
import CardComponent from "."
import { Story } from "../../../utils/types"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Card",
	component: CardComponent,
	argTypes: {
		loading: {
			description: "Show the component's skeleton type",
			defaultValue: false,
			type: "boolean",
			control: {
				type: "boolean",
			}
		},
		asset: {
			description: "The NFT asset to be displayed in the card",
			control: false,
		}
	}
})

// -------------------------------------------------
// Reference data
// -------------------------------------------------

const assetRef = {
	name: "Cool asset",
	data: {
		img: "Qmam1XbS4Z3SNU1hZzZNNtV1o4V4hpAeRwCZ4nk1YMuech"
	},
	price: "0.001 WAX"
}

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Card = (props) => <CardComponent asset={assetRef as any} {...props} />