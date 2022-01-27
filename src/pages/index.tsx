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
import Filter from '../containers/Filter'

// Store
import useAsset from '../store/models/assets'

// Styles
import { Box } from '../styles/layout'

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [list, fetch, loading] = useAsset("list", "fetch", "loading")

	// states
	const [data, setdata] = useState(list.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
	const [useCard, setUseCard] = useState(true)


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

				<Box mb="24px">
					<Filter onChange={filter => setdata(data => filter.sort([...data]))} />
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
						data={data.map(asset => ({ id: asset.id, asset }))}
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
