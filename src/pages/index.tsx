// Packages
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// Components
import Card from "../components/layout/Card"
import List from "../components/layout/List"
import Modal from "../components/layout/Modal"
import Row from "../components/layout/Row"
import Button from "../components/general/Button"
import Icon from "../components/general/Icon"
import Typography from "../components/general/Typography"

// Containers
import Buy from "../containers/Buy"
import Filter from "../containers/Filter"

// Store
import useAsset from "../store/models/assets"

// Styles
import { Box } from "../styles/layout"

export default function Home() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const router = useRouter()
	const [list, fetch, loading, error] = useAsset("list", "fetch", "loading", "error")

	// states
	const [data, setdata] = useState(list.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
	const [useCard, setUseCard] = useState(true)

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const errorReload = () => {
		localStorage.clear()
		router.reload()
	}

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => { fetch() }, [fetch])

	useEffect(() => setdata(list.data), [list])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Head>
				<title>FakeMarket</title>
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
					p="24px 0"
					mb="48px"
					mx="-10px"
					round="10px"
					itemMargin={"15px 10px"}
					horizontal="space-around"
					style={{ width: "calc(100% + 20px)" }}
				>
					{
						error &&

						<Box fill horizontal="center" vertical="center" mt="10vh" direction="column" itemMargin="14px 0">
							<Typography fs={36}>An error has occurred, please try again later</Typography>

							<Button onClick={errorReload}>Click here to reload page</Button>
						</Box>
					}
					{
						!error &&

						<List
							data={data.map(asset => ({ id: asset.id, asset }))}
							component={useCard ? Card : Row}
							loading={loading}
							perRow={4}
						/>
					}
				</Box>
			</Box>

			<Modal id="buy-asset">
				<Buy />
			</Modal>
		</>
	)
}
