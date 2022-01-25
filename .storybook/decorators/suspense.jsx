// Packages
import { Suspense } from "react"

const SuspenseDecorator = storyFn => (
	<Suspense fallback="">
		{storyFn()}
	</Suspense>
)

export default SuspenseDecorator
