// Packages
import Head from 'next/head'
import { useEffect } from 'react'

// Components
import Card from '../src/components/layout/Card'
import List from '../src/components/layout/List'

// Store
import useAsset from '../src/store/models/assets'

// Styles
import { Box } from '../src/styles/layout'

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

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
				<h1>NFTs</h1>

				<Box horizontal="space-around" itemMargin={"15px 10px"}>
					<List
						data={list.data.map(asset => ({ id: asset.asset_id, asset }))}
						component={Card}
						loading={loading}
						perRow={4}
					/>
				</Box>
			</Box>
		</>
	)
}