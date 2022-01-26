// Packages
import { ThemeProvider } from "styled-components"

// Styles
import theme, { darkTheme } from "../../src/styles/theme"

// Utils
import { deepMerge } from "../../src/utils/object"

const themes = [theme, deepMerge(theme, darkTheme)]

const themeDecorator = (Story, context) => {
	return (
		<ThemeProvider theme={themes[context.globals.theme === "Light" ? 0 : 1]}>
			<Story {...context} />
		</ThemeProvider>
	);
}

export default themeDecorator