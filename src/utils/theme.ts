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