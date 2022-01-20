import { useEffect } from 'react'
import useAsset from '../store/models/assets'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [list, fetch, loading] = useAsset("list", "fetch", "loading")

	useEffect(() => { fetch() }, [])

	return (
		<div className={styles.container}>
			{
				!loading &&

				<pre>
					{JSON.stringify(list, null, 4)}
				</pre>
			}
		</div>
	)
}
