// Packages
import axios from "axios"

const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API
})

export default request