import { Box } from "../../styles/layout"

import useAsset from "../../store/models/assets"
import Image from "next/image"
import Button from "../../components/general/Button"

const Buy = () => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	const [asset] = useAsset("selected")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// wait for asset to be selected
	if (!asset) return null

	return (
		<Box vertical="center" horizontal="center" direction="column">
			<h2>Confirm purchase?</h2>
			<Image src={`/api/img/${asset?.data?.img}`} width={178} height={252} alt={asset?.name} />

			<Box m="44px" itemMargin="0 22px">
				<Button>Cancel</Button>
				<Button>Buy</Button>
			</Box>
		</Box>
	)
}

export default Buy