import { ThemeInterface } from "../styles/styled"
import { marginProp, paddingProp } from "../types/layout"

export const colorKey =
	(color: (keyof ThemeInterface["colors"]) | string) =>
	({ theme }: { theme: ThemeInterface }) =>
		theme.colors[theme.colors[color]] || theme.colors[color] || color

export const mapColor =
	(color: (keyof ThemeInterface["colors"]) | string, theme?: ThemeInterface) =>
	theme ?
		colorKey(color)({ theme }) || theme.colors[color] :
		({ theme }: { theme: ThemeInterface }) =>
			colorKey(color)({ theme })

export const positional = <Props>(abb: string, position: string) => (props: Props) =>
	Object
		.entries(props)
		.filter(entry => [abb, `${abb}t`, `${abb}b`, `${abb}l`, `${abb}r` ,`${abb}x` ,`${abb}y`].includes(entry[0]))
		.map(entry => `${{
			[abb]: position,
			[`${abb}t`]: `${position}-top`,
			[`${abb}b`]: `${position}-bottom`,
			[`${abb}l`]: `${position}-left`,
			[`${abb}r`]: `${position}-right`,
			[`${abb}x`]: `${position}-left: ${entry[1]}; ${position}-right`,
			[`${abb}y`]: `${position}-top: ${entry[1]}; ${position}-bottom`,
		}[entry[0]]}: ${entry[1]};`)

export const margin = positional<marginProp>("m", "margin")

export const padding = positional<paddingProp>("p", "padding")

export function shadeColor(color: string, percent: number) {
	let R = parseInt(color.substring(1,3),16)
	let G = parseInt(color.substring(3,5),16)
	let B = parseInt(color.substring(5,7),16)

	R = Math.floor(R * (100 + percent) / 100)
	G = Math.floor(G * (100 + percent) / 100)
	B = Math.floor(B * (100 + percent) / 100)

	R = (R<255)?R:255
	G = (G<255)?G:255
	B = (B<255)?B:255

	const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16))
	const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16))
	const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16))

	return "#"+RR+GG+BB
}