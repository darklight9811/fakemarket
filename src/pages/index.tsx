// Packages
import Head from 'next/head'
import { useEffect, useState } from 'react'

// Components
import Card from '../components/layout/Card'
import List from '../components/layout/List'
import Modal from '../components/layout/Modal'
import Row from '../components/layout/Row'
import Button from '../components/general/Button'
import Icon from '../components/general/Icon'
import Typography from '../components/general/Typography'

// Containers
import Buy from '../containers/Buy'

// Store
import useAsset from '../store/models/assets'

// Styles
import { Box } from '../styles/layout'

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [useCard, setUseCard] = useState(true)

	// hooks
	const [list, fetch, loading] = useAsset("list", "fetch", "loading")

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => { fetch() }, [fetch])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Head>
				<title>FakeStore</title>
			</Head>
			<Box container>
				<Box fill mb="24px" vertical="center" horizontal="space-between">
					<Typography fs={32}>NFTs</Typography>
					<Button onClick={() => setUseCard(s => !s)}><Icon name="boxes" /></Button>
				</Box>

				<Box
					p="24px"
					mb="48px"
					round="10px"
					background='backgroundAlt'
					itemMargin={"15px 10px"}
					horizontal="space-around"
				>
					<List
						data={list.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).map(asset => ({ id: asset.id, asset }))}
						component={useCard ? Card : Row}
						loading={loading}
						perRow={4}
					/>
				</Box>
			</Box>

			<Modal id="buy-asset">
				<Buy />
			</Modal>
		</>
	)
}
