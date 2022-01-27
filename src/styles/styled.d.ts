import defaultTheme from "./theme"
import "styled-components"

type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends ThemeInterface {}
}