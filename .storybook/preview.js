// Decorators
import theme from "./decorators/theme"
import styled from "./decorators/styled"
import suspense from "./decorators/suspense"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
	expanded: true,
  },
}

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'Light',
        toolbar: {
            icon: 'switchalt',
            items: ['Light', 'Dark'],
            showName: true,
        },
    },
}

export const decorators = [
	styled,
	theme,
	suspense,
]