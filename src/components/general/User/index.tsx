// Packages
import Image from "next/image"

// Components
import Typography from "../Typography"

// Component
import * as styled from "./styled"
import { UserProps } from "./types"

const User = (props: UserProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<styled.Container>
			<Image src={props.user.avatar} alt={`${props.user.name} avatar`} width={30} height={30} />
			{props.showName && <Typography>{props.user.name}</Typography>}
		</styled.Container>
	)
}

export default User