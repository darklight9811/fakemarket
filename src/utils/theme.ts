import { ThemeInterface } from "../styles/styled"

export const colorKey =
	(color: keyof ThemeInterface["colors"]) =>
	({ theme }: { theme: ThemeInterface }) =>
		theme.colors[theme.colors[color]]

export const mapColor =
	(color: keyof ThemeInterface["colors"]) =>
	({ theme }: { theme: ThemeInterface }) =>
		colorKey(color)({ theme }) || theme.colors[color]
