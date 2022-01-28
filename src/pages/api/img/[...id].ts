import http from "http"
import axios from "axios"

export default async function handler (req, res: http.ServerResponse) {
	const { id } = req.query
	const img = Array.isArray(id) ? id.join("/") : id
	console.log(`${process.env.IMG_API}${img}`)
	const { data, headers } = await axios(`${process.env.IMG_API}${img}`, { responseType: "arraybuffer" })

	Object.entries(headers).forEach(entry => res.setHeader(...entry))
	res.write(data)
	res.end()
}