import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import useAsset from '../store/models/assets'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [list, fetch] = useAsset("list", "fetch")

	useEffect(() => { fetch() }, [])

	return (
		<div className={styles.container}>
			<pre>
				{JSON.stringify(list, null, 4)}
			</pre>
		</div>
	)
}
