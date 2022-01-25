import http from "http"
import axios from "axios"

export default async function handler (req, res: http.ServerResponse) {
	const { data, headers } = await axios(`${process.env.IMG_API}${req.query.id}`, { responseType: "arraybuffer" })

	Object.entries(headers).forEach(entry => res.setHeader(...entry))
	res.write(data)
	res.end()
}