// Packages
import Head from 'next/head'
import { useEffect } from 'react'

// Components
import Card from '../components/layout/Card'
import List from '../components/layout/List'

// Store
import useAsset from '../store/models/assets'

// Styles
import { Box } from '../styles/layout'

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
			<Box container horizontal="space-evenly" itemMargin={"15px 10px"}>
				<List
					data={list.data.map(asset => ({ asset }))}
					component={Card}
					loading={loading && list.data.length === 0}
					id="asset_id"
					perRow={4}
				/>
			</Box>
		</>
	)
}
