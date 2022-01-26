type User = { id: string; avatar: string; name: string; };

export type UserProps = {
	user: User;
	onClick?: (user: User) => void;
	showName?: boolean;
}