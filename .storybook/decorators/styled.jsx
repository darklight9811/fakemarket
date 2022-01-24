// Packages
import { ThemeProvider } from "styled-components"

// Styles
import theme from "../../src/styles/theme"

const ThemeDecorator = storyFn => (
	<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
