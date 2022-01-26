// Styles
import GlobalTheme from "../../src/styles/global"

const ThemeDecorator = storyFn => (
	<>
		<GlobalTheme />
		{storyFn()}
	</>
)

export default ThemeDecorator
