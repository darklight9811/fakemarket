// Packages
import { ThemeProvider } from "styled-components"

// Styles
import theme from "../../src/styles/theme"
import GlobalTheme from "../../src/styles/global"

const ThemeDecorator = storyFn => (
	<ThemeProvider theme={theme}>
		<GlobalTheme />
		{storyFn()}
	</ThemeProvider>
)

export default ThemeDecorator
