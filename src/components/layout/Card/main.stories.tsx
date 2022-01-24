// Component
import Card from "."
import { Story } from "../../../utils/types"

// -------------------------------------------------
// Config
// -------------------------------------------------

export default Story({
	title: "Card",
	component: Card,
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
	}
}

// -------------------------------------------------
// Stories
// -------------------------------------------------

export const Primary = (props) => <Card asset={assetRef as any} {...props} />