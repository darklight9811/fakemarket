import { ThemeInterface } from "../styles/styled"

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
