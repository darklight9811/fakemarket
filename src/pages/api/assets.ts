import axios from "axios"

export default async function handler (req, res) {
	const { data } = await axios(`${process.env.API}/atomicassets/v1/assets`, { params: {collection_name: "tmnt.funko", schema_name: "series1.drop", ...req.query} })

	res.status(200).json(data)
}