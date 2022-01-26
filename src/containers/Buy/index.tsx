// Styles
import { Box } from "../../styles/layout"

// Store
import useAsset from "../../store/models/assets"

// Components
import Button from "../../components/general/Button"
import { useModal } from "../../components/Modal"

const Buy = () => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// hooks
	const { close } = useModal()
	const [asset, dispatch] = useAsset("selected", "buy")

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const buy = () => {
		dispatch(asset?.id)
		close()
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	// wait for asset to be selected
	if (!asset) return null

	return (
		<Box vertical="center" horizontal="center" direction="column">
			<h2>Confirm purchase?</h2>
			<img src={`/api/img/${asset?.data?.img}`} height={252} alt={asset?.name} />

			<Box m="44px" itemMargin="0 22px">
				<Button width="107px" onClick={close} color="danger">Cancel</Button>
				<Button width="107px" onClick={buy} color="success">Buy</Button>
			</Box>
		</Box>
	)
}

export default Buy