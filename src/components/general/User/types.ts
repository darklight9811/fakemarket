// Types
import { UserType } from "../../../store/models/auth/types";

export type UserProps = {
	user: UserType;
	onClick?: (user: UserType) => void;
	showName?: boolean;
}