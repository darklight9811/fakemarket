import defaultTheme from "./theme"
import "styled-components"

type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
	interface DefaultTheme extends ThemeInterface {}
}