import { useEffect } from 'react'
import Card from '../components/layout/Card'
import List from '../components/layout/List'
import useAsset from '../store/models/assets'

export default function Home() {
	const [list, fetch, loading] = useAsset("list", "fetch", "loading")

	useEffect(() => { fetch() }, [fetch])

	return (
		<div>
			<List
				data={list.data.map(asset => ({ asset }))}
				component={Card}
				loading={loading}
			/>
		</div>
	)
}
