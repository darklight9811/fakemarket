// Decorators
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

export const decorators = [
	styled,
	suspense,
]